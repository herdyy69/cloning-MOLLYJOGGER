import React from "react";

function Payment() {
  return (
    <div className="w-auto h-auto">
      <div className="flex flex-row items-start justify-center">
        <div className="container mx-auto px-7 py-7">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-3xl font-bold">MOLLYJOGGER</h1>
            <p className="text-sm text-gray-500">
              information - shipping - payment
            </p>
            <fieldset className="w-full h-auto mt-5 border-2 border-gray-200 py-2 px-2 ">
              <legend className="text-xl font-bold ml-3">Payment</legend>
              <div className="flex flex-row items-center justify-center">
                <span className="text-gray-500">
                  <button className="bg-[#000] w-96 text-black text-xs font-light  px-4 py-2 border">
                    <img
                      className=" h-8 w-full"
                      src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
                      alt="Workflow"
                    />
                  </button>
                </span>
                <span className="text-gray-500">
                  <button className="bg-[#000] w-96 text-black text-xs font-light  px-4 py-2 border">
                    <img
                      className=" h-8 w-full"
                      src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
                      alt="Workflow"
                    />
                  </button>
                </span>
              </div>
            </fieldset>
          </div>
          <div className="flex flex-row items-center justify-center">
            <hr className="w-full h-1 bg-gray-200 mt-5" />
            <p className="text-sm text-gray-500 mt-5 mx-2">OR</p>
            <hr className="w-full h-1 bg-gray-200 mt-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-start justify-between">
              <h2 className="text-xl font-bold mt-5">Contact information</h2>
              <p className="text-sm text-gray-500 mt-5">
                Already have an account?{" "}
                <span className="text-[#000]">Sign in</span>
              </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col w-full">
                <input
                  className="w-full h-10 border-2 border-gray-200 mt-2 px-2"
                  type="text"
                  placeholder="Email"
                />
                <div className="flex flex-row items-center justify-start mt-2">
                  <input
                    className="w-4 h-4 border-2 border-gray-200"
                    type="checkbox"
                  />
                  <p className="text-sm text-gray-500 ml-2">
                    Email me with news and offers
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-5">Shipping Addres</h2>
            <div className="flex flex-row  flex-wrap items-center justify-between">
              <div className="flex flex-col w-full">
                <select
                  id="country"
                  className="w-full h-10 border-2 border-gray-200 mt-2 px-2"
                >
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
              <input
                className="w-96 h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-96 h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="w-full h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="Company"
              />
              <input
                className="w-full h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="Address"
              />
              <input
                className="w-full h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="Apt, Suite, Bldg (optional)"
              />
              <input
                className="w-64 h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="City"
              />
              <input
                className="w-64 h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="State"
              />
              <input
                className="w-64 h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="Zip"
              />
              <input
                className="w-full h-10 border-2 border-gray-200 mt-2 px-2"
                type="text"
                placeholder="Phone"
              />
              <div className="flex flex-row items-center justify-start mt-2">
                <input
                  className="w-4 h-4 border-2 border-gray-200"
                  type="checkbox"
                />
                <p className="text-sm text-gray-500 ml-2">
                  Save this information for next time
                </p>
              </div>
              <button className="bg-[#000] w-auto h-10 text-white text-xs font-light  px-4 py-2 border-2 mt-5">
                Continue to shipping
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full h-full bg-[#fff] shadow-lg">
          <div className="container py-72">
            <div className="flex flex-row flex-wrap items-center justify-center">
              <img
                className="h-10"
                src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081"
                alt="Workflow"
              />
              <div className="flex flex-col items-start justify-start ml-5">
                <h2 className="text-xl font-bold">Product Name</h2>
                <p className="text-sm text-gray-500">SMALL</p>
              </div>
              <div className="flex flex-col items-end justify-end ml-5">
                <h2 className="text-xl font-bold">$ 100</h2>
                <p className="text-sm text-gray-500">Quantity: 1</p>
                <p className="text-sm text-gray-500">Subtotal: $ 100</p>
              </div>
              <hr className="w-96 bg-gray-200 mt-5" />
              <div className="flex flex-row items-center justify-between w-96">
                <input
                  className="w-96 h-10 border-2 border-gray-200 mt-3 px-2"
                  type="text"
                  placeholder="Discount code"
                />
                <button className="bg-[#000] w-auto h-10 text-white text-xs font-light  px-4 py-2 border-2 mt-3">
                  Apply
                </button>
              </div>
              <hr className="w-96 bg-gray-200 mt-5 mb-5" />
              <div className="flex flex-col flex-wrap items-center justify-between w-96">
                <div className="flex flex-row items-center justify-between w-96">
                  <p className="text-sm text-gray-500">Subtotal</p>
                  <p className="text-sm text-gray-500">$ 100</p>
                </div>
                <div className="flex flex-row items-center justify-between w-96">
                  <p className="text-sm text-gray-500">Shipping</p>
                  <p className="text-sm text-gray-500">$ 0</p>
                </div>
                <hr className="w-96 bg-gray-200 mt-5" />
                <div className="flex flex-row items-center justify-between w-96">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="text-sm text-gray-500">$ 100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
