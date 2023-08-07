import { useContext } from "react";
import userContext from "../utils/UserContext";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRating,
}) => {
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="flex flex-col overflow-hidden m-3 p-3 w-60  rounded-sm hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
      <img
        className="w-full border rounded-lg"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <span className="block font-bold text-md mt-3 ">
        {name?.length > 20 ? name.slice(0, 20) + "..." : name}
      </span>
      <span className="mt-3 text-gray-600 text-xs">{cuisines?.join(", ")}</span>
      <div className="mt-3 mb-3 flex items-center justify-between">
        <span
          className="w-12 text-center border rounded-md text-white text-xs mr-2"
          style={
            avgRating >= 4
              ? { backgroundColor: "#1db458" }
              : avgRating >= 3
              ? { backgroundColor: "#DB7C38" }
              : avgRating === "--"
              ? { backgroundColor: "#1db458" }
              : { backgroundColor: "#E31837" }
          }
        >
          {avgRating} &#9733;
        </span>
        <span className="text-xs">{costForTwo}</span>
        <span className="text-xs ">
          {" "}
          {sla?.lastMileTravelString ?? "2.0 km"}
        </span>
      </div>
    </div>
  );
};

//Higher Order Component

// export const WithPromotedLabel = (RestaurantCard) => {
//   return ({
//     cloudinaryImageId,
//     name,
//     cuisines,
//     areaName,
//     sla,
//     costForTwo,
//     avgRatingString,
//   }) => {
//     return (
//       <div className="">
//         <label> Promoted </label>
//         <RestaurantCard {...restaurant?.info} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;

{
}
