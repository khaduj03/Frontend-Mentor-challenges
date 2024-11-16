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
}) {
    const formatCardInput = (value) => {
        // Add a space after every 4 characters
        return value.replace(/(.{4})(?=.)/g, "$1 ");
      };
    
      const handleChange = (e) => {
        const value = e.target.value.replace(/\s/g, ""); // Remove existing spaces
        const formattedValue = formatCardInput(value);
        setCardNumber(formattedValue);
    
        // Validation: Check if all characters are numbers

      };
  
  return (
    <div>
      <div className="w-[300px] h-[300px]">
        <form onSubmit={handleSubmit} action="" className="flex flex-col">
          <label htmlFor="" className="font-mono mb-1  mt-2">
            {" "}
            CARDHOLDER NAME
          </label>
          <input
            placeholder=" e.g. Jane Appleseed"
            value={cardName}
            onChange={(e)=>{setCardName(e.target.value)}}
            type="text"
            name="cardName"
            className="outline-none border-[1px] p-2 rounded focus:border-purple-400 border-black"
          />
          {errors.cardName&&(<span className="text-red-500 text-xs">This feild is required</span>)}

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
            className="outline-none border-[1px] p-2 rounded focus:border-purple-400 border-black"
          />
          {errors.cardNumber&&(<span className="text-red-500 text-xs">this fiekd is required</span>)}

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
                  className="border-[1px] focus:border-purple-400 p-2 outline-none h-[30px] w-[50px] rounded mr-2 border-black"
                />
                <input
                placeholder="YY"
                onChange={(e) => setExpDateYY(e.target.value)}
                  type="text"
                  className="border-[1px] focus:border-purple-400 p-2 outline-none h-[30px] w-[50px] rounded  border-black"
                />
              </div>
              {errors.expDateMM && errors.expDateYY &&(<span className="text-red-500 text-xs">This feild is required</span>)}
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-xs">
                CVC
              </label>
              <input
              placeholder="e.g. 123"
              onChange={(e) => setCvc(e.target.value)}
                type="text"
                className={`${errors.cvc ? "border-red-500 border-[1px] " : "focus:border-purple-400 border-[1px] "}"  p-2 outline-none w-44 h-[30px] rounded ml-2  border-black"`}
              />
                  {errors.cvc&&(<span className="text-red-500 flex text-xs ml-2">This feild is required</span>)}
            </div>
        
          </div>
          <input type="submit" value="Confirm"  name="Confirm" className="w-[300px] rounded-lg h-9 bg-black text-white" />
        </form>
      </div>
    </div>
  );
}
