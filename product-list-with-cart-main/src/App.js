import { useState } from "react";
import './App.css';
import DessertCard from './components/DessertCard';
import OrderCard from "./components/OrderCard";

function App() {
  const IMAGES=[
    {id:1,img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle" , discription:"Waffle with Berries",price:"6.50"},
    {id:2,img:"/assets/images/image-creme-brulee-desktop.jpg" , name:"  Crème Brûlée" , discription:"Vanilla Bean Crème Brûlée",price:"7.00"},
    {id:3,img:"/assets/images/image-macaron-desktop.jpg" , name:" macaron" , discription:"Waffle with Berries",price:"6.50"},
    {id:4,img:"/assets/images/image-tiramisu-desktop.jpg" , name:" tiramisu" , discription:"Waffle with Berries",price:"6.50"},
    {id:5,img:"/assets/images/image-baklava-desktop.jpg" , name:" baklava" , discription:"Waffle with Berries",price:"6.50"},
    {id:6,img:"/assets/images/image-meringue-desktop.jpg" , name:" meringue" , discription:"Waffle with Berries",price:"6.50"},
    {id:7,img:"/assets/images/image-cake-desktop.jpg" , name:" cake" , discription:"Waffle with Berries",price:"6.50"},
    {id:8,img:"/assets/images/image-brownie-desktop.jpg" , name:" brownie" , discription:"Waffle with Berries",price:"6.50"},
    {id:9,img:"/assets/images/image-panna-cotta-desktop.jpg" , name:" panna" , discription:"Waffle with Berries",price:"6.50"},
  ]
 
  const [orderCart, setOrderCart] = useState([]);

  
  const handleAddCart = (id, img, price, name) => {
    const newOrder = { id, img, price, name };
    const isAlreadyInCart = orderCart.some((item) => item.id === id);

    if (!isAlreadyInCart) {
      setOrderCart((prev) => [...prev, newOrder]);
    }
  };

  return (
    <div className="flex flex-row bg-pink-50 w-screen h-auto justify-between">
      <section className='w-[600px] flex flex-col mt-10'>
        <h1 className='font-bold text-3xl ml-40'>Desserts</h1>
        <div className='w-[700px] grid grid-cols-3 grid-rows-3 ml-32 p-5'>
          {IMAGES.map(card => (
            <DessertCard
              key={card.id}
              id={card.id}
              price={card.price}
              discription={card.discription}
              image={card.img}
              name={card.name}
              handleAddCart={handleAddCart}
              isAdded={orderCart.some(item => item.id === card.id)} // بررسی وضعیت افزودن به سبد خرید
            />
          ))}
        </div>
      </section>
      <section className='flex flex-col justify-start items-center p-3 w-[470px] bg-pink-50 '>
        <OrderCard
        orderCart={orderCart}
        />
      </section>
    </div>
  );
}

export default App;
