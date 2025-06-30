import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./componet/Home";
import Layout from "./componet/Layout";
import Gallery from "./componet/Gallery";
import AboutUs from "./componet/AboutUs";
import Registration from "./componet/Registration";

 function App() {
  

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/registration" element={<Registration/>}/>
        
        
        </Route>

    </Routes>
   
    </>
  )
}

export default App;
