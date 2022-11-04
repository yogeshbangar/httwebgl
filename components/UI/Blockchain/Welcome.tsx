import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { CryptoData } from ".";
import { shortenAddress } from "../../util/ipAddress";
import Spinner from "./Spinner";

const Input = ({
  placeholder,
  name,
  type,
  value,
  handleChange,
  err,
}: {
  placeholder: string;
  name: string;
  type: string;
  value: string | number;
  handleChange: (e: any, name: string) => void;
  err?: boolean;
}) => (
  <>
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className={"input-box"}
      style={{ border: err ? "2px solid #f00f" : "1px solid #fff6" }}
    />
  </>
);

const Welcome = ({
  isLoading,
  isConnecting,
  currentAccount,
  formData,
  connectWallet,
  handleChange,
  sendTransaction,
}: {
  isLoading: boolean;
  isConnecting: boolean;
  currentAccount: string | undefined;
  formData: CryptoData;
  connectWallet: () => void;
  handleChange: (e: any, name: string) => void;
  sendTransaction: () => void;
}) => {
  const handleSubmit = (e: any) => {
    const { addressTo, amount } = formData;
    e.preventDefault();
    if (!addressTo?.trim() && !amount) {
      setState({ ...state, addressErr: true, amountErr: true });
    } else if (!addressTo?.trim()) {
      setState({ ...state, addressErr: true });
    } else if (!amount) {
      setState({ ...state, amountErr: true });
    }
    if (!addressTo || !amount) return;

    sendTransaction();
  };
  const onChange = (e: any, name: string) => {
    if (name === "addressTo") {
      setState({ ...state, addressErr: false });
    }
    if (name === "amount") {
      setState({ ...state, amountErr: false });
    }
    handleChange(e, name);
  };
  const [state, setState] = React.useState({
    addressErr: false,
    amountErr: false,
  });
  return (
    <div className="crypto-container flex-clm">
      <div className="crypto-header flex-clm">
        <h1 className="crypto-title">Send Crypto across the world</h1>
        <p className="">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
        {!currentAccount && (
          <button type="button" onClick={connectWallet} className="connect-btn">
            {isConnecting ? (
              <Spinner />
            ) : (
              <>
                <AiFillPlayCircle className="text-white mr-2" size={25} />
                <span>Connect Wallet</span>
              </>
            )}
          </button>
        )}

        <div className="grid-container">
          <div className="grid-item" style={{ borderTopLeftRadius: "5px" }}>
            Reliability
          </div>
          <div className="grid-item">Security</div>
          <div className="grid-item" style={{ borderTopRightRadius: "5px" }}>
            Ethereum
          </div>
          <div className="grid-item" style={{ borderBottomLeftRadius: "5px" }}>
            Web 3.0
          </div>
          <div className="grid-item">Low Fees</div>
          <div className="grid-item" style={{ borderBottomRightRadius: "5px" }}>
            Blockchain
          </div>
        </div>
      </div>

      <div className="ethereum-container flex-clm">
        <div className="ethereum-title">
          <SiEthereum fontSize={24} color="#fff" />
          {shortenAddress(currentAccount as string)}
        </div>
        <div className="flex-clm input-container">
          <Input
            placeholder="Address To"
            name="addressTo"
            type="text"
            handleChange={onChange}
            value={formData.addressTo}
            err={state.addressErr}
          />
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={onChange}
            value={formData.amount}
            err={state.amountErr}
          />
          <Input
            placeholder="Keyword (Gif)"
            name="keyword"
            type="text"
            handleChange={onChange}
            value={formData.keyword}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            handleChange={onChange}
            value={formData.message}
          />

          <hr style={{ width: "100%" }} />

          <button
            type="button"
            onClick={handleSubmit}
            className="send-now"
            disabled={!currentAccount}
          >
            {isLoading ? <Spinner /> : "Send now"}
          </button>
        </div>
      </div>
      <style jsx global>{`
        .send-crypto .content-container {
          background: linear-gradient(
            105deg,
            rgba(25, 25, 25, 0.95) 0%,
            rgba(50, 50, 50, 0.95) 100%
          );
        }
      `}</style>
      <style>{`
        .crypto-header{
          text-align: center;
        }
        .crypto-title{
          margin-bottom: 0;
          text-align: center;
        }
        .connect-btn{
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          margin: 20px;
          padding: 12px 50px;
          border-radius: 100px;
          border: 1px solid #fff;
          cursor: pointer;
          min-width:250px;
        }
        .grid-container{
          display: grid;
          grid-template-columns: auto auto auto;
          width: 60%;
          text-align: center;
        }
        .grid-item{
          border: 1px solid;
          padding: 5px;
        }
        .ethereum-container{
          margin-top:20px;
        }
        .ethereum-title {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin:10px;
        }
        .input-container{
          width: 60%;
          margin-bottom:20px;
        }
        .send-now{
          width: 100%;
          height: 40px;
          border-radius: 100px;
          border: 1px solid;
          cursor: pointer;
        }
        .input-box {
          border: 1px solid #fff6;
          border-radius: 4px;
          height: 30px;
          width: 100%;
          padding: 2px;
          margin: 5px;
          padding-left: 10px;
        }
        @media (max-width: 576px) {
          .grid-container{
            width: 80%;
          }
          .input-container{
            width: 80%;
            margin-bottom:20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
