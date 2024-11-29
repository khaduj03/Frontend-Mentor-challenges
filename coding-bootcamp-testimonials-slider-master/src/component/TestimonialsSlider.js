import { motion } from "framer-motion"; 

const TestimonialsSlider = ({
  image,
  text,
  handleSlider,
  handlePrevSlider,
  name,
  skill,
}) => {
  return (
    <motion.div
      animate={{
        scale: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      layout
      className="flex lg:flex-row flex-col overflow-hidden lg:w-[90rem] w-11/12 lg:h-[35rem] h-screen justify-center relative"
    >
      <img
        className="absolute z-20 lg:w-[35rem] w-[23rem] lg:left-[34rem] lg:top-0 left-1 top-14 lg:right-10"
        src="images/pattern-bg.svg"
        alt="bg-svg"
      />
      <div className="text-3xl lg:w-[30rem] w-[40rem] h-56 lg:top-32 lg:left-0 top-52 absolute left-32">
        <img
          src="/images/pattern-quotes.svg"
          className="flex absolute lg:left-32 lg:w-[8rem] lg:top-0 left-6 top-60 w-[6rem]"
          alt="pattern quotes svg"
        />
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
          layout
          className="flex w-[23rem] flex-col text-2xl lg:w-[40rem] absolute z-40 lg:left-0 lg:top-16 top-[17rem] lg:text-start  text-center right-[25rem] text-gray-600"
        >
          {text}
          <p className="mt-5 lg:flex-row flex flex-col">
            <span className="text-gray-700 font-bold lg:text-xl  ">{name}</span>{" "}
            <span className="text-gray-400 lg:text-xl lg:ml-4 ">{skill}</span>
          </p>
        </motion.p>
      </div>

      <div className="w-[27rem] h-[350px] relative">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "linear" }}
          layout
          className="lg:w-[27rem] w-[18rem] absolute z-30 left-12 lg:bottom-0 bottom-64 lg:left-64 lg:top-14 shadow-[0rem_0.625rem_3.75rem_rgba(0,0,0,0.3)] rounded"
          src={image}
        />

        <div className="flex  absolute z-50 lg:top-[29rem] shadow-[0rem_0.625rem_3.75rem_rgba(0,0,0,0.3)] p-1 top-[4rem] lg:left-72 left-36 w-24  items-center bg-white rounded-3xl justify-between h-10">
          <button
            onClick={handlePrevSlider}
            aria-label="Previous testimonial"
            className="focus:outline-none w-8 h-8 mr-1 hover:bg-gray-400   flex rounded-full justify-center items-center"
          >
            <img src="/images/icon-prev.svg" alt="icon prev svg" />
          </button>
          <button
            onClick={handleSlider}
            aria-label="Next testimonial"
            className="focus:outline-none w-8 h-8 hover:bg-gray-400   ml-1 flex rounded-full  justify-center items-center"
          >
            <img src="/images/icon-next.svg" alt="icon next svg" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSlider;
