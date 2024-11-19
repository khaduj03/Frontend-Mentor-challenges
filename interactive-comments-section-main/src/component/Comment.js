import React from "react";
import { useState } from 'react';
import data from "../data.json";
import Reply from "./Reply";
import CommentSection from "./CommentSection";
const Comment = () => {
    const [newComment, setNewComment] = useState({
        content: '',
        username: ''
    });
    const [comments, setComments] = useState(data.comments);
    const [inputValue, setInputValue] = useState("");
    console.log(comments)



    const handleComment = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return; // اطمینان از این‌که کامنت خالی ارسال نمی‌شود.

        const newCommentObject = {
            id: data.comments.length + 1, // توجه کنید که این می‌تواند به مشکل بخورد
            content: inputValue,
            createdAt: "Just now",
            score: 0,
            user: {
                image: { 
                    png: "./images/avatars/image-juliusomo.png",
                    webp: "./images/avatars/image-juliusomo.webp"
                  },
            "username": "juliusomo"
            },
            replies: []
        };
        setComments((prevComments) => [...prevComments, newCommentObject]);
        
        setInputValue("")}

// پاک کردن مقدار ورودی بعد از ارسال
    
  return (
    <div className="w-[400px] h-[100px] rounded ">
      {comments.map((item) => {
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
                   {item.user.username!==data.currentUser.username&&(<><img
                      src="/images/icon-reply.svg"
                      className="w-3 h-3 m-1"
                      alt=""
                    />{" "}
                    <span className="text-xs font-bold text-blue-900">
                      Reply
                    </span></> )}
                    {item.user.username===data.currentUser.username&&(<>
                <div className="flex flex-row">
                    <div className="flex flex-row mr-1">
                  <img src="/images/icon-delete.svg" className="w-3 h-3 m-2 " alt="" />
                  <span className="text-xs text-red-500 mt-1 font-bold ">Delete</span></div>
                  <div className="flex flex-row ml-1">
                    <img src="/images/icon-edit.svg" className="w-3 h-3 m-2 " alt="" />
                   <span className="text-xs text-blue-500 mt-1 font-bold ">Edit</span>
                   </div>
                </div>
                </>)}
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
      <CommentSection handleComment={handleComment} setInputValue={setInputValue} image={data.currentUser.image.png}/>
    </div>
  );
}
export default Comment;
