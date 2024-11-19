
import './App.css';
import Comment from './component/Comment';
import data from './data.json'

function App() {

  return (
    <div className="bg-slate-200 flex w-full h-screen overflow-y-auto justify-center ">
      <div className='flex justify-center p-4'>
      <Comment/>
      </div>
    </div>
  );
}

export default App;
