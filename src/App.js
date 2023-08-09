import Header from "./Components/Header"
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Software from './Components/Software'
import Training from './Components/Training'
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
    <Header/>  
      <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/software" element={<Software/>} />
          <Route path="/training" element={<Training />} />  
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
