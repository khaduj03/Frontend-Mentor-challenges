import { useState } from "react";
import "./App.css";
import DessertCard from "./components/DessertCard";
import OrderCard from "./components/OrderCard";
import ModalOrder from "./components/ModalOrder";
import { motion } from "framer-motion";
import { IMAGES } from "./detailsCart/details";

function App() {
  const [orderCart, setOrderCart] = useState([]);
  const [isEmpty, setIsempty] = useState(false);
  const [desserts, setDesserts] = useState(IMAGES);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleAddCart = (id, img, price, name, count) => {
    setIsempty(true);
    setOrderCart((prev) => {
      const itemExists = prev.find((item) => item.id === id);
      if (itemExists) {
        return prev;
      } else {
        return [...prev, { id, img, price, name, count }];
      }
    });
  };

  return (
    <div className="flex flex-col lg:w-screen w-screen lg:flex-row bg-pink-50   h-auto justify-between">
      <section className="lg:w-[600px] flex flex-col mt-10">
        <h1 className="font-bold text-3xl ml-8 mb-10 lg:mb-0  lg:ml-40">
          Desserts
        </h1>
        <div className="lg:w-[700px] lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:ml-32 lg:p-5">
          {desserts.map((card) => (
            <DessertCard
              setCount={setCount}
              setDesserts={setDesserts}
              setOrderCart={setOrderCart}
              orderCart={orderCart}
              key={card.id}
              idCart={card.id}
              price={card.price}
              discription={card.discription}
              image={card.img}
              name={card.name}
              count={card.count}
              handleAddCart={handleAddCart}
              isAdded={orderCart.some((item) => item.id === card.id)}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-start items-center mt-5  bg-pink-50 ">
        <OrderCard
          isEmpty={isEmpty}
          setShowModal={setShowModal}
          setCount={setCount}
          count={count}
          setOrderCart={setOrderCart}
          orderCart={orderCart}
        />
      </section>
      {showModal && (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen bg-opacity-60 bg-black">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ModalOrder
              count={count}
              setCount={setCount}
              isEmpty={isEmpty}
              setOrderCart={setOrderCart}
              setShowModal={setShowModal}
              orderCart={orderCart}
              setIsempty={setIsempty}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;
