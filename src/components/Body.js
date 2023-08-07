import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// function filterData(searchText, restaurants) {
//   const allRestaurants = restaurants.filter((restaurant) =>
//     restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
//   );
//   return allRestaurants;
// }

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");
  // const filterTopResHandler = () => {
  //   if (!topResFilterStatus) {
  //     setResListLocal(resList.filter((res) => res.info.avgRating >= 4));
  //     setTopResFilterStatus(true);
  //   } else {
  //     setResListLocal(resList);
  //     setTopResFilterStatus(false);
  //   }
  // };

  useEffect(() => {
    getRestaurants();
  }, []);
  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // console.log(json);

      // Initialize resData for Swiggy Restuarant data

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // updated state variable restaurants with Swiggy API data
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);
      console.log(resData);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="hero-section  relative h-[30rem] flex  items-center w-full">
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          className="h-full w-full absolute object-cover "
          alt="food background image"
        ></img>

        <div className="my-12 flex flex-grow items-center justify-center  z-[2] ">
          <div className="flex justify-between w-1/3 border border-slate-600 border-1 focus:w-2/3 rounded-lg overflow-hidden">
            <input
              type="text"
              className="p-3 grow h-12 w-[90%] focus:outline-none"
              value={searchText}
              // update the state variable searchText when we typing in input box
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button
              className="p-3 bg-green-200"
              onClick={() => {
                const filteredRestaurant = allRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurants(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
