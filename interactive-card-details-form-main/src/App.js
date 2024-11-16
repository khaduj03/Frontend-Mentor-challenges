import { useState } from "react";
import Form from "./components/Form";
import Complete from "./components/Complete";
import FrontCard from "./components/FrontCard";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isCompelted, setIsCompleted] = useState(false);
  const [expDateMM, setExpDateMM] = useState("");
  const [expDateYY, setExpDateYY] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      cardName: !cardName,
      cardNumber: !cardNumber,
      expDateMM: !expDateMM,
      expDateYY: !expDateYY,
      cvc: !cvc,
    };

    if (cardName && cardNumber && expDateMM && expDateYY && cvc) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
      setErrors(newErrors);
    }
  };

  const continueNew = () => {
    setIsCompleted(false);
    setCardName("");
    setCardNumber("");
    setCvc("");
    setExpDateMM("");
    setErrors("");
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-[60%] relative justify-center items-center" 

      >
        <FrontCard
              className={` transition-transform duration-700 transform-gpu ${
                isCompelted ? "rotate-y-180" : "rotate-y-0"
              }`}
          cardName={cardName}
          cardNumber={cardNumber}
          expDateMM={expDateMM}
          expDateYY={expDateYY}
          cvc={cvc}
        />

        <div className="relative w-[400px] z-30 left-[350px]">
          <img
            className="absolute w-[400px] right-28 top-80"
            src="/images/bg-card-back.png"
            alt=""
          />
          <div className="w-[100px] h-[50px] absolute z-50 text-2xl text-white left-[190px] top-[410px]">
            {cvc ? cvc : "000"}
          </div>
        </div>

        <img className="w-[60%] h-screen" src="/images/bg-main-desktop.png" alt="" />
      </div>

      <div className="flex justify-center items-center">
        {/* Add Transition to Form and Complete */}
        <div
  className={`${
    isCompelted ? "scale-90 opacity-0" : "scale-100 opacity-100"
  } transition-all ease-in-out duration-500 transform-gpu`}
>
  {!isCompelted && (
    <Form
      handleSubmit={handleSubmit}
      cardName={cardName}
      cardNumber={cardNumber}
      setCardName={setCardName}
      setCardNumber={setCardNumber}
      setExpDateMM={setExpDateMM}
      setExpDateYY={setExpDateYY}
      setCvc={setCvc}
      errors={errors}
      setErrors={setErrors}
    />
  )}
</div>

<div
  className={`${
    isCompelted ? "scale-100 opacity-100" : "scale-90 opacity-0"
  } transition-all ease-in-out duration-500 transform-gpu`}
>
  {isCompelted && <Complete continueNew={continueNew} />}
</div>


      </div>
    </div>
  );
}

export default App;
