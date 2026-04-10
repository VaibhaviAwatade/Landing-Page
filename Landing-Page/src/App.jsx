import {useState ,useEffect} from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero";
const App = () => {

let heroData=[
  {text1:"Dive into", text2:"What you Love"},
    {text1:"Indulge", text2:"your passion"},
  {text1:"Give in to ", text2:" Your passion "},

]

const[heroCount,setHeroCount]=useState(0);
const[playStatus,setPlayStatus]=useState(false);



useEffect(()=>{
  setInterval(()=>{
setHeroCount((Count)=>{return Count===2?0:Count+1})
},3000);},[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />

      
    </div>
  )
}

export default App
