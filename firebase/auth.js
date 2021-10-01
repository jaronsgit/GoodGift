import React, {useState, useEffect, useContext, createContext} from 'react';
import queryString from 'query-string';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export async function getTransactionData(transId){

    let dbref = firebase.database().ref("transactions/"+transId);
    let promise = new Promise((resolve,reject) => {dbref.on("value", function(snapshot) {
        
        resolve(snapshot.val());
     }, function (error) {
        console.log("Error: " + error.code);
        resolve(null)
     });})
    
     return await promise 
}

export async function addTransactionData(t_gift_id, t_message, t_receiver,t_receiver_email,  t_sender, t_sender_email){
    let promise = new Promise((resolve, reject) => {
            const transactionID = uuidv4();
            try{
                firebase.database().ref("transactions/"+transactionID).set({
                    gift_id: t_gift_id,
                    message: t_message,
                    receiver: t_receiver,
                    receiver_email: t_receiver_email,
                    sender: t_sender,
                    sender_email: t_sender_email
                });
                resolve(transactionID)
            }
            catch(error){
                console.log(error)
                resolve(null)
            }
    });
    return await promise;
}

export async function getSentReceived(userEmail){
    let promise = new Promise((resolve, reject) => {
        getTransactionData("").then((value) => {
            var relatedTransactions = {sent: [], received: []};
            for (const transaction in value){
                if (value[transaction].sender_email === userEmail){
                    relatedTransactions.sent.push(value[transaction])
                }
                if (value[transaction].receiver_email === userEmail){
                    relatedTransactions.received.push(value[transaction])
                }
            }
            resolve(relatedTransactions)
        });
    });
    let result = await promise
    return result;
}

const authContext = createContext();

export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (email, password) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signup = (email, password) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            });
    };

    const sendPasswordResetEmail = (email) => {
        return firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                return true;
            });
    };

    const confirmPasswordReset = (password, code) => {
        const resetCode = code || getFromQueryString('oobCode');

        return firebase
            .auth()
            .confirmPasswordReset(resetCode, password)
            .then(() => {
                return true;
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        userId: user && user.uid,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}

const getFromQueryString = (key) => {
    return queryString.parse(window.location.search)[key];
};
