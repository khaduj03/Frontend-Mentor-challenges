import { useState } from "react";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence
import "./App.css";
import TestimonialsSlider from "./component/TestimonialsSlider";

function App() {
  const data = [
    {
      id: 1,
      image: "/images/image-john.jpg",
      text: ` “ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
      name: "John Tarkpor",
      skill: "Junior Front-end Developer",
    },
    {
      id: 2,
      image: "/images/image-tanya.jpg",
      text: `  “ I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
      name: "Tanya Sinclair",
      skill: "UX Engineer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlider = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevSlider = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="App">
      <main className="w-screen h-screen flex justify-center lg:p-20 items-center">
        <AnimatePresence>
          <TestimonialsSlider
            key={currentIndex}
            image={data[currentIndex].image}
            text={data[currentIndex].text}
            handlePrevSlider={handlePrevSlider}
            handleSlider={handleSlider}
            name={data[currentIndex].name}
            skill={data[currentIndex].skill}
          />
        </AnimatePresence>
        <img
          className="absolute z-10 bottom-0 left-0"
          src="/images/pattern-curve.svg"
          alt="curve svg"
        />
        
      </main>

    </div>
  );
}

export default App;
