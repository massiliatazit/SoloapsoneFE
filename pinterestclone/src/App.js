import React, {useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Home from "./components/Home"
import unsplash from"./api/unsplash"
import PostPostModal from "./components/PostPostModal"
function App() {
  const [pins,setNewPins]= useState([])
  const getImages = (term)=>{
    return unsplash.get("https://api.unsplash.com/search/photos",{
      params:{query:term}


    })
  }
  const onSearchSubmit = (term)=>{
    getImages(term).then((res)=>{

      let results = res.data.results;

      let newPins = [

        ...results,
       // ...pins,
    ]
    newPins.sort(function(a,b){
      return 0.5-Math.random()
    })
    setNewPins(newPins)
    })
  }
  const getNewPins=()=>{
    let promises =[];
    let pinData =[];
    let pins=['nails','hair','bali','beauty','cats','heals','nature']
    pins.forEach((pinTerm)=>{
      promises.push(getImages(pinTerm).then((res)=>{
        let results= res.data.results;
       // pinData.splice(0,pinData.length,...results)
        pinData= pinData.concat(results)
        pinData.sort(function(a, b){
          return 0.5 - Math.random()
    })
      }))

      Promise.all(promises).then(()=>{
        setNewPins(pinData)
      })
    })

    
  }
 
  useEffect(()=>{
    getNewPins()
  },[])
  return (
   <div><Header onSubmit={onSearchSubmit} />
   <Home pins={pins}/>
   {/* <PostPostModal/> */}
   </div>
  );
}

export default App;
