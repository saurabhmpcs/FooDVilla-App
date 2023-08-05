import { IMG_CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>

        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>

        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
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
