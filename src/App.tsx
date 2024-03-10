
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Rs from "./components/Pages/Rs";
import Profile from "./components/Pages/Profile";
import Header from "./components/Header";


function App() {


  return (

    <main className="m-0 flex flex-col place-content-center min-w-[320px] h-screen py-10">
      {/* ici vient les components */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Rs" element={<Rs/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      </main>
  );
}

export default App;
