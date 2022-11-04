import React from "react";
import Welcome from "./Welcome";
import { ethers } from "ethers";
export interface CryptoData {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}
const Blockchain = ({ onClose }: { onClose?: () => void }) => {
  const [currentAccount, setCurrentAccount] = React.useState<
    string | undefined
  >(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isConnecting, setIsConnecting] = React.useState(false);
  const [formData, setFormData] = React.useState<CryptoData>({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const sendTransaction = async () => {
    const ethereum = (window as { [key: string]: any })["ethereum"];
    try {
      if (ethereum) {
        const { addressTo, amount } = formData;

        const parsedAmount = ethers.utils.parseEther(amount);
        setIsLoading(true);
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: addressTo,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });
        setIsLoading(false);
      } else {
        alert("No ethereum object");
        setIsLoading(false);
      }
    } catch (error: any) {
      alert(error?.message || "No ethereum object");
      setIsLoading(false);
    }
  };
  const connectWallet = async () => {
    const ethereum = (window as { [key: string]: any })["ethereum"];
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      setIsConnecting(true);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      window.location.reload();
      setIsConnecting(false);
    } catch (error) {
      console.log(error);
      setIsConnecting(false);
    }
  };
  const handleChange = (e: any, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    console.log(formData);
  };
  const checkIfWalletIsConnect = async () => {
    const ethereum = (window as { [key: string]: any })["ethereum"];
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <>
      <div className="close" onClick={onClose}>
        x
      </div>
      <Welcome
        formData={formData}
        currentAccount={currentAccount}
        connectWallet={connectWallet}
        isLoading={isLoading}
        handleChange={handleChange}
        sendTransaction={sendTransaction}
        isConnecting={isConnecting}
      />
      <style>{`
        .close {
          text-align: center;
          width: 20px;
          height: 20px;
          position: absolute;
          right: 16px;
          top: 5px;
          cursor: pointer;
          border-width: 1px 2px 2px 1px;
          border-style: solid;
          border-color: rgb(172, 172, 172);
          border-image: initial;
          filter: drop-shadow(rgb(255, 255, 255) 0px 0px 2px);
          z-index: 2;
        }
      `}</style>
    </>
  );
};
export default Blockchain;
