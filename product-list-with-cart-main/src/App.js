import { useState } from "react";
import "./App.css";
import DessertCard from "./components/DessertCard";
import OrderCard from "./components/OrderCard";
import ModalOrder from "./components/ModalOrder";
import { motion } from "framer-motion";

function App() {
  const IMAGES = [
    {
      id: 1,
      img: "/assets/images/image-waffle-desktop.jpg",
      name: " Waffle",
      discription: "Waffle with Berries",
      price: 6.5,
      count: 1,
    },
    {
      id: 2,
      img: "/assets/images/image-creme-brulee-desktop.jpg",
      name: "  Crème Brûlée",
      discription: "Vanilla Bean Crème Brûlée",
      price: 7.0,
      count: 1,
    },
    {
      id: 3,
      img: "/assets/images/image-macaron-desktop.jpg",
      name: " Macaron",
      discription: " Macaron Mix of Five",
      price: 8.0,
      count: 1,
    },
    {
      id: 4,
      img: "/assets/images/image-tiramisu-desktop.jpg",
      name: "  Tiramisu",
      discription: " Classic Tiramisu",
      price: 5.5,
      count: 1,
    },
    {
      id: 5,
      img: "/assets/images/image-baklava-desktop.jpg",
      name: "  Baklava",
      discription: " Pistachio Baklava",
      price: 4.0,
      count: 1,
    },
    {
      id: 6,
      img: "/assets/images/image-meringue-desktop.jpg",
      name: "Pie",
      discription: " Lemon Meringue Pie",
      price: 5.0,
      count: 1,
    },
    {
      id: 7,
      img: "/assets/images/image-cake-desktop.jpg",
      name: " Cake",
      discription: " Red Velvet Cake",
      price: 4.5,
      count: 1,
    },
    {
      id: 8,
      img: "/assets/images/image-brownie-desktop.jpg",
      name: " Brownie",
      discription: " Salted Caramel Brownie",
      price: 4.5,
      count: 1,
    },
    {
      id: 9,
      img: "/assets/images/image-panna-cotta-desktop.jpg",
      name: " Panna Cotta",
      discription: "Vanilla Panna Cotta",
      price: 6.5,
      count: 1,
    },
  ];

  const [orderCart, setOrderCart] = useState([]);
  const [isEmpty, setIsempty] = useState(false);
  const [desserts, setDesserts] = useState(IMAGES);
  const [cartId, setCartId] = useState(null);
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
              cartId={cartId}
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
