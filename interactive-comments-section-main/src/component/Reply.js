import React from "react";

const Reply = ({
  img,
  username,
  createdAt,
  score,
  content,
  user,
  handleReply,
  id,
  commentId,
  handleDeleteREply,
  handleToReply,
}) => {
  return (
    <div>
      <div className="w-[450px] flex flex-row rounded-xl p-3 h-[130px] bg-white m-2">
        <div className="p-1">
          <span className="cursor-pointer flex justify-center items-center w-7 h-7 rounded-tl-md rounded-tr-md  bg-slate-100">
            +
          </span>
          <span className="cursor-pointer flex justify-center items-center w-7 h-7  bg-slate-100">
            {score}
          </span>
          <span className="cursor-pointer flex justify-center items-center w-7 h-7 rounded-bl-md rounded-br-md  bg-slate-100">
            -
          </span>
        </div>
        <div className="flex flex-col ml-3">
          <div className="flex flex-row space-x-3">
            <img src={img} alt={img} className="w-7 h-7" />
            <p className="font-bold">{username}</p>
            {user === username ? (
              <span className="text-xs text-white font-bol w-9 h-6 bg-blue-800 flex justify-center items-center">
                you
              </span>
            ) : (
              ""
            )}
            <p className="text-xs mt-1 text-gray-500">{createdAt}</p>
            {user !== username ? (
              <div className="flex flex-row  ml-36 ">
                <img
                  className="w-4 h-4 mt-1 mr-2"
                  src="/images/icon-reply.svg"
                  alt="reply-icon"
                />
                <span
                  onClick={() => {
                    handleToReply(id ,commentId,username);
                  }}
                  className="text-blue-800 font-bold text-sm cursor-pointer "
                >
                  reply
                </span>
              </div>
            ) : (
              <div className="flex w-[100px] justify-end space-x-4">
                <div className="flex flex-row">
                  <img src="/images/icon-delete.svg" className="w-3 h-3" />
                  <span
                    className="text-red-500 font-bold text-xs cursor-pointer"
                    onClick={() => handleDeleteREply(id)}
                  >
                    Delete
                  </span>
                </div>
                <div className="flex flex-row">
                  <img src="/images/icon-edit.svg" className="w-3  h-3" />
                  <span className="text-blue-800 font-bold text-xs">Edit</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <p className="text-xs">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
