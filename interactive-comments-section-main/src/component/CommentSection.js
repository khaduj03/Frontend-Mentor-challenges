import React from "react";

const CommentSection = ({ image, setInputValue , handleComment}) => {
  return (
    <div className="w-[610px] h-[130px] mb-10 rounded bg-white flex justify-center items-center flex-row">
      <form action="" onSubmit={handleComment} className="flex flex-row justify-center items-start">
        <img src={image} className="w-7 h-7 mr-2" alt="" />
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Add a comment ..."
          className="flex items-start p-3 w-[400px] h-[90px] border-[1px] outline-none"
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
