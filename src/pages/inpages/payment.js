import React from "react";

function Payment() {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-row items-center justify-center">
        <div className="container mx-auto px-4 py-7">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-3xl font-bold">MOLLYJOGGER</h1>
            <p className="text-sm text-gray-500">information > shipping > payment</p>
            <fieldset className="w-full h-auto mt-5 border-2 border-gray-200 ">
              <legend className="text-xl font-bold ml-3">Payment</legend>
              <div className="flex flex-row items-center justify-center">
                <span className="text-gray-500">
                  <button className="bg-[#fff] text-black text-xs font-light  px-4 py-2">
                    <img className=" h-8 w-full" src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" alt="Workflow" />
                  </button>
                </span>
                <span className="text-gray-500">
                  <button className="bg-[#fff] text-black text-xs font-light  px-4 py-2">
                    <img className=" h-8 w-full" src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg" alt="Workflow" />
                  </button>
                </span>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="container mx-auto px-4 py-7">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-3xl font-bold">MOLLYJOGGER</h1>
            <p className="text-sm text-gray-500">information > shipping > payment</p>
            <fieldset className="w-full h-auto mt-5 border-2 border-gray-200 rounded-lg">
              <legend className="text-xl font-bold">Payment</legend>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
