import React from "react";

export default function Form({
  setCardName,
  setCardNumber,
  cardNumber,
  cardName,
  handleSubmit,
  setCvc,
  setExpDateMM,
  setExpDateYY,
  errors,
  isNumber,
  setIsNumber
}) {
  const formatCardInput = (value) => {
    return value.replace(/(.{4})(?=.)/g, "$1 ");
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\s/g, "");
    const formattedValue = formatCardInput(value);
    setCardNumber(formattedValue);


    const isCardNumberNumeric = value
    .replace(/\s/g, "") // Remove spaces
    .split("") // Split into characters
    .every((char) => !isNaN(char) && char.trim() !== ""); // Check if every char is a number
    if(!isCardNumberNumeric){
        setIsNumber("Wrong format, numbers only")
    }else{
        setIsNumber("")
    }

  };

  return (
    <div>
      <div className="lg:w-[350px] w-screen p-[30px] lg:h-[300px] relative z-50">
        <form onSubmit={handleSubmit} action="" className="flex flex-col">
          <label htmlFor="" className="font-mono mb-1  mt-2">
            {" "}
            CARDHOLDER NAME
          </label>
          <input
            placeholder=" e.g. Jane Appleseed"
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value);
            }}
            type="text"
            name="cardName"
            className={`${errors.cardName?  "border-red-500 border-[1px]":"focus:border-purple-400 "} outline-none border-[1px] p-2 rounded  border-gray-200`}
          />
          {errors.cardName && (
            <span className="text-red-500 text-xs">Can't be blank</span>
          )}

          <label htmlFor="" className="font-mono mb-1 mt-2">
            {" "}
            CARD NUMBER
          </label>
          <input
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={handleChange}
            name="cardNumber"
            type="text"
            maxLength="19"
            className={`${errors.cardNumber?  "border-red-500 border-[1px]":"focus:border-purple-400 "} outline-none border-[1px] p-2 rounded  border-gray-200`}
          />
          {errors.cardNumber && (
            <span className="text-red-500 text-xs">Can't be blank</span>
          )}
            <span className="text-red-500 text-xs">{isNumber}</span>

          <div className="flex flex-row h-[80px]  justify-center items-center">
            <div className="flex flex-col w-52">
              <label htmlFor="" className="text-xs">
                EXP.DATE(MM/YY){" "}
              </label>
              <div className="flex flex-row">
                <input
                  placeholder="MM"
                  onChange={(e) => setExpDateMM(e.target.value)}
                  type="text"
                  className={`${(errors.expDateMM || errors.expDateYY)? " border-[1px] border-red-500":"border-[1px]  border-black"}"border-[1px] focus:border-purple-400 p-2 outline-none h-[30px] w-[50px] rounded "`}
                />
                <input
                  placeholder="YY"
                  onChange={(e) => setExpDateYY(e.target.value)}
                  type="text"
                  className={`${(errors.expDateMM || errors.expDateYY)? " border-[1px] border-red-500":"border-[1px] border-black"}"border-[1px] focus:border-purple-400 p-2 outline-none h-[30px] w-[50px] rounded  "`}
                />
              </div>
              {(errors.expDateMM || errors.expDateYY) && (
                <span className="text-red-500 text-xs">
                  Can't be blank
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-xs">
                CVC
              </label>
              <input
                placeholder="e.g. 123"
                onChange={(e) => setCvc(e.target.value)}
                type="text"
                className={`${
                  errors.cvc
                    ? "border-red-500 border-[1px] "
                    : "focus:border-purple-400 border-[1px] "
                }"  p-2 outline-none w-44 h-[30px] rounded ml-2  border-black"`}
              />
              {errors.cvc && (
                <span className="text-red-500 flex text-xs ml-2">
                  Can't be blank
                </span>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Confirm"
            name="Confirm"
            className="lg:w-[300px] w-[350px] rounded-lg h-9 bg-black text-white"
          />
        </form>
      </div>
    </div>
  );
}
