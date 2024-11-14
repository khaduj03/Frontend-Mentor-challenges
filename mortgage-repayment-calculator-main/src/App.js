import { useState } from 'react';
import './App.css';
import { FaCalculator } from 'react-icons/fa';

function App() {
  const [amount , setAmount]=useState("")
  const [term , setTerm]=useState("")
  const [interest , setInerest]=useState("")

  const handleChange=(e)=>{
    e.preventDefault()
    console.log(amount)
    console.log(term)
    console.log(interest)
  }
  return (
    <div className="flex flex-col bg-[rgba(227,243,251,255)] justify-center items-center w-full h-screen">
      <div className="flex flex-col lg:flex-row bg-white w-screen lg:w-3/5 h-screen lg:h-[400px] shadow-lg lg:rounded-xl">
        <div className="w-full lg:w-1/2 flex flex-col p-6">
          <div className="flex justify-between">
            <h1 className="font-sans font-bold text-[rgba(19,48,64,255)]">Mortgage Calculator</h1>
            <a href="#" className="font-sans text-sm">Clear All</a>
          </div>

          <form>
            <div className="h-[70px]">
              <label htmlFor="amount" className="text-xs text-[#437087]">Mortgage Amount</label>
              <div className='mt-[7px] focus-within:bg-[rgba(217,219,46,255)] relative bg-[rgba(227,243,251,255)] w-full rounded flex justify-between h-[35px] pb-[12px] pt-[5px] items-center border-[1.2px] focus-within:border-[rgba(217,219,46,255)] border-[rgba(19,48,64,255)] box-border'>
                <span className='text-xs pl-[10px] w-[30px] h-[10px] justify-center items-center'>$</span>
                <input
                value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
                  type="text"
                  name="amount"
                  id="amount"
                  className="w-full focus:outline-none h-8 border-[rgba(227,243,251,255)] p-2 rounded rounded-tl-none rounded-bl-none mt-[7px]"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-1/2 lg:mr-2">
                <label htmlFor="term" className="text-xs text-[#437087]">Mortgage Term</label>
                <div className='mt-[7px] border-[1.2px] focus-within:border-[rgba(217,219,46,255)] border-[rgba(19,48,64,255)] focus-within:bg-[rgba(217,219,46,255)] relative bg-[rgba(227,243,251,255)] w-full rounded flex justify-between h-[35px] pb-[14px] pt-[7px] items-center box-border'>
                  <input
                    value={term}
                    onChange={(e)=>{setTerm(e.target.value)}}
                    type="text"
                    name="term"
                    id="term"
                    className="w-[80%] focus:outline-none h-8 border-[rgba(227,243,251,255)] p-2 rounded rounded-tr-none rounded-br-none mt-[7px]"
                  />
                  <span className='text-xs w-[35px] h-[10px] justify-center items-center'>Years</span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 lg:ml-2 mt-4 lg:mt-0">
                <label htmlFor="rate" className="text-xs text-[#437087]">Interest Rate</label>
                <div className='mt-[7px] border-[1.2px] focus-within:border-[rgba(217,219,46,255)] border-[rgba(19,48,64,255)] focus-within:bg-[rgba(217,219,46,255)] relative bg-[rgba(227,243,251,255)] w-full rounded flex justify-between h-[35px] pb-[14px] pt-[7px] items-center box-border'>
                  <input
                    value={interest}
                    onChange={(e)=>{setInerest(e.target.value)}}
                    type="text"
                    name="rate"
                    id="rate"
                    className="w-[80%] focus:outline-none h-8 border-[rgba(227,243,251,255)] p-2 rounded rounded-tr-none rounded-br-none mt-[7px]"
                  />
                  <span className='text-xs w-[20px] h-[10px] justify-center items-center'>%</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-auto mt-[15px]">
              <label htmlFor="mortgage-type" className="text-xs text-[#437087]">Mortgage Type</label>
              <div className="flex w-full h-[40px] focus-within:bg-[#f5f5d1] rounded bg-white border-[rgba(19,48,64,255)] border-[1.2px] p-[10px] mt-[7px] focus-within:border-[rgba(217,219,46,255)]">
                <input type="radio" id="repayment" name="plan" value="Basic" required />
                <label htmlFor="repayment" className="text-xs font-bold ml-[7px]">Repayment</label>
              </div>
              
              <div className="flex w-full h-[40px] focus-within:bg-[#f5f5d1] rounded bg-white border-[rgba(19,48,64,255)] border-[1.2px] p-[10px] mt-[7px] focus-within:border-[rgba(217,219,46,255)]">
                <input type="radio" id="interest" name="plan" value="Premium" required />
                <label htmlFor="interest" className="text-xs font-bold ml-[7px]">Interest Only</label>
              </div>

              <button
              onClick={handleChange}
                type="submit"
                className="mt-3 w-full lg:w-[200px] bg-[rgba(217,219,46,255)] text-[rgba(19,48,64,255)] flex justify-center items-center h-[40px] rounded-[30px]"
              >
                <span className="ml-[10px] w-[20px] h-[20px] flex">
                  <FaCalculator size={15} color="rgba(19,48,64,255)" />
                </span>
                <span className="text-xs font-bold w-[150px] h-[20px] flex">Calculate Repayments</span>
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:rounded-xl lg:rounded-tl-none lg:rounded-bl-[50px] bg-[rgba(19,48,64,255)] mt-6 lg:mt-0">
          <img src="/illustration-empty.svg" className="w-40 h-40" alt="" />
          <h2 className="text-white font-bold">Results shown here</h2>
          <p className="text-center m-[20px] text-xs text-[#659ab4] font-static">
            Complete the form and click “calculate repayments” to see what your monthly repayments would be.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
