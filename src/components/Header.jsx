import { HiOutlineShoppingCart } from "react-icons/hi";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = ()=> setIsOpen(!isOpen);
    return(
        <div >
            <div className="w-[100%] h-[50px] border-b-1 lg:flex justify-between items-center px-[30px] hidden text-[#1f1c2c] bg-[white] border-[#ededed] fixed z-50">
            <ul className="w-[300px] h-[100%] flex justify-center items-center gap-[40px]">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
                <div className="w-[200px]">
                <p>
                    FASHIONISTA
                </p>
            </div>
            <div className="w-[150px] h-[100%] flex justify-center items-center gap-[20px]">
                <button className="w-[40px] h-[30px] flex justify-center items-center border-1" ><HiOutlineShoppingCart/></button>
                <button className="w-[100px] h-[30px] border-1 cursor-pointer hover:opacity-[0.5]">Login</button>
            </div>
            </div>
            <div className="lg:hidden w-[100%] h-[70px] flex justify-between items-center fixed z-50 bg-white">
              <div className="w-[200px] h-[100%] flex justify-center items-center">
                <p className="text-[30px]">
                   FASHIONISTA

                </p>
            </div>
                <button className="w-[50px] h-[100%] cursor-pointer hover:opacity-[0.5]" onClick={handleMenu}><Menu/></button>
                <div className={`fixed w-64 overflow-hidden h-full border-1 top-0 left-0 z-20 bg-white tranform transition-transform duration-300 ease-in-out ${isOpen? 'translate-x-0' : '-translate-x-full'}`}>
                    
                        {isOpen &&
                        <div className="w-[100%] h-[50px] cursor-pointer flex justify-end items-center px-[20px] hover:opacity-300" onClick={handleMenu}>
                            <X size={24} />

                        </div>
}
                    <nav className="flex flex-col p-6 space-y-4">
          <a href="/" className="text-lg font-medium">Home</a>
          <a href="/about" className="text-lg font-medium">About</a>
          <a href="/services" className="text-lg font-medium">Services</a>
          <a href="/contact" className="text-lg font-medium">Contact</a>
        </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;