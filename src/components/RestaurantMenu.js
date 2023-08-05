// import { useParams } from "react-router-dom"; // import useParams for read `resId`
// import {
//   swiggy_menu_api_URL,
//   IMG_CDN_URL,
//   ITEM_IMG_CDN_URL,
//   MENU_ITEM_TYPE_KEY,
//   RESTAURANT_TYPE_KEY,
// } from "../utils/constants";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// // imported custom hook useResMenuData which gives restaurant Menu data from swigy api
// // imported custom hook useOnline which checks user is online or not

// const RestaurantMenu = () => {
//   const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
//   const [restaurant, menuItems] = useRestaurantMenu(
//     swiggy_menu_api_URL,
//     resId,
//     RESTAURANT_TYPE_KEY,
//     MENU_ITEM_TYPE_KEY
//   );
//   console.log(menuItems);

//   // if user is not Online then return UserOffline component

//   return (
//     <div className="text-center">
//       <h1 className="font-bold my-10 text-2xl">{restaurant?.name}</h1>
//       <p className="font-bold text-lg">
//         {restaurant?.cuisines?.join(" , ")} - {restaurant?.costForTwoMessage}
//       </p>
//     </div>
//   );
// };

// export default RestaurantMenu;
