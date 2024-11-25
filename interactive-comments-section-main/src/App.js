import Comments from "./component/Comments";
import "./App.css";
import CommentSection from "./component/CommentSection";
import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState([]);
  const [idUser, setIdUser] = useState(null);
  const [isReplyOnclikced, setIsReplyOncliked] = useState(false);
  const [tag, setTag] = useState("");
  const [commentId, setCommentId] = useState("");
  const [editeCliked,setEditeCliked]=useState(false)
  const [replyValue, setReplyValue] = useState("");

  useEffect(() => {
    try {
      const fetchComments = async () => {
        const res = await fetch("http://localhost:5000/comments");
        const data = await res.json();
        setComments(data);
      };
      const fetchUser = async () => {
        const res = await fetch("http://localhost:5000/currentUser");
        const user = await res.json();
        setUser(user);
      };
      fetchUser();
      fetchComments();
    } catch (error) {
      console.log("error fatching", error);
    }
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    const newComment = {
      id: Math.floor(Math.random() * 10000 + 1),
      content: inputValue,
      createdAt: "just now",
      score: 0,
      user: {
        image: { png: "./images/avatars/image-juliusomo.png" },
        username: "juliusomo",
      },
      replies: [],
    };
    setComments((prevComments) => [...prevComments, newComment]);
    setInputValue("");
  };

  const handleReply = (id, username, commentId) => {
    console.log(username);
    setTag(username);
    setIdUser(id);
    comments.map((comment) => {
      if (comment.id === idUser) {
        setIsReplyOncliked(true);
      }

      comment.replies.map((reply) => {
        if (reply.id === idUser) {
          setIsReplyOncliked(true);
        }
      });
    });
  };

  const clickOnReply = (e) => {
    e.preventDefault();
    const content = (
      <span>
        {" "}
        <span className="text-blue-500 font-bold">@{tag}</span>
        <span>{inputValue}</span>{" "}
      </span>
    );
    const newReplyComment = {
      id: Math.floor(Math.random() * 10000 + 1),
      content: content,
      createdAt: "just now",
      score: 0,
      user: {
        image: { png: "./images/avatars/image-juliusomo.png" },
        username: "juliusomo",
      },
      replies: [],
    };
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === idUser
          ? { ...comment, replies: [...comment.replies, newReplyComment] }
          : comment
      )
    );
    setInputValue("");
    setIsReplyOncliked(false);
  };

  const handleToReply = (id, commentId, username) => {
    console.log(commentId);
    setTag(username);
    setCommentId(commentId);
    setIdUser(id);
    comments.map((comment) => {
      comment.replies.map((reply) => {
        if (reply.id === idUser) {
          setIsReplyOncliked(true);
        }
      });
    });
  };

  const clickToReply = (e) => {
    e.preventDefault();

    const content = (
      <span>
        {" "}
        <span className="text-blue-500 font-bold">@{tag}</span>
        <span>{inputValue}</span>{" "}
      </span>
    );
    const newReplyComment = {
      id: Math.floor(Math.random() * 10000 + 1),
      content: content,
      createdAt: "just now",
      score: 0,
      user: {
        image: { png: "./images/avatars/image-juliusomo.png" },
        username: "juliusomo",
      },
      replies: [],
    };

    // Update comments state by adding the new reply to the specific comment
    setComments((prevComments) =>
      prevComments.map((comment) => {
        console.log(comment.id === commentId);
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, newReplyComment] };
        }
        return comment;
      })
    );

    setInputValue("");
    setIsReplyOncliked(false);
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
    setIdUser(id)
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
        if (comment.id === idUser) {
          return { ...comment, content: inputValue }; // Save the edited content
        }
        return comment;
      });
    });
    setEditeCliked(false)
    
  }

  return (
    <div className="w-full flex-col h-full bg-slate-200 flex justify-center items-center">
      <div className="flex flex-col justify-center p-4">
        <Comments
        replyValue={replyValue}
        updateComment={updateComment}
        editeCliked={editeCliked}
          handleReply={handleReply}
          clickToReply={clickToReply}
          handleDeleteREply={handleDeleteREply}
          handleDelete={handleDelete}
          clickOnReply={clickOnReply}
          setInputValue={setInputValue}
          inputValue={inputValue}
          image={user?.image?.png}
          id={idUser}
          isReplyOnclikced={isReplyOnclikced}
          handleToReply={handleToReply}
          user={user.username}
          comments={comments}
          handleEdite={handleEdite}
        />
        {user && user.image ? (
          <CommentSection
            handleComment={handleComment}
            setInputValue={setInputValue}
            inputValue={inputValue}
            image={user.image.png}
          />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
