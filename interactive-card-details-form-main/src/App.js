
import Form from './components/Form';
function App() {
  return (
    <div className="w-full h-screen flex flex-row ">
      <div className='w-[60%] relative'>
        <img className='z-10 w-[400px] absolute left-36 top-20' src="/images/bg-card-front.png "  alt="" />
        <img className='absolute w-[400px] right-28 top-80' src="/images/bg-card-back.png "  alt="" />
        <img className='w-[60%] h-screen' src="/images/bg-main-desktop.png" alt="" />
      </div>
      <div  className='flex  justify-center items-center'>
        <Form/>
      </div>

    </div>
  );
}

export default App;
