import { useState } from "react";
import Form from "./components/Form";
import Complete from "./components/Complete";
import FrontCard from "./components/FrontCard";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [expDateMM, setExpDateMM] = useState("");
  const [expDateYY, setExpDateYY] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState("");
  const [isNumber , setIsNumber]=useState("")

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
    <div className="lg:w-full w-screen h-screen flex flex-col lg:flex-row">
      <div className="lg:w-[60%] w-screen  relative justify-center items-center">

        <FrontCard
          cardName={cardName}
          cardNumber={cardNumber}
          expDateMM={expDateMM}
          expDateYY={expDateYY}
          cvc={cvc}
        />

        <div className="relative w-screen lg:w-[400px]  z-20 lg:left-[260px]">
          <img
            className="absolute w-[330px] left-[45px] top-[50px]  lg:w-[400px] lg:right-[200px] lg:top-80"
            src="/images/bg-card-back.png"
            alt=""
          />
          <div className="lg:w-[100px]  lg:h-[50px] absolute z-50 lg:text-2xl text-white top-[125px] left-[300px] lg:left-[330px] lg:top-[410px]">
            {cvc ? cvc : "000"}
          </div>
        </div>

        <img className="lg:w-[60%] w-screen h-[400px] lg:h-screen" src="/images/bg-main-desktop.png" alt="" />
      </div>

      <div className="flex justify-center items-center">
        <div
          className={`${
            isCompleted ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500 ease-in-out`}
        >
          {!isCompleted && (
            <Form
            setIsNumber={setIsNumber}
            isNumber={isNumber}
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
            isCompleted ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
        >
          {isCompleted && <Complete continueNew={continueNew} />}
        </div>
      </div>
    </div>
  );
}

export default App;
