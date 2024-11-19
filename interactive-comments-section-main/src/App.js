import { useState } from 'react';
import './App.css';
import Comment from './component/Comment';

function App() {
  const [comment , setComment]=useState("")
  return (
    <div className="bg-slate-200 flex w-full h-screen overflow-y-auto justify-center ">
      <div className='flex justify-center p-4'>
      <Comment/>
      </div>
    </div>
  );
}

export default App;
