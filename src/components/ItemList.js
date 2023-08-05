import React from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item?.card?.info?.name}</span>
              <span className="ml-2">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs font-thin ">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            {" "}
            <div className="absolute">
              <button className="p-2 font-thin  mx-24 my-16 text-xs bg-black text-white shadow-xl rounded-md ">
                Add+
              </button>{" "}
            </div>
            <img
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                item.card.info.imageId
              }
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
