import { useState } from "react";
import './App.css';
import DessertCard from './components/DessertCard';
import OrderCard from "./components/OrderCard";

function App() {
  const IMAGES=[
    {id:1,img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle" , discription:"Waffle with Berries",price:"6.50" ,count:1},
    {id:2,img:"/assets/images/image-creme-brulee-desktop.jpg" , name:"  Crème Brûlée" , discription:"Vanilla Bean Crème Brûlée",price:"7.00" ,count:1},
    {id:3,img:"/assets/images/image-macaron-desktop.jpg" , name:" macaron" , discription:"Waffle with Berries",price:"6.50" ,count:1},
    {id:4,img:"/assets/images/image-tiramisu-desktop.jpg" , name:" tiramisu" , discription:"Waffle with Berries",price:"6.50" ,count:1},
    {id:5,img:"/assets/images/image-baklava-desktop.jpg" , name:" baklava" , discription:"Waffle with Berries",price:"6.50" ,count:1},
    {id:6,img:"/assets/images/image-meringue-desktop.jpg" , name:" meringue" , discription:"Waffle with Berries",price:"6.50" ,count:1},
    {id:7,img:"/assets/images/image-cake-desktop.jpg" , name:" cake" , discription:"Waffle with Berries",price:"6.50" ,count:1},
    {id:8,img:"/assets/images/image-brownie-desktop.jpg" , name:" brownie" , discription:"Waffle with Berries",price:"6.50" ,count:1},
    {id:9,img:"/assets/images/image-panna-cotta-desktop.jpg" , name:" panna" , discription:"Waffle with Berries",price:"6.50" ,count:1},
  ]
 
  const [orderCart, setOrderCart] = useState([]);
  const[desserts,setDesserts]=useState(IMAGES)
  const [num , setNum]=useState(1)
  const [cartId , setCartId]=useState(null)
  

  
  const handleAddCart = (id, img, price, name,count) => {
    setOrderCart(prev => {
      const itemExists = prev.find(item => item.id === id);
      if (itemExists) {
        return prev; 
      } else {
        return [...prev, { id, img, price, name, count}]; 
      }
    });
  };
  

  return (
    <div className="flex flex-row bg-pink-50 w-screen h-auto justify-between">
      <section className='w-[600px] flex flex-col mt-10'>
        <h1 className='font-bold text-3xl ml-40'>Desserts</h1>
        <div className='w-[700px] grid grid-cols-3 grid-rows-3 ml-32 p-5'>
          {desserts.map(card => (
            <DessertCard
            setDesserts={setDesserts}
            setOrderCart={setOrderCart}
            cartId={cartId}
            orderCart={orderCart}
            num={num}
            setNum={setNum}
              key={card.id}
              idCart={card.id}
              price={card.price}
              discription={card.discription}
              image={card.img}
              name={card.name}
              count={card.count}
              handleAddCart={handleAddCart}
              isAdded={orderCart.some(item => item.id === card.id)} 
            />
          ))}
        </div>
      </section>
      <section className='flex flex-col justify-start items-center p-3 w-[470px] bg-pink-50 '>
        <OrderCard
        setOrderCart={setOrderCart}
        orderCart={orderCart}
        />
      </section>
    </div>
  );
}

export default App;
