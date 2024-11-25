import React from "react";

const CommentSection = ({ image, setInputValue,inputValue , handleComment}) => {
  return (
    <div  className='bg-white rounded-xl mt-4 w-[570px] h-[130px] flex flex-row  justify-center items-center'>
      <form action="" onSubmit={(e)=>(handleComment(e))} className="flex flex-row justify-center items-start">
        <img src={image} className="w-7 h-7 mr-2" alt="" />
        <textarea
        value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Add a comment ..."
          className="flex resize-none rounded-xl items-start p-3 w-[400px] h-[90px] border-[1px] outline-none"
        />
        <input
          type="submit"
          value={"Send"}
          className="w-20 h-10 ml-2 rounded-lg bg-blue-800 text-white"
        />
      </form>
    </div>
  );
};

export default CommentSection;
