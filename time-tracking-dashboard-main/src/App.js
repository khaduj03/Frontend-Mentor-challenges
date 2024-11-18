// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import routing components
import Profile from "./components/Profile";
import { motion } from "framer-motion";
import TimeCard from "./components/TimeCard"; // Import TimeCard component

function App() {
  const src = [
    { url: "/images/icon-work.svg", bg: "bg-green-500" },
    { url: "/images/icon-study.svg", bg: "bg-blue-500" },
    { url: "/images/icon-social.svg", bg: "bg-red-500" },
    { url: "/images/icon-play.svg", bg: "bg-red-500" },
    { url: "/images/icon-self-care.svg", bg: "bg-red-500" },
    { url: "/images/icon-exercise.svg", bg: "bg-red-500" },
  ];

  const TIME_TRACK_DASHBOARD = [
    {
      name: "Work",
      type: "work",
      daily: 32,
      weekly: 36,
      monthly: 180,
    },
    {
      name: "Exercise",
      type: "exercise",
      daily: 4,
      weekly: 6,
      monthly: 24,
    },
    {
      name: "Play",
      type: "play",
      daily: 4,
      weekly: 10,
      monthly: 40,
    },
    {
      name: "Study",
      type: "study",
      daily: 4,
      weekly: 16.5,
      monthly: 66,
    },
    {
      name: "Social",
      type: "social",
      daily: 5,
      weekly: 4.5,
      monthly: 18,
    },
    {
      name: "Self care",
      type: "self-care",
      daily: 2,
      weekly: 5,
      monthly: 20,
    },
  ];

  return (
    <Router>
      <main className="flex justify-center items-center w-screen h-screen">
        <div className="w-screen h-screen bg-black flex justify-center items-center">
          <div className="flex flex-col">
            <Profile />
            
            {/* Navigation Links for Daily, Weekly, and Monthly */}
            <div className="flex flex-col ml-5  justify-center bg-gray-800 rounded-lg p-5 h-[120px] w-[200px] relative top-0 ">
              <Link
                to="/daily"
                className="text-gray-500 hover:text-gray-300 text-lg "
              >
                Daily
              </Link>
              <Link
                to="/weekly"
                className="text-gray-500 hover:text-gray-300 text-lg "
              >
                Weekly
              </Link>
              <Link
                to="/monthly"
               className="text-gray-500 hover:text-gray-300 text-lg "
              >
                Monthly
              </Link>
            </div>
          </div>

          {/* Display the TimeCard components based on the route */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <Routes>
              <Route
                path="/daily"
                element={TIME_TRACK_DASHBOARD.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div
                      className={`flex justify-end relative pt-0 w-[200px] h-[200px] ${src[index].bg} p-4 rounded-lg`}
                    >
                      <img
                        src={src[index].url}
                        alt={`${activity.name} icon`}
                        className="w-[50px] h-[50px]"
                      />
                      <TimeCard
                        name={activity.name}
                        daily={activity.daily}
                      />
                    </div>
                  </motion.div>
                ))}
              />
              <Route
                path="/weekly"
                element={TIME_TRACK_DASHBOARD.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div
                      className={`flex justify-end relative pt-0 w-[200px] h-[200px] ${src[index].bg} p-4 rounded-lg`}
                    >
                      <img
                        src={src[index].url}
                        alt={`${activity.name} icon`}
                        className="w-[50px] h-[50px]"
                      />
                      <TimeCard
                        name={activity.name}
                        weekly={activity.weekly}
                      />
                    </div>
                  </motion.div>
                ))}
              />
              <Route
                path="/monthly"
                element={TIME_TRACK_DASHBOARD.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div
                      className={`flex justify-end relative pt-0 w-[200px] h-[200px] ${src[index].bg} p-4 rounded-lg`}
                    >
                      <img
                        src={src[index].url}
                        alt={`${activity.name} icon`}
                        className="w-[50px] h-[50px]"
                      />
                      <TimeCard
                        name={activity.name}
                        monthly={activity.monthly}
                      />
                    </div>
                  </motion.div>
                ))}
              />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
