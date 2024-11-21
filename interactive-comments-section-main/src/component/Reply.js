import React from "react";

const Reply = ({ 
        id,
        user,
      content, 
      createdAt, 
      image, 
      username, 
      score,
      handleReply,
      handleDeleteREply,
      isReplyOnclikced
     }) => {
  return (
    <div className="m-4 w-[400px] border-l-2 border-slate-100" key={id}>
      <div className="flex flex-row p-3 relative left-20  w-[500px] bg-white h-[130px] rounded m-3 ">
        <div className="flex flex-col w-7 h-20 p-3 bg-slate-200 justify-center items-center rounded">
          <span className="cursor-pointer">+</span>
          <span>{score}</span>
          <span className="cursor-pointer">-</span>
        </div>
        <div>
          <div className="justify-between w-[400px] flex ">
            <div className="flex  flex-row w-auto h-auto gap-2 p-2 pl-3 ">
              <img src={image} className="w-8 h-8" />
              <strong className="text-xs">{username}</strong>
              {user === username&&(<span className="w-7 h-4 text-xs text-white flex justify-center items-center   bg-blue-900">you</span>)}
              <p className="text-xs text-gray-400 ">{createdAt}</p>
            </div>
            <div className="flex flex-row cursor-pointer">
              {user !== username && (
                <div 
                onClick={()=>{handleReply(id)}} 
                className="flex flex-row">
                  <img
                    src="/images/icon-reply.svg"
                    className="w-3 h-3 m-1"
                    alt=""
                  />
                  <span
                  className="text-xs font-bold text-blue-900">Reply</span>
                </div>
              )}
              {user === username && (
                <div className="flex flex-row">
                    <div className="flex flex-row mr-1">
                  <img src="/images/icon-delete.svg" className="w-3 h-3 m-2 " alt="" />
                  <span className="text-xs text-red-500 mt-1 font-bold "
                  onClick={()=>{handleDeleteREply(id)}}
                  >Delete</span></div>
                  <div className="flex flex-row ml-1">
                    <img src="/images/icon-edit.svg" className="w-3 h-3 m-2 " alt="" />
                   <span className="text-xs text-blue-500 mt-1 font-bold ">Edit</span>
                   </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-xs w-[400px] pl-3 p-2">{content}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Reply;
