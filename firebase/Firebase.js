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

function getTransactionData(transId,database){
    const dbRef = ref(database);
    get(child(dbRef, `transactions/`+transId)).then((snapshot) => {
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });
}

function addTransactionData(t_gift_id, t_message, t_rec_email, t_reciever, t_sender, t_sender_id, database){
    const transactionID = 2
    set(ref(database, 'transactions/' + transactionID), {
        gift_id: t_gift_id,
        message: t_message,
        rec_email: t_rec_email,
        reciever: t_reciever,
        sender: t_sender,
        sender_id: t_sender_id
    });
}