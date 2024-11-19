import React from "react";
import data from "../data.json";
import Reply from "./Reply";
import CommentSection from "./CommentSection";
const Comment = () => {
  return (
    <div className="w-[400px] h-[100px] rounded ">
      {data.comments.map((item) => {
        return (
          <>
            <div className="flex flex-row p-3 w-[600px] bg-white h-[130px] rounded m-3 ">
              <div className="flex flex-col w-7 h-20 p-3 bg-slate-200 justify-center items-center rounded">
                <span className="cursor-pointer">+</span>
                <span>{item.score}</span>
                <span className="cursor-pointer">-</span>
              </div>
              <div>
                <div className="justify-between flex ">
                  <div className="flex  flex-row w-auto h-auto gap-2 p-2 pl-3 ">
                    <img src={item.user.image.png} className="w-8 h-8" />
                    <strong className="text-xs">{item.user.username}</strong>
                    <p className="text-xs text-gray-400">{item.createdAt}</p>
                  </div>
                  <div className="flex flex-row cursor-pointer">
                    <img
                      src="/images/icon-reply.svg"
                      className="w-3 h-3 m-1"
                      alt=""
                    />{" "}
                    <span className="text-xs font-bold text-blue-900">
                      Reply
                    </span>
                  </div>
                </div>
                <p className="text-xs w-[500px] pl-3 p-2">{item.content}</p>
              </div>
            </div>
            {item.replies &&
              item.replies.map((reply) => {
                return (
                  <Reply
                    score={reply.score}
                    replyingTo={reply.replyingTo}
                    image={reply.user.image.png}
                    username={reply.user.username}
                    id={reply.id}
                    content={reply.content}
                    createdAt={reply.createdAt}
                    user={data.currentUser.username}
                  />
                );
              })}
          </>
        );
      })}
      <CommentSection image={data.currentUser.image.png}/>
    </div>
  );
};

export default Comment;
