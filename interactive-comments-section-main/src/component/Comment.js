import React, { useState, useEffect } from "react";
import data from "../data.json"; // Your default data
import CommentSection from "./CommentSection";
const Comment = () => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isReplyOnclikced, setIsReplyOncliked] = useState(false);
  const [id, setId] = useState("");
  const [replyValue, setReplyValue] = useState("");
  const [isEditeClicked, setEditeCliked] = useState(false);
    const [replyId, setReplyId] = useState(null); // Declare replyId as state
  const [editContent, setEditContent] = useState(""); // Declare editContent as state

  // Load comments from localStorage or fallback to the default data
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    } else {
      setComments(data.comments);
    }
  }, []);

  // Save comments to localStorage every time it changes
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  // Handle user comment
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

// Reply handling function
const handleReply = (commentId, replyId = null) => {
  setId(commentId); // Set the comment ID being replied to
  setReplyId(replyId); // Set the reply ID for nested replies (if any)
  setIsReplyOncliked(true); // Show the reply form
  setReplyValue(""); // Reset the reply input value
};

// Submit reply handler
const handleClickReplay = (e) => {
  e.preventDefault();
  if (replyValue.trim() === "") return;

  setComments((prevComments) => {
    return prevComments.map((comment) => {
      if (comment.id === id) {
        const newReply = {
          id: (comment.replies ? comment.replies.length : 0) + 1, // Increment the reply ID
          content: replyValue,
          createdAt: "Just now",
          score: 0,
          replyingTo: comment.user.username,
          user: {
            image: { png: data.currentUser.image.png },
            username: data.currentUser.username,
          },
        };

        return {
          ...comment,
          replies: [...(comment.replies || []), newReply], // Add the new reply to the comment’s replies
        };
      }

      return comment;
    });
  });

  setReplyValue(""); // Clear the reply input field
  setIsReplyOncliked(false); // Close the reply input
  setId(null); // Reset the comment ID
};


  const handleDelete = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleDeleteREply = (replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.replies) {
        const updatedReplies = comment.replies.filter(
          (reply) => reply.id !== replyId
        );
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(updatedComments);
  };


  const handleEdite=(id)=>{
    setId(id)
    setEditeCliked(true)
    console.log(id)
    comments.map(comment=>{
      if(comment.id===id){
        console.log(comment) 
        setReplyValue(comment.content)
      }
    }) 

  }
  const updateComment=(e)=>{
    e.preventDefault()
      setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, content: replyValue }; // Save the edited content
        }
        return comment;
      });
    });
    setEditeCliked(false)
    
  }

  return (
    <div className="w-full h-full bg-slate-200 flex flex-col ">
      {comments.map((comment) => {
        return (
          <>
            <div className="flex flex-col w-full h-full">
              <div
                key={comment.id}
                className="w-[550px] h-[150px] rounded-xl m-3 bg-white flex  space-x-3 p-5"
              >
                <div className="w-8 h-28 flex flex-col bg-slate-200 rounded-xl mb-3 ">
                  <span className="flex justify-center items-center ">+</span>
                  <span className="flex justify-center items-center">
                    {comment.score}
                  </span>
                  <span className="flex justify-center items-center">-</span>
                </div>
                <div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row space-x-2">
                      <img
                        className="w-7 h-7 "
                        src={comment.user.image.png}
                        alt={comment.user.image.png}
                      />
                      <p>{comment.user.username}</p>
                      <p className="text-gray-500 text-xs mt-1">
                        {comment.createdAt}
                      </p>
                    </div>

                    {comment.user.username !== data.currentUser.username && (
                      <div className="flex flex-row">
                        <img
                          src="/images/icon-reply.svg"
                          className="w-3 h-3 m-1 cursor-pointer"
                          alt=""
                        />{" "}
                        <span
                          className="text-xs cursor-pointer font-bold text-blue-900"
                          onClick={() => {
                            handleReply(comment.id);
                          }}
                        >
                          Reply
                        </span>
                      </div>
                    )}

                    {comment.user.username === data.currentUser.username && (
                      <>
                        <div className="flex flex-row">
                          <div className="flex flex-row mr-1">
                            <img
                              src="/images/icon-delete.svg"
                              className="w-3 h-3 m-2  cursor-pointer "
                              alt=""
                            />
                            <span
                              className="text-xs text-red-500 mt-1  cursor-pointer font-bold "
                              onClick={() => handleDelete(comment.id)}
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
                            <span 
                            onClick={()=>handleEdite(comment.id)}
                            className="cursor-pointer text-xs text-blue-500 mt-1 font-bold ">
                              Edit
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    <p className="w-[450px] text-xs m-2">{comment.content}</p>
                  </div>
                </div>
              </div>

              {isReplyOnclikced && comment.id === id && (
                <div>
                  <div className="w-[550px] h-[150px] ml-4  rounded-xl bg-white flex justify-center items-center flex-row">
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
                        defaultValue={`@${editContent}`}
                        onChange={(e) => {
                          setReplyValue(e.target.value);
                        }}
                        type="text"
                        placeholder="Add a comment ..."
                        className="flex resize-none rounded-xl items-start justify-start p-3 w-[400px] h-[90px] border-[1px] outline-none"
                      />
                      <input
                        type="submit"
                        value={"Reply"}
                        onChange={(e) => {
                          setReplyValue(e.target.value);
                        }}
                        className={` w-20 h-10 ml-2 rounded-lg  bg-blue-300" text-white ${
                          replyValue ? "bg-blue-800" : "bg-blue-300"
                        }`}
                      />
                    </form>
                  </div>
                </div>
              )}
              {isEditeClicked && comment.id === id &&(
                <div>
                  <div className="w-[550px] h-[150px] ml-3 mb-3  rounded-xl bg-white flex justify-center items-center flex-row">
                    <form
                      action=""
                      onSubmit={updateComment}
                      className="flex flex-row justify-center items-start"
                    >
                      <img
                        src={data.currentUser.image.png}
                        className="w-7 h-7 mr-2"
                        alt=""
                      />
                      <textarea
                      key={id}
                        defaultValue={`@${comment.user.username} ${replyValue?replyValue:""}`}
                        onChange={(e) => {
                          setReplyValue(e.target.value);
                        }}
                        type="text"
                        placeholder="Add a comment ..."
                        className="flex items-start resize-none rounded-xl  justify-start p-3 w-[400px] h-[90px] border-[1px] outline-none"
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
            {comment.replies.length > 0 && (
              <div className="flex justify-center  items-end flex-col">
                {comment.replies.map((reply) => {
                  return (
                    <div className="felx flex-col">
                    <div
                      key={reply.id}
                      className="flex flex-col m-2 p-2  w-[450px] h-[130px] rounded-lg bg-white"
                    >
                      <div className="flex ">
                        <div className="w-8 h-28 flex flex-col bg-slate-200 rounded-xl mb-3 ">
                          <span className="flex justify-center items-center ">
                            +
                          </span>
                          <span className="flex justify-center items-center">
                            {reply.score}
                          </span>
                          <span className="flex justify-center items-center">
                            -
                          </span>
                        </div>

                        <div className="flex flex-col ml-3">
                          <div className="flex flex-row justify-between">
                            <div className="flex flex-row space-x-3">
                              <img
                                src={reply.user.image.png}
                                className="w-7 h-7"
                                alt={reply.user.username}
                              />
                              <p className="font-semibold">
                                {reply.user.username}
                              </p>
                              {reply.user.username ===
                                data.currentUser.username && (
                                <span className="w-7 h-4 text-xs text-white flex justify-center items-center   bg-blue-900">
                                  you
                                </span>
                              )}
                              <p className="text-gray-400 text-xs mt-1">
                                {reply.createdAt}
                              </p>
                            </div>

                            <div className="flex flex-row cursor-pointer">
                              {reply.user.username !==
                                data.currentUser.username && (
                                <div

                                  className="flex flex-row"
                                >
                                  <img
                                    src="/images/icon-reply.svg"
                                    className="w-3 h-3 m-1"
                                    alt=""
                                  />
                                  <span 
                                    onClick={() => {
                                      handleReply(reply.id);
                                    }}
                                  className="text-xs font-bold text-blue-900">
                                    Reply
                                  </span>
                                </div>
                              )}
                              {reply.user.username ===
                                data.currentUser.username && (
                                <div className="flex flex-row">
                                  <div className="flex flex-row mr-1">
                                    <img
                                      src="/images/icon-delete.svg"
                                      className="w-3 h-3 m-2 "
                                      alt=""
                                    />
                                    <span
                                      className="text-xs text-red-500 mt-1 font-bold "
                                      onClick={() => {
                                        handleDeleteREply(reply.id);
                                      }}
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
                                    <span 
                                    
                                    className="text-xs text-blue-500 mt-1 font-bold ">
                                      Edit
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <p className="text-xs w-[350px]">{reply.content}</p>
                          </div>
                        </div>

                      </div>

                    </div>
                    {isReplyOnclikced && reply.id === id && (
          <div>
            <div className="w-[450px] ml-2 h-[130px] p-2  rounded-xl bg-white flex items-center flex-row">
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
                  className="flex items-start resize-none rounded-xl justify-start p-3 w-[320px] h-[90px] border-[1px] outline-none"
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
              </div>
            )}
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
