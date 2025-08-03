// Footer.jsx
const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-black px-6 py-10 lg:snap-start">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-black">
        
        {/* SHOP */}
        <div>
          <h3 className="font-semibold mb-2">SHOP</h3>
          <ul className="space-y-1">
            <li>New arrivals</li>
            <li>Collections</li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="font-semibold mb-2">EXPLORE</h3>
          <ul className="space-y-1">
            <li>About the brand</li>
            <li>Lookbooks</li>
          </ul>
        </div>

        {/* MORE */}
        <div>
          <h3 className="font-semibold mb-2">MORE</h3>
          <ul className="space-y-1">
            <li>Size guide</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold mb-2">NEWSLETTER</h3>
          <input
            type="email"
            placeholder="enter your email"
            className="w-full border-b border-black outline-none py-1 text-sm mb-4"
          />
          <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
            subscribe
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
