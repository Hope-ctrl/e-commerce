import { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      {/* Back link */}
      <div className="w-full max-w-5xl mb-6">
        <a href="#" className="text-purple-800 text-sm font-medium">&larr; Back to class</a>
      </div>

      {/* Main Wrapper */}
      <div className="w-full max-w-5xl bg-white grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Section */}
        <div className="p-6 shadow-lg rounded-2xl border border-gray-100">
          {/* Basic Info */}
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Informations</h2>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Full name" 
              defaultValue="Olivia Graceful"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a href="#" className="text-purple-700 font-medium">Login here</a>
            </p>
          </div>

          {/* Payment */}
          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Payment Details</h2>
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input 
                type="radio" 
                name="payment" 
                checked={paymentMethod === "card"} 
                onChange={() => setPaymentMethod("card")} 
              />
              Credit card
            </label>
            <label className="flex items-center gap-2">
              <input 
                type="radio" 
                name="payment" 
                checked={paymentMethod === "paypal"} 
                onChange={() => setPaymentMethod("paypal")} 
              />
              PayPal
            </label>
          </div>

          {paymentMethod === "card" && (
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Name on card"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input 
                type="text" 
                placeholder="Card number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="Expiry date"
                  className="w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input 
                  type="text" 
                  placeholder="CVC"
                  className="w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="bg-purple-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-6">Summary</h2>

            {/* Items */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-700 w-10 h-10 flex items-center justify-center font-bold">TP</div>
                <span>Typography Masterclass</span>
              </div>
              <span>$499</span>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-purple-700 w-10 h-10 flex items-center justify-center font-bold">UX</div>
                <span>UX Masterclass</span>
              </div>
              <span>$599</span>
            </div>

            {/* Coupon */}
            <div className="flex gap-2 mb-6">
              <input 
                type="text" 
                placeholder="Coupon code"
                className="flex-1 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition">Apply</button>
            </div>

            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$1098</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$1098</span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="mt-8 bg-purple-600 hover:bg-purple-700 transition text-lg font-semibold py-3 rounded-xl">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
