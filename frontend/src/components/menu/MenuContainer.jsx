import React, { useEffect, useState } from "react";
import { menus } from "../../constants";
import { getRandomBG } from "../../utils/randomColor";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [menuColors, setMenuColors] = useState({});
  const [itemCount,setItemCount] = useState(0);
  const [itemId,setItemId] = useState();


  const increment = (id) =>{
    setItemId(id);
    if(itemCount >= 10) return;
    setItemCount((prev) => prev + 1);
  }
  const decrement = (id) => {
     setItemId(id);
    if(itemCount == 0) return;
    setItemCount((prev) => prev - 1);
  }

  useEffect(() => {
    const colors = {};
    menus.forEach((menu) => {
      colors[menu.id] = getRandomBG();
    });
    setMenuColors(colors);
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menuColors[menu.id] }}
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemCount(0);
              } }
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {" "}
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-[#f5f5f5] text-sm font-semibold">
                {menu.items?.length || 0} Items
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[130px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a]"
            >
            <div className="flex items-start justify-between w-full">
            <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {" "}
                {item.name}
              </h1>
                <button className="bg-[#2e2a40] text-[#02ca3a] p-2 rounded-lg"><FaShoppingCart /></button>
            </div>
              
              <div className="flex items-center justify-between w-full">
                <p className="text-[#f5f5f5] text-xl font-bold">
                  ₹{item.price}
                </p>
                <div className="flex items-center justify-between bg-[#1f1f1f] px-2 py-1 rounded-lg gap-6 ">
                  <button
                     onClick={() => decrement(item.id)}
                    className="text-yellow-500 text-2xl cursor-pointer"
                  >
                    &minus;
                  </button>
                  <span className="text-white">{item.id === itemId ? itemCount : "0"}</span>
                  <button
                     onClick={() => increment(item.id)}
                    className="text-yellow-500 text-2xl cursor-pointer"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
