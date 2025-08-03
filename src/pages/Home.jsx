import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/sections/Landing";
import NewDrop from "../components/sections/NewDrop";
import NewIn from "../components/sections/NewIn";
import Products from "../components/sections/Collections";
import { useEffect, useState } from "react";

const Home = ()=>{

    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        
        setTimeout(() => {
            setLoading(false);
        }, 3000);

        
    }, [])
    return(
        <div className="h-screen w-[100vw]  overflow-y-scroll snap-y lg:snap-mandatory relative">
           {
            loading &&        <div className="w-[100vw] h-[100vh] bg-white fixed z-50 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
           }
            <Landing/>
            <NewIn/>
            <NewDrop/>
            <Products/>
             <Footer/>
        </div>
    )
}

export default Home;