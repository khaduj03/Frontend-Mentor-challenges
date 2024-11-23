
import './App.css';
import Comment from './component/Comment';
import data from './data.json'

function App() {

  return (
    <div className='w-full flex-col h-full bg-slate-200 flex justify-center items-center'>
      <div className='flex justify-center p-4'>
      <Comment/>
      </div>
    </div>
  );
}

export default App;
