import React from "react";
import Reply from "./Reply";
import ReplySection from "./ReplySection";

const Comments = ({
  comments,
  user,
  handleReply,
  isReplyOnclikced,
  id,
  image,
  inputValue,
  setInputValue,
  clickOnReply,
  handleToReply,
  handleDelete,
  handleDeleteREply,
  clickToReply,
  handleEdite,
  editeCliked,
  updateComment,
  replyValue
}) => {
  return (
    <div>
      <div>
        {comments?.map((comment, index) => (
          <div>
            {/* {section comments}    */}
            <section key={index}>
              <div className="bg-white rounded-xl flex flex-row  w-[570px] h-[130px] m-3 p-3  ">
                <div className="p-1">
                  <span className="cursor-pointer flex justify-center items-center w-7 h-7 rounded-tl-md rounded-tr-md  bg-slate-100">
                    +
                  </span>
                  <span className="cursor-pointer flex justify-center items-center w-7 h-7  bg-slate-100">
                    {comment.score}
                  </span>
                  <span className="cursor-pointer flex justify-center items-center w-7 h-7 rounded-bl-md rounded-br-md  bg-slate-100">
                    -
                  </span>
                </div>
                <div className="ml-3">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row space-x-3">
                      <img
                        className="w-7 h-7 "
                        src={comment.user.image.png}
                        alt={comment.user.image.png}
                      />
                      <p className="font-bold">{comment.user.username}</p>
                      {user === comment.user.username && (
                        <span className="text-xs text-white font-bol w-9 h-6 bg-blue-800 flex justify-center items-center">
                          you
                        </span>
                      )}
                      <p className="text-xs text-gray-400 mt-1">
                        {comment.createdAt}
                      </p>
                    </div>
                    {user !== comment.user.username ? (
                      <div className="flex flex-row">
                        <img
                          className="w-4 h-4 mt-1 mr-2"
                          src="/images/icon-reply.svg"
                          alt="reply-icon"
                        />
                        <span
                          onClick={() => {
                            handleReply(comment.id, comment.user.username);
                          }}
                          className="text-blue-800 font-bold text-sm cursor-pointer "
                        >
                          reply
                        </span>
                      </div>
                    ) : (
                      <div className="flex w-[250px] justify-end space-x-4">
                        <div className="flex flex-row">
                          <img
                            src="/images/icon-delete.svg"
                            className="w-3 h-3"
                          />
                          <span
                            className="text-red-500 font-bold text-xs cursor-pointer"
                            onClick={() => {
                              handleDelete(comment.id);
                            }}
                          >
                            Delete
                          </span>
                        </div>
                        <div className="flex flex-row">
                          <img
                            src="/images/icon-edit.svg"
                            className="w-3  h-3"
                          />
                          <span
                            onClick={() => handleEdite(comment.id)}
                            className="text-blue-800 font-bold text-xs cursor-pointer"
                          >
                            Edit
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-xs"> {comment.content}</p>
                  </div>
                </div>
              </div>
              {editeCliked && id === comment.id && (
                <div>
                  <div className="bg-white rounded-xl  w-[570px] h-[130px] flex flex-row  justify-center items-center">
                    <form
                      action=""
                      onSubmit={(e) => updateComment(e)}
                      className="flex flex-row justify-center items-start"
                    >
                      {/* <img src={data.currentUser.user.image.png} className="w-7 h-7 mr-2" alt="" /> */}
                      <textarea
                        key={id}
                        defaultValue={` ${replyValue?replyValue:""}`}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                        }}
                        type="text"
                        className="flex resize-none default:text-blue-600 rounded-xl items-start p-3 w-[400px] h-[90px] border-[1px] outline-none"
                      />
                      <input
                        type="submit"
                        value={"Update"}
                        className="w-20 h-10 ml-2 rounded-lg bg-blue-800 text-white"
                      />
                    </form>
                  </div>
                </div>
              )}
              {isReplyOnclikced && id === comment.id && (
                <div>
                  <ReplySection
                    username={comment.user.username}
                    image={image}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    clickOnReply={clickOnReply}
                  />
                </div>
              )}
            </section>
            <section className="flex items-end flex-col">
              {comment.replies &&
                comment.replies.map((reply) => (
                  <>
                    <Reply
                      handleToReply={handleToReply}
                      handleDeleteREply={handleDeleteREply}
                      commentId={comment.id}
                      id={reply.id}
                      clickToReply={clickToReply}
                      handleReply={handleReply}
                      user={user}
                      img={reply.user.image.png}
                      username={reply.user.username}
                      score={reply.score}
                      content={reply.content}
                      createdAt={reply.createdAt}
                    />
                    {isReplyOnclikced && reply.id === id && (
                      <div>
                        <div className="bg-white rounded-xl  w-[570px] h-[130px] flex flex-row  justify-center items-center">
                          <form
                            action=""
                            onSubmit={(e) => clickToReply(e)}
                            className="flex flex-row justify-center items-start"
                          >
                            {/* <img src={data.currentUser.user.image.png} className="w-7 h-7 mr-2" alt="" /> */}
                            <textarea
                              value={inputValue}
                              onChange={(e) => {
                                setInputValue(e.target.value);
                              }}
                              type="text"
                              placeholder={`@${reply.user.username} Reply ...`}
                              className="flex resize-none default:text-blue-600 rounded-xl items-start p-3 w-[400px] h-[90px] border-[1px] outline-none"
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
                  </>
                ))}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
