
import Form from './components/Form';
import FrontCard from './components/FrontCard';
function App() {
  return (
    <div className="w-full h-screen flex flex-row ">
      <div className='w-[60%] relative'>
        <FrontCard/>
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
