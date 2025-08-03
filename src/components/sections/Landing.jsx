import coat from "../../assets/images/coat.png"
import Marquee from "react-fast-marquee";
import img from "../../assets/images/landing_img.png"

const Landing = ()=>{
  return(
     <div className="relative w-[100vw] h-[100vh] flex justify-center items-center gap-[5px] flex-col lg:snap-start bg-{white}] pt-[30px]">

  
    <Marquee direction="right" speed={200} gradient={false} className="text-[350px]  uppercase text-[#e8e8e8] overflow-y-hidden font">
     Fashionista  <span>  </span>
    </Marquee>
    <Marquee direction="left" speed={200} gradient={false} className="text-[350px] uppercase text-[#1f1c2c] overflow-y-hidden z-20 font">
     Fashionista  <span className="w-[20px]">  </span>
    </Marquee>

<div className="absolute z-10">
  <img src={img} alt="" className="w-[800px]" />
</div>
 
</div>

  

  )
}

export default Landing 