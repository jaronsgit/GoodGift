import { useRouter } from "next/router";
import {getTransactionData} from "../firebase/Firebase";

export default () => {
    const router = useRouter();
    const transactionID = router.query.ID;
    getTransactionData(transactionID).then((value) => {
        console.log(value)   
    });

    return null
  }