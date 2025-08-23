import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NewIn = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const newIN = [
    {
      image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-damier-cropped-single-breasted-jacket--HTJ62WWSL653_PM2_Front%20view.png?wid=1090&hei=1090",
    },
    {
      image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-shawl-collar-knit-jacket--HTN18WPGX002_PM2_Front%20view.png?wid=1090&hei=1090",
    },
    {
      image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-patchwork-denim-skate-pants--HTD82WYTG650_PM2_Front%20view.png?wid=1090&hei=1090",
    },
    {
      image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-workwear-shorts---HTD84WXRZ6D4_PM2_Front%20view.png?wid=1090&hei=1090",
    },
    {
      image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-leather-baseball-shirt--HTL74WFRQ028_PM2_Front%20view.png?wid=1090&hei=1090",
    }
    
  ]
  return (
    <div className="w-[100vw] h-screen lg:snap-start flex justify-end items-center flex-col">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-[100vw] h-[10%] flex justify-center items-center gap-[20px] px-[20px]"
      >
        <p className="text-[20px] lg:text-[40px] uppercase text-[#1f1c2c] ">
          new drops
        </p>
      </motion.div>
      <div className="w-[100vw] h-[80%] p-[20px] flex justify-center items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-[100vw] h-[90%] flex gap-[40px] items-center pl-[100px] overflow-x-scroll hide-scrollbar"
        >
            {
              newIN.map((image, index)=>(
          <button className="w-[300px] h-[400px] bg-[#bcbcbc] cursor-pointer flex flex-shrink-0 justify-center items-center overflow-hidden" key={index}>
                <img
              src={image.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
              ))
            }
          
        </motion.div>
      </div>
    </div>
  );
};

export default NewIn;
