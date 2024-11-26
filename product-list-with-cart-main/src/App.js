import logo from './logo.svg';
import './App.css';
import DessertCard from './components/DessertCard';





function App() {
  const IMAGES=[
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle" , discription:"Waffle with Berries",price:"6.50"},
    {img:"/assets/images/image-creme-brulee-desktop.jpg" , name:"  Crème Brûlée" , discription:"Vanilla Bean Crème Brûlée",price:"7.00"},
    {img:"/assets/images/image-macaron-desktop.jpg" , name:" macaron" , discription:"Waffle with Berries",price:"6.50"},
    {img:"/assets/images/image-tiramisu-desktop.jpg" , name:" tiramisu" , discription:"Waffle with Berries",price:"6.50"},
    {img:"/assets/images/image-baklava-desktop.jpg" , name:" baklava" , discription:"Waffle with Berries",price:"6.50"},
    {img:"/assets/images/image-meringue-desktop.jpg" , name:" meringue" , discription:"Waffle with Berries",price:"6.50"},
    {img:"/assets/images/image-cake-desktop.jpg" , name:" cake" , discription:"Waffle with Berries",price:"6.50"},
    {img:"/assets/images/image-brownie-desktop.jpg" , name:" brownie" , discription:"Waffle with Berries",price:"6.50"},
    {img:"/assets/images/image-panna-cotta-desktop.jpg" , name:" panna" , discription:"Waffle with Berries",price:"6.50"},
  ]

  
  return (
    <div className="flex flex-row w-screen h-auto  justify-between">
      
      <section className='w-[600px] flex flex-col mt-10'>
      <h1 className='font-bold text-3xl ml-40'>Desserts</h1>
      <div className='w-[700px]  grid  grid-cols-3 grid-rows-3 ml-32 p-5'>
      {IMAGES.map(card=>(
        <DessertCard
        price={card.price}
        discription={card.discription}
        image={card.img}
        name={card.name}
        />

      ))}
      </div>
      </section>
      <section className='w-[400px]  bg-slate-600'>

      </section>
    </div>
  );
}

export default App;
