import logo from './logo.svg';
import './App.css';
import DessertCard from './components/DessertCard';

function App() {
  const IMAGES=[
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
    {img:"/assets/images/image-waffle-desktop.jpg" , name:" Waffle"},
  ]
  return (
    <div className="flex flex-row w-screen h-screen justify-between">
      <section className='w-[600px] h-screen grid  grid-cols-3 grid-rows-3 gap-1 ml-32 p-5'>
      {IMAGES.map(card=>(
        <DessertCard
        image={card.img}
        name={card.name}
        />

      ))}
      </section>
      <section className='w-[400px] h-screen bg-slate-600'>

      </section>
    </div>
  );
}

export default App;
