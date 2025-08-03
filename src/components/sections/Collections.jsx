import { useState } from "react";
import Footer from "../Footer";

const Collections = () => {
  
  const [selectedCollection, setSelectedCollection] = useState("hoodie");

    const collections = [
        {
            name: 'Zaine Pant in Precision Ponte',
            image: 'https://ak-media.theory.com/i/theory/TH_L0197236_XHX_L0?$TH-product-tile3x$',
            price: "500",
            category: "office_wear"
            
        },
        {
            name: 'Sylvain Shirt in Structure Knit',
            image: 'https://ak-media.theory.com/i/theory/TH_J0794505_D84_L0?$TH-pdp-large-desktop$',
            price: "215",
            category: "office_wear"
            
        },
        {
            name: 'Sylvain Shirt in Structure Knit',
            image: 'https://ak-media.theory.com/i/theory/TH_I0171104_VWU_L0?$TH-pdp-large-desktop$',
            price: "650",
            category: "office_wear"
            
        },
        {
            name: "Bespoke Tailored Native Wear For Men",
            image: "https://static.wixstatic.com/media/fe4552_ab61aadef8d347a4bfa91d134bee8dd4~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fe4552_ab61aadef8d347a4bfa91d134bee8dd4~mv2.jpg",
            price: "70",
            category: "native"
        },
        {
          name: "senator native wear",
          image: "https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2024/05/dejiandkola_africa_1716815780_3377217999758019612_30014923707.jpg",
          price: "50",
          category: "native"
        },
        {
          name: "stylish senator wear",
          image: "https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2025/02/dejiandkola_africa_1739808375_3570093869019430744_30014923707.jpg",
          price: "250",
          category: "native"
        },
        {
          name: "silk blend signature hoodie",
          image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-silk-blend-signature-hoodie--HTY49WUQQ62N_PM2_Front%20view.png?wid=1090&hei=1090",
          price: "200",
          category: "hoodie"
        },
        {
          name: "Graphic Jacquard Hoodie",
          image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-graphic-jacquard-hoodie--HSN83WSDL900_PM2_Front%20view.png?wid=1090&hei=1090",
          price: "250",
          category: "hoodie"
        },
        {
          name: "Monogram Scarf Zip-Up Hoodie",
          image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-scarf-zip-up-hoodie--FTST90ZHP900_PM2_Front%20view.png?wid=4096&hei=4096",
          price: "300",
          category: "hoodie",
        },
        {
          name: "Double Face Workwear Blouson",
          image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-double-face-workwear-blouson--HTB74WXGQ653_PM2_Front%20view.png?wid=1090&hei=1090",
          price: "500",
          category: "out_wear"
        },
        {
          name: "Sleeveless Quilted Vest",
          image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sleeveless-quilted-vest--HSG31WQZXMU1_PM2_Front%20view.png?wid=1090&hei=1090",
          price: "330",
          category: "out_wear"
        },
        {
          name: "Preppy Knitted Wool Trousers",
          image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-preppy-knitted-wool-trousers--HTN05WZLL900_PM2_Front%20view.png?wid=1090&hei=1090",
          price: "340",
          category: "out_wear"
        }
    ]
    
    const handleCollections = (e)=>{
      setSelectedCollection(e.target.value);
    }

    const selected = collections.filter(collection => collection.category == selectedCollection)

  return (
    <div className="snap-start w-[100vw] pt-[80px] relative">

      <div className="w-[100vw] h-[15%] flex flex-col items-center px-[40px] justify-center">
        <p className="text-[30px] mb-[10px] text-[#1e1b2e]">COLLECTIONS</p>
        <div className="flex justify-center items-center gap-[10px] relative group">
           <select

      className="w-full px-4 py-2 border border-gray-300 rounded lg:hidden mb-[20px]" onChange={handleCollections}
    >
      <option value="native">Native</option>
      <option value="office_wear">office wear</option>
      <option value="out_wear">outwear</option>
      <option value="hoodie">hoddies</option>
    </select>
    <div className="lg:flex hidden gap-[20px] mb-[20px]">
      <button className="px-[20px] py-[10px] border-2 border-[#1e1b2e] capitalize hover:bg-[#1e1b2e] hover:text-white cursor-pointer text-[#1e1b2e] transition-colors duration-400 ease-in-out" value="native" onClick={handleCollections}>
        native 
      </button>
      <button className="px-[20px] py-[10px] border-2 border-[#1e1b2e] capitalize hover:bg-[#1e1b2e] hover:text-white cursor-pointer text-[#1e1b2e] transition-colors duration-400 ease-in-out" value="office_wear" onClick={handleCollections}>
        office wear
      </button>
      <button className="px-[20px] py-[10px] border-2 border-[#1e1b2e] capitalize hover:bg-[#1e1b2e] hover:text-white cursor-pointer text-[#1e1b2e] transition-colors duration-400 ease-in-out" value="out_wear" onClick={handleCollections}>
        outwear 
      </button>
      <button className="px-[20px] py-[10px] border-2 border-[#1e1b2e] capitalize hover:bg-[#1e1b2e] hover:text-white cursor-pointer text-[#1e1b2e] transition-colors duration-400 ease-in-out"value="hoodie" onClick={handleCollections}>
        hoddies
      </button>
    </div>
        </div>
      </div>
      <div className=" lg:px-[70px] flex justify-center items-center flex-wrap gap-[50px]">
        {
          selected.map((item, index) =>(
            <button className="w-[300px] h-[450px]  flex-shrink-0 overflow-hidden" key={index} >
          <div className=" w-[100%] h-[85%] overflow-hidden flex  items-center mb-[10px]">
            <img src={item.image} alt="" className="w-[100%] h-[100%] object-cover" />
          </div>
          <div className="w-[100%] h-[15%]">
            <p className="text-left">{item.name}</p>
            <p className="text-left">${item.price}</p>
          </div>
        </button>
          ))
        }
        
      </div>
        <div className="w-[100%] h-[70px] flex justify-center items-center">
          <button className="px-[30px] py-[10px] border-2 cursor-pointer transition-all duration-150 ease-in-out hover:bg-[#1e1b2e] hover:text-white">
            see all...
          </button>
        </div>
    </div>
  );
};

export default Collections;
