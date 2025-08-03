import clothing from '../../assets/images/lv_clothing.jpg'
import shoe from '../../assets/images/nike_shoe.jpg'
import bag from '../../assets/images/gucci_bag.jpg'

const NewDrop = ()=>{




  return (
    <section className="flex justify-center items-center lg:snap-start h-[100vh] w-[100vw]">
        <div className="w-[80%] h-[100%] flex justify-center items-center gap-[50px]">
            <div className=" h-[550px] w-[50%]">
                    <button
          className="relative group overflow-hidden w-full h-full"
        >
          <img
            src={clothing}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 z-10" />

          {/* Slide-in hover overlay */}
          <div className="absolute inset-0 bg-black/30 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20" />

          {/* Title */}
          <div className="absolute inset-0 flex justify-center items-center z-30">
            <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
              Clothing
            </h2>
          </div>
        </button>
        </div>
        <div className=" w-[30%] h-[550px] flex justify-center items-center flex-col gap-[55px]">
                    <button
          className="relative group overflow-hidden h-[45%] w-[100%] "
        >
          <img
            src={bag}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 z-10" />

          {/* Slide-in hover overlay */}
          <div className="absolute inset-0 bg-black/30 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20" />

          {/* Title */}
          <div className="absolute inset-0 flex justify-center items-center z-30">
            <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
              Bags
            </h2>
          </div>
        </button>
                      <button
          className="relative group overflow-hidden h-[45%] w-[100%] "
        >
          <img
            src={shoe}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 z-10" />

          {/* Slide-in hover overlay */}
          <div className="absolute inset-0 bg-black/30 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20" />

          {/* Title */}
          <div className="absolute inset-0 flex justify-center items-center z-30">
            <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
              Accessories
            </h2>
          </div>
        </button>
        </div>
        </div>
    </section>
  );


}

export default NewDrop;