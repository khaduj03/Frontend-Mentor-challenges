import React from "react";
import { useState } from "react";
import data from "../data.json";
import Reply from "./Reply";
import CommentSection from "./CommentSection";

const Comment = () => {
  const [comments, setComments] = useState(data.comments);
  const [inputValue, setInputValue] = useState("");
  const [isReplyOnclikced, setIsReplyOncliked] = useState(false);
  const [id, setId] = useState("");
  const [replyValue, setReplyValue] = useState("");
  const [isEditeClicked, setEditeCliked]=useState(false)

    //for handling user comment
  const handleComment = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    setComments((prevComments) => {
      const nextId = prevComments.length + 1;
      const newCommentObject = {
        id: nextId,
        content: inputValue,
        createdAt: "Just now",
        score: 0,
        user: {
          image: {
            png: "./images/avatars/image-juliusomo.png",
            webp: "./images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
        replies: [],
      };

      return [...prevComments, newCommentObject];
    });

    setInputValue("");
  };

 
  // for user reply
  const handleReply = (id) => {
    setId(id);
    setIsReplyOncliked(true);
  };

  // for handling repling 
  const handleClickReplay = (e) => {
    e.preventDefault();
    if (replyValue.trim() === "") return;
    console.log("replyValue:", replyValue); // Log the reply value
    console.log("replying to comment ID:", id); // Log the comment being replied to
  
    setComments((prevComments) => {
      let reply= prevComments.map((comment) => {
        if (comment.id === id) {
          const newReply = {
            id: comment.replies.length + 1, // Generate reply ID
            content: replyValue,
            createdAt: "just now", // Set createdAt or use any other logic
            score: 0,
            replyingTo: comment.user.username,
            user: {
              image: { png: data.currentUser.image.png },
              username: data.currentUser.username,
            },
        
          };
          // Add the reply
          return { ...comment, replies: [...comment.replies, newReply] };
        }
        return comment;
      });
    return reply});
  
    setReplyValue("");
    setIsReplyOncliked(false);
  };
  

//   const handleEditReply = (replyId, content) => {
//     setEditingReplyId(replyId); // Set the reply id to be edited
//     setEditedReplyContent(content); // Set the current content to be edited
//   };
  
  const handleDelete = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleDeleteREply = (replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.replies) {
        const updatedReplies = comment.replies.filter(reply => reply.id !== replyId);
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(updatedComments);
  };


  return (
    <div className="w-[400px] h-[100px] rounded ">
      {comments.map((item) => {
        return (
          <>
            <div>
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
                      {item.user.username !== data.currentUser.username && (
                        <>
                          <img
                            src="/images/icon-reply.svg"
                            className="w-3 h-3 m-1"
                            alt=""
                          />{" "}
                          <span
                            className="text-xs font-bold text-blue-900"
                            onClick={() => {
                              handleReply(item.id);
                            }}
                          >
                            Reply
                          </span>
                        </>
                      )}
                      {item.user.username === data.currentUser.username && (
                        <>
                          <div className="flex flex-row">
                            <div className="flex flex-row mr-1">
                              <img
                                src="/images/icon-delete.svg"
                                className="w-3 h-3 m-2 "
                                alt=""
                              />
                              <span
                                className="text-xs text-red-500 mt-1 font-bold "
                                onClick={() => handleDelete(item.id)}
                              >
                                Delete
                              </span>
                            </div>
                            <div className="flex flex-row ml-1">
                              <img
                                src="/images/icon-edit.svg"
                                className="w-3 h-3 m-2 "
                                alt=""
                              />
                              <span className="text-xs text-blue-500 mt-1 font-bold ">
                                Edit
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-xs w-[500px] pl-3 p-2">{item.content}</p>
                </div>
              </div>
              {isReplyOnclikced && item.id === id && (
                <div>
                  <div className="w-[610px] h-[130px] mb-10 rounded bg-white flex justify-center items-center flex-row">
                    <form
                      action=""
                      onSubmit={handleClickReplay}
                      className="flex flex-row justify-center items-start"
                    >
                      <img
                        src={data.currentUser.image.png}
                        className="w-7 h-7 mr-2"
                        alt=""
                      />
                      <textarea
                        defaultValue={`@${item.user.username}`}
                        onChange={(e) => {
                          setReplyValue(e.target.value);
                        }}
                        type="text"
                        placeholder="Add a comment ..."
                        className="flex items-start justify-start p-3 w-[400px] h-[90px] border-[1px] outline-none"
                      />
                      <input
                        type="submit"
                        value={"Reply"}
                        onChange={(e) => {
                          setReplyValue(e.target.value);
                        }}
                        className="w-20 h-10 ml-2 rounded-lg bg-blue-800 text-white"
                      />
                    </form>
                  </div>
                </div>
              )}
              {isEditeClicked&&(
                <div>
                <div className="w-[610px] h-[130px] mb-10 rounded bg-white flex justify-center items-center flex-row">
                    <form
                    action=""
                    onSubmit={handleClickReplay}
                    className="flex flex-row justify-center items-start"
                    >
                    <img
                        src={data.currentUser.image.png}
                        className="w-7 h-7 mr-2"
                        alt=""
                    />
                    <textarea
                        defaultValue={`@${item.user.username}`}
                        onChange={(e) => {
                        setReplyValue(e.target.value);
                        }}
                        type="text"
                        placeholder="Add a comment ..."
                        className="flex items-start justify-start p-3 w-[400px] h-[90px] border-[1px] outline-none"
                    />
                    <input
                        type="submit"
                        value={"Update"}
                        onChange={(e) => {
                        setReplyValue(e.target.value);
                        }}
                        className="w-20 h-10 ml-2 rounded-lg bg-blue-800 text-white"
                    />
                    </form>
                </div>
                </div>
              )}
            </div>
            {item.replies &&
  item.replies.map((reply) => {
    return (
      <div className="flex flex-col w-[400px]" key={reply.id}>
        <Reply
          key={reply.id}
          {...reply}
          score={reply.score}
          replyingTo={reply.replyingTo}
          image={reply.user.image.png}
          username={reply.user.username}
          id={reply.id}
          content={reply.content}
          createdAt={reply.createdAt}
          user={data.currentUser.username}
          handleReply={handleReply}
          isReplyOnclikced={isReplyOnclikced}
          handleDeleteREply={handleDeleteREply}
        />

        {isReplyOnclikced && reply.id === id && (
          <div>
            <div className="w-[500px] h-[130px] relative left-28 rounded bg-white flex items-center flex-row">
              <form
                action=""
                onSubmit={handleClickReplay}
                className="flex flex-row justify-center items-start"
              >
                <img
                  src={data.currentUser.image.png}
                  className="w-7 h-7 mr-2"
                  alt=""
                />
                <textarea
                  defaultValue={`@${reply.user.username}`}
                  onChange={(e) => setReplyValue(e.target.value)}
                  type="text"
                  placeholder="Add a reply..."
                  className="flex items-start justify-start p-3 w-[320px] h-[90px] border-[1px] outline-none"
                />
                <input
                  type="submit"
                  value={"Reply"}
                  className="w-20 h-10 ml-2 rounded-lg bg-blue-800 text-white"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    );
  })}

          </>
        );
      })}
      <CommentSection
        handleComment={handleComment}
        setInputValue={setInputValue}
        image={data.currentUser.image.png}
        inputValue={inputValue}
      />
    </div>
  );
};
export default Comment;
