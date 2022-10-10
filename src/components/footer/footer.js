import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap items-start justify-between drop-shadow-lg bg-[#000]">
      <div className="container mx-auto px-7 py-10 ">
        <div className="flex flex-row flex-wrap items-start justify-between">
          <img
            src="https://cdn.shopify.com/s/files/1/0283/5820/t/9/assets/Mollyjogger-footer-logo.png?145594270456687406"
            alt="Workflow"
            className="h-full w-auto mx-6"
          />
          <div className="flex flex-col flex-wrap items-center justify-center">
            <h3 className="text-white text-sm font-medium">Newsletter</h3>
            <p className="text-white text-xs font-light w-56 mb-2">
              Subscribe for exclusive offers, special events and a good tall
              fish tale or two.
            </p>
            <div className="flex flex-row flex-nowrap items-center justify-center">
              <input
                type="text"
                className="bg-[#fff] text-black text-xs font-light  px-4 py-2"
                placeholder="Enter your email address"
              />
              <span className="px-1"></span>
              <button className="bg-[#fff] text-black text-xs font-light  px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap items-center justify-center">
            <h3 className="text-white text-sm text-center font-medium">
              LINKS
            </h3>
            <a href="#blank" className="text-white text-xs font-light">
              Shop
            </a>
            <a href="#blank" className="text-white text-xs font-light">
              About Us
            </a>
            <a href="#blank" className="text-white text-xs font-light">
              Shipping
            </a>
            <a href="#blank" className="text-white text-xs font-light">
              Terms
            </a>
            <a href="#blank" className="text-white text-xs font-light">
              Privacy
            </a>
            <a href="#blank" className="text-white text-xs font-light">
              Returns
            </a>
          </div>
          <div className="flex flex-col flex-nowrap items-center justify-center">
            <h3 className="text-white text-sm font-medium">GET IN TOUCH</h3>
            <div className="flex flex-col flex-nowrap items-center justify-center">
              <p className="text-white text-xs font-light">
                Contact us @wkwkwk{" "}
              </p>
              <div className="flex flex-row flex-nowrap items-center justify-center">
                <ul className="flex flex-row flex-nowrap items-center justify-center">
                  <li className="px-1">
                    <FontAwesomeIcon icon={faCoffee} />
                  </li>
                  <li className="px-1">
                    <FontAwesomeIcon icon={faCoffee} />
                  </li>
                  <li className="px-1">
                    <FontAwesomeIcon icon={faCoffee} />
                  </li>
                </ul>
              </div>
              <img
                src="https://cdn.shopify.com/s/files/1/0156/0327/files/footer-address_12.png?14916511825812901796"
                alt="Workflow"
                className="h-auto w-auto mt-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-7 py-5">
        <div className="flex flex-col flex-nowrap items-center justify-center">
          Accepted Payments
          <div className="flex flex-row flex-nowrap items-center justify-center">
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
                alt="Workflow"
              />
            </span>
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/diners_club-16436b9fb6dd9060edb51f1c7c44e23941e544ad798282d6aef1604319562fba.svg"
                alt="Workflow"
              />
            </span>
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg"
                alt="Workflow"
              />
            </span>
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/metapay-68da02f01a5d726d4b20e8248946d820b4573bf2f8bb06e6afc6d3eb04fac04d.svg"
                alt="Workflow"
              />
            </span>
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
                alt="Workflow"
              />
            </span>
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg"
                alt="Workflow"
              />
            </span>
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/shopify_pay-100fde795157a3d1c18042346cf8dbd1fcf4c4f53c20064e13ea2799eb726655.svg"
                alt="Workflow"
              />
            </span>
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/venmo-e46496b4036966108664ea6a65bfeddd373275087df5f94cc3e5564fdb493eb0.svg"
                alt="Workflow"
              />
            </span>
            <span className="text-2xl text-gray-500">
              <img
                className=" h-8 w-auto"
                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                alt="Workflow"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-7 py-5">
        <div className="flex flex-row flex-nowrap items-center justify-center">
          <p className="text-gray-500">© 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
