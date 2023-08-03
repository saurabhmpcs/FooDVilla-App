// import React, { useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useResData from "../utils/useResdata";
// import { filterData } from "../utils/helper";

// const Newbodies = () => {
//   // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
//   const [searchText, setSearchText] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [allRestaurants, FilterRes] = useResData(
//     "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
//   );
//   const [filteredRestaurants, setFilteredRestaurants] = useState(null);

//   // if user is not Online then return UserOffline component

//   // use searchData function and set condition if data is empty show error message
//   const searchData = (searchText, restaurants) => {
//     if (searchText !== "") {
//       const filteredData = filterData(searchText, restaurants);
//       setFilteredRestaurants(filteredData);
//       setErrorMessage("");
//       if (filteredData?.length === 0) {
//         setErrorMessage(
//           `Sorry, we couldn't find any results for "${searchText}"`
//         );
//       }
//     } else {
//       setErrorMessage("");
//       setFilteredRestaurants(restaurants);
//     }
//   };

//   // if allRestaurants are empty don't render restaurants cards
//   if (!allRestaurants) return null;

//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search a restaurant you want..."
//           value={searchText}
//           // update the state variable searchText when we typing in input box
//           onChange={(e) => {
//             setSearchText(e.target.value);
//             // when user will enter the data, it automatically called searchData function so it work same as when you click on Search button
//             searchData(e.target.value, allRestaurants);
//           }}
//         ></input>
//         <button
//           className="search-btn"
//           onClick={() => {
//             // user click on button searchData function is called
//             searchData(searchText, allRestaurants);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       {errorMessage && <div className="error-container">{errorMessage}</div>}

//       {/* if restaurants data are fetched then display restaurants cards otherwise display Shimmer UI */}
//       {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
//         <Shimmer />
//       ) : (
//         <div className="restaurant-list">
//           {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
//           {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
//             (restaurant) => {
//               return (
//                 <Link
//                   to={"/restaurant/" + restaurant?.info?.id}
//                   key={restaurant?.info?.id}
//                 >
//                   {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
//                   <RestaurantCard {...restaurant?.info} />
//                 </Link>
//               );
//             }
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Newbodies;
