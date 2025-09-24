import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";

import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

import CustomerInfo from "../components/menu/CustomerInfo";
import CartItems from "../components/menu/CartItems";
import BillsInfo from "../components/menu/BillsInfo";
import { useSelector } from "react-redux";


const Menu = () => {
  const customerData = useSelector(state => state.customer)
  return (
    <section className="bg-[#1f1f1f]  h-[calc(100vh-5rem)] overflow-hidden overflow-y-scroll scrollbar-hide flex gap-3">
      {/* {LEFT DIV} */}
      <div className="flex-[3] ">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <button>
              <div className="flex items-center gap-3 cursor-pointer">
                <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
                <div className="flex flex-col items-start">
                  <h1 className="text-md text-[#f5f5f5] font-semibold">
                  {customerData. customerName || "Customer Name"}
                  </h1>
                  <p className="text-xs text-[#ababab] font-medium">
                   {customerData.tableNo || "N/A"}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <MenuContainer />
      </div>

      {/* {RIGHT DIV} */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2 overflow-y-scroll scrollbar-hide">
        {/* {COSTUMER INFO} */}
        <CustomerInfo name={customerData.customerName}/>
        <hr className="border-[#2a2a2a] border-t-2" />
        {/* {CART ITEMS} */}
        <CartItems/>
        <hr className="border-[#2a2a2a] border-t-2" />
        {/* {BILL INFO} */}
        <BillsInfo/>
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
