import { useRouter } from "next/router";
import { getTransactionData } from "../..firebase/Firebase";

const Transaction = () => {
  const router = useRouter();
  const { tid } = router.query;

  return <p>transaction: {tid}</p>;
};

export default Transaction;
