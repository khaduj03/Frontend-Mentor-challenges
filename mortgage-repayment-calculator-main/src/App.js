import { useState } from 'react';
import './App.css';
import { FaCalculator } from 'react-icons/fa';

function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [interest, setInterest] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [failedForm, setFailedForm]=useState(false)
  const [result , setResult]=useState(null)
  const [ total , setTotal]=useState(null)
  const [error , setError]=useState("")

  const handleInput = (setter) => (e) => {
    const value = e.target.value;
  
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setter(value);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const newErrors={
      amount:!amount,
      term:!term,
      interest:!interest,
      mortgageType:!mortgageType
    }
    setError(newErrors)
    const amountNum = parseFloat(amount);
    const termNum = parseFloat(term) * 12; 
    const interestNum = parseFloat(interest) / 100;

    if(!amount && !term && !interest && !mortgageType){
      console.log("all is empty")
    }
    

    if (mortgageType === "repayment" && amount && term && interest) {
      setFailedForm(true);
      
      const monthlyRate = interestNum / 12;
      const payment = (amountNum * monthlyRate * Math.pow(1 + monthlyRate, termNum)) / (Math.pow(1 + monthlyRate, termNum) - 1);
      const totalPayment = payment * termNum;
      let result = payment.toFixed(2);
      setResult(result);
      setTotal(totalPayment.toFixed(2)); 
    } 
    
    else if (mortgageType === "interest" && amount && term && interest) {
      setFailedForm(true);
      
      const interestOnly = amountNum * (interestNum / 12); 
      const totalPayment = (interestOnly * termNum) + amountNum; 
      
      let result = interestOnly.toFixed(2); 
      setResult(result);
      setTotal(totalPayment.toFixed(2)); 
    }
    
    
    else{
      return failedForm
    }
  };


  const handleClear=()=>{
    setAmount("")
    setInterest("")
    setMortgageType(null)
    setTerm("")
    setFailedForm(false)
  }

  return (
    <div className="flex flex-col bg-[rgba(227,243,251,255)] justify-center items-center w-full h-screen">
      <div className={` ${error.amount||error.term||error.mortgageType||error.interest?'lg:h-[450px] flex flex-col lg:flex-row bg-white w-screen lg:w-3/5 h-screen shadow-lg lg:rounded-xl':'flex flex-col lg:flex-row bg-white w-screen lg:w-3/5 h-screen lg:h-[400px] shadow-lg lg:rounded-xl'}`}>
        <div className={`${error.amount||error.term||error.mortgageType||error.interest?'lg:h-[500px] lg:w-1/2 p-6 flex-col flex':'w-full lg:w-1/2 flex flex-col p-6'}`}>
          <div className="flex justify-between">
            <h1 className="font-sans font-bold text-[rgba(19,48,64,255)]">Mortgage Calculator</h1>
            <p onClick={handleClear} className=" font-sans text-sm cursor-pointer">Clear All</p>
          </div>

          <form>
            <div className="h-[70px]">
              <label htmlFor="amount" className="text-xs text-[#437087]">Mortgage Amount</label>
              <div className={`${error.amount ?  'bg-red-600  border-red-500  ':'border-[rgba(19,48,64,255)] bg-[rgba(227,243,251,255)] '}mt-[7px] focus-within:bg-[rgba(217,219,46,255)] relative w-full rounded flex justify-between h-[35px] pb-[12px] pt-[5px] items-center border-[1.2px] focus-within:border-[rgba(217,219,46,255)]  box-border`}>
                <span className={` ${error.amount ?'text-white pl-[10px] w-[30px] ':'text-xs pl-[10px] w-[30px] h-[10px] justify-center items-center'}`}>&pound;</span>
                <input
                  value={amount}
                  onChange={handleInput(setAmount)}
                  type="text"
                  name="amount"
                  id="amount"
                  className="w-full focus:outline-none h-8 border-[rgba(227,243,251,255)] p-2 rounded rounded-tl-none rounded-bl-none mt-[7px]"
                />
              </div>
            </div>
            {error.amount&&(<div className='text-xs text-red-400'>this fail is required</div>)}
            

            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-1/2 lg:mr-2">
                <label htmlFor="term" className="text-xs text-[#437087]">Mortgage Term</label>
                <div className={`${error.term ?' text-white mt-[7px] border-[1.2px] focus-within:border-red-500 border-red-500 focus-within:bg-red-500 relative bg-red-500 w-full rounded flex justify-between h-[35px] pb-[14px] pt-[7px] items-center box-border':'mt-[7px] border-[1.2px] focus-within:border-[rgba(217,219,46,255)] border-[rgba(19,48,64,255)] focus-within:bg-[rgba(217,219,46,255)] relative bg-[rgba(227,243,251,255)] w-full rounded flex justify-between h-[35px] pb-[14px] pt-[7px] items-center box-border'}`}>
                  <input
                    value={term}
                    onChange={handleInput(setTerm)}
                    type="text"
                    name="term"
                    id="term"
                    className="w-[80%] focus:outline-none h-8 border-[rgba(227,243,251,255)] p-2 rounded rounded-tr-none rounded-br-none mt-[7px]"
                  />
                  <span className='text-xs w-[35px] h-[10px] justify-center items-center'>Years</span>
                
                </div>
                {error.term&&(<div className='text-xs text-red-400'>This field is required</div>)}
              </div>
           
             

              <div className="w-full lg:w-1/2 lg:ml-2 mt-4 lg:mt-0">
                <label htmlFor="rate" className="text-xs text-[#437087]">Interest Rate</label>
                <div className={`${error.interest ?' text-white mt-[7px] border-[1.2px] focus-within:border-red-500 border-red-500 focus-within:bg-red-500 relative bg-red-500 w-full rounded flex justify-between h-[35px] pb-[14px] pt-[7px] items-center box-border':'mt-[7px] border-[1.2px] focus-within:border-[rgba(217,219,46,255)] border-[rgba(19,48,64,255)] focus-within:bg-[rgba(217,219,46,255)] relative bg-[rgba(227,243,251,255)] w-full rounded flex justify-between h-[35px] pb-[14px] pt-[7px] items-center box-border'}`}>
                  <input
                    value={interest}
                    onChange={handleInput(setInterest)}
                    type="text"
                    name="rate"
                    id="rate"
                    className="w-[80%]  focus:outline-none h-8 border-[rgba(227,243,251,255)] p-2 rounded rounded-tr-none rounded-br-none mt-[7px]"
                  />
                  <span className='text-xs w-[20px] h-[10px] justify-center items-center'>%</span>
                </div>
                {error.interest&&(<div className=' text-xs text-red-400'>This field is required</div>)}
              </div>
            </div>
            
            


            <div className="flex flex-col h-auto mt-[15px]">
              <label htmlFor="mortgage-type" className="text-xs text-[#437087]">Mortgage Type</label>
              <div className="flex w-full h-[40px] cursor-pointer focus-within:bg-[#f5f5d1] rounded bg-white border-[rgba(19,48,64,255)] border-[1.2px] p-[10px] mt-[7px] focus-within:border-[rgba(217,219,46,255)]">
                <input 
                onChange={(e)=>{setMortgageType(e.target.value)}}
                type="radio"
                name='martgagetype' 
                 id="repayment"  
                value="repayment" 
                className='cursor-pointer'
                 required />
                <label htmlFor="repayment" className="cursor-pointer text-xs font-bold ml-[7px]">Repayment</label>
              </div>
              
              <div className="cursor-pointer flex w-full h-[40px] focus-within:bg-[#f5f5d1] rounded bg-white border-[rgba(19,48,64,255)] border-[1.2px] p-[10px] mt-[7px] focus-within:border-[rgba(217,219,46,255)]">
                <input 
                onChange={(e)=>{setMortgageType(e.target.value)}}
                type="radio" 
                id="interest" 
                name='martgagetype' 
                value="interest" 
                className='cursor-pointer ]'
                required />
                <label htmlFor="interest" className="cursor-pointer text-xs font-bold ml-[7px]">Interest Only</label>
              </div>
              {error.mortgageType&&(<div className='text-xs text-red-400'>This field is required</div>)}

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

        
        {!failedForm &&(
              <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:rounded-xl lg:rounded-tl-none lg:rounded-bl-[50px] bg-[rgba(19,48,64,255)] mt-6 lg:mt-0">
              <img src="/illustration-empty.svg" className="w-40 h-40" alt="" />
              <h2 className="text-white font-bold">Results shown here</h2>
              <p className="text-center m-[20px] text-xs text-[#659ab4] font-static">
                Complete the form and click “calculate repayments” to see what your monthly repayments would be.
              </p>
              </div>
        )}
        {failedForm && (
          <div className="w-full lg:w-1/2 h-full p-[20px] flex flex-col justify-center items-start lg:rounded-xl lg:rounded-tl-none lg:rounded-bl-[50px] bg-[rgba(19,48,64,255)] mt-6 lg:mt-0">
            <h1 className='text-white'>Your results</h1>
            <p className='text-start mt-[20px] mb-[20px] text-xs text-[#659ab4] font-static'>  Your results are shown below based on the information you provided. 
                  To adjust the results, edit the form and click “calculate repayments” again.
            </p>
            <div className='p-[20px] w-[300px] h-150px border-t-[5px] border-t-[rgba(217,219,46,255)] rounded-[10px] bg-[#242d31]' >
              <h4 className='text-[#659ab4] text-xs'>Your monthly repayments</h4>
              <h1 className=' w-[] text-[rgba(217,219,46,255)] text-[50px] border-b-[1px] p-[5px] border-b-[#659ab4]'>&pound;{result}</h1>
              <p className='text-[#659ab4] text-xs m-[10px]'> Total you'll repay over the term</p>
              <p className='text-white font-bold'>&pound;{total}</p>
            </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default App;
