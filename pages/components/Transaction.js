import CustomContainer from "./CustomContainer";
import { useMoralisWeb3Api } from "react-moralis";
import { useState, useEffect } from "react";
import { Text, Divider, Link } from "@chakra-ui/react";

const Transaction = ({ user }) => {
  const Web3Api = useMoralisWeb3Api();
  const BASE_URL = "https://rinkeby.etherscan.io/tx/";
  const [transactions, setTransactions] = useState(null);

  const fetchTransactions = async () => {
    const data = await Web3Api.account
      .getTransactions({
        chain: "rinkeby",
        address: user.get("ethAddress"),
        limit: 20,
      })
      .catch((e) => console.log(e));
    if (data) {
      setTransactions(data.result);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <CustomContainer fontFamily="Acme">
      <Text fontSize="xl" mb="6" fontWeight="bold" fontFamily="Acme">
        My last 20 Transactions
      </Text>
      {transactions &&
        transactions.map((transaction) => (
          <div key={transaction.hash}>
            <Link href={`${BASE_URL}${transaction.hash}`} isExternal>
              🌐&nbsp; {transaction.hash}
            </Link>
            <Divider />
          </div>
        ))}
    </CustomContainer>
  );
};

export default Transaction;
