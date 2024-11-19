import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile";
import { motion } from "framer-motion";
import TimeCard from "./components/TimeCard"; 

function App() {
  const src = [
    { url: "/images/icon-work.svg", bg: "bg-[#ff8b64]" },
    { url: "/images/icon-study.svg", bg: "bg-[#ff5e7d]" },
    { url: "/images/icon-social.svg", bg: "bg-[#7235d1]" },
    { url: "/images/icon-play.svg", bg: "bg-[#56c2e5]" },
    { url: "/images/icon-self-care.svg", bg: "bg-[#f1c75b]" },
    { url: "/images/icon-exercise.svg", bg: "bg-[#4bcf83]" },
  ];

  const TIME_TRACK_DASHBOARD = [
    {
      name: "Work",
      type: "work",
      hrs: {
        daily: 32,
        weekly: 36,
        monthly: 180,
      },
    },
    {
      name: "Exercise",
      type: "exercise",
      hrs: {
        daily: 4,
        weekly: 6,
        monthly: 24,
      },
    },
    {
      name: "Play",
      type: "play",
      hrs: {
        daily: 4,
        weekly: 10,
        monthly: 40,
      },
    },
    {
      name: "Study",
      type: "study",
      hrs: {
        daily: 4,
        weekly: 16.5,
        monthly: 66,
      },
    },
    {
      name: "Social",
      type: "social",
      hrs: {
        daily: 5,
        weekly: 4.5,
        monthly: 18,
      },
    },
    {
      name: "Self care",
      type: "self-care",
      hrs: {
        daily: 2,
        weekly: 5,
        monthly: 20,
      },
    },
  ];

  return (
    <Router>
      <main className="flex  justify-center items-center w-full h-full lg:h-screen">
        <div className="flex-col lg:flex-row w-full h-full lg:h-screen bg-black flex justify-center items-center">
          <div className="flex flex-col">
            <Profile />

           

            <div className="flex lg:flex-col flex-row lg:mt-0   justify-center bg-gray-800 rounded-lg p-3 h-[60px] lg:h-[120px] w-[300px] lg:mr-0  lg:w-[200px] relative top-0 ">
              <motion.dev
                className="w-44 p-4  h-6 relative rounded-sm hover:bg-gray-600"
                whileHover={{
                  y: -1,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                }}
              >
                <Link
                  to="/daily"
                  className="text-gray-500 pl-2 inset-0 absolute hover:text-gray-300 text-lg "
                >
                  Daily
                </Link>
              </motion.dev>
              <motion.dev
                className="w-44 p-4  h-6 relative rounded-sm hover:bg-gray-600"
                whileHover={{
                  y: -1,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                }}
              >
                <Link
                  to="/weekly"
                  className="text-gray-500 pl-2 inset-0 absolute hover:text-gray-300 text-lg "
                >
                  Weekly
                </Link>
              </motion.dev>
              <motion.dev
                className="w-44 p-4  h-6 relative rounded-sm hover:bg-gray-600"
                whileHover={{
                  y: -1,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                }}
              >
                <Link
                  to="/monthly"
                  className="text-gray-500 pl-2 inset-0 absolute hover:text-gray-300 text-lg "
                >
                  Monthly
                </Link>
              </motion.dev>
            </div>
          </div>

          
          
          <div className="grid lg:grid-cols-3  grid-cols-1  lg:grid-rows-2 lg:gap-3 gap-2">
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
                      className={`flex justify-end relative pt-0 w-[300px] lg:w-[200px] h-[140px] lg:h-[200px] ${src[index].bg} p-4 rounded-lg`}
                    >
                      <img
                        src={src[index].url}
                        alt={`${activity.name} icon`}
                        className="w-[50px] h-[50px]"
                      />
                      <TimeCard
                        name={activity.name}
                        daily={activity.daily}
                        last={activity.hrs.weekly}
                        hrs={activity.hrs.daily}
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
                      className={`flex justify-end relative pt-0 w-[300px] lg:w-[200px] h-[140px] lg:h-[200px] ${src[index].bg} p-4 rounded-lg`}
                    >
                      <img
                        src={src[index].url}
                        alt={`${activity.name} icon`}
                        className="w-[50px] h-[50px]"
                      />
                      <TimeCard
                        name={activity.name}
                        weekly={activity.weekly}
                        hrs={activity.hrs.weekly}
                        last={activity.hrs.weekly}
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
                      className={`flex justify-end relative pt-0 w-[300px] lg:w-[200px] h-[140px] lg:h-[200px] ${src[index].bg} p-4 rounded-lg`}
                    >
                      <img
                        src={src[index].url}
                        alt={`${activity.name} icon`}
                        className="w-[50px] h-[50px]"
                      />
                      <TimeCard
                        name={activity.name}
                        monthly={activity.monthly}
                        hrs={activity.hrs.monthly}
                        last={activity.hrs.weekly}
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
