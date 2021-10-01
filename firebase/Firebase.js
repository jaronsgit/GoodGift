import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, child, get } from "firebase/database";
import { getDomainLocale } from "next/dist/shared/lib/router/router";

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(config);

const database = getDatabase(app);

export async function getTransactionData(transId){
    const dbRef = ref(database);
    let promise = get(child(dbRef, `transactions/`+transId));
    let result = await promise;
    return result.val()

}

export function addTransactionData(t_gift_id, t_message, t_rec_email, t_reciever, t_sender, t_sender_id){

    getTransactionData("",database).then((value) => {
        if (value != null){
            const transactionID = value.length;
            try{
                set(ref(database, 'transactions/' + transactionID), {
                    gift_id: t_gift_id,
                    message: t_message,
                    rec_email: t_rec_email,
                    reciever: t_reciever,
                    sender: t_sender,
                    sender_id: t_sender_id
                });
                console.log("http://localhost:3000/flora?ID=" + transactionID)
                return transactionID
            }
            catch(error){
                console.log(error)
            } 
        }
        else{
            console.log("Error");
        }

    });
}


//addTransactionData(0,"test", "rtcohen99@gmail.com", "Roy", "Jaron", "2", database);
