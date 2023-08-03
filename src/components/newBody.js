// import { useEffect, useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const newBody = () => {
//   const [listOfRestaurant, setListOfRestaurant] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const [searchText, setSearchText] = useState("");
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22"
//     );
//     const json = await data.json();
//     console.log(json);
//     //Optional Chaining
//     setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
//     setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
//     setListOfRestaurant(
//       json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurant(
//       json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false)
//     return (
//       <h1>
//         Looks like you're offline!! Please check your internet connection;
//       </h1>
//     );

//   //conditional rendering

//   return listOfRestaurant?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="flex">
//         <div className="m-3 p-3 ">
//           <input
//             type="text "
//             className=" border border-solid
//             border-black  "
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="px-4 py-2 bg-green-100 m-4 rounded-lg"
//             onClick={() => {
//               const filteredRestaurant = listOfRestaurant.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>

//         <div className=" m-4 p-4 flex items-center ">
//           <button
//             className="px-4 py-2 bg-gray-100 rounded-lg"
//             onClick={() => {
//               const filteredList = listOfRestaurant.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setListOfRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurant
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-wrap">
//         {filteredRestaurant?.map((restaurant) => (
//           <Link
//             key={restaurant.info.id}
//             to={"restaurants/" + restaurant.info.id}
//           >
//             <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default newBody;
