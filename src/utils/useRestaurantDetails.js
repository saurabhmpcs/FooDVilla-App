import { useState, useEffect } from "react";
// import { FETCH_MENU_URL } from "../constants";

const useRestaurantDetails = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get data from API
  async function getRestaurantInfo(resId) {
    try {
      const data = await fetch(
        "/api/dapi/restaurants/list/v5?lat=20.351841&lng=85.805154&page_type=DESKTOP_WEB_LISTING" +
          resId
      );
      const json = await data.json();
      setRestaurant(json.data.cards);
      // console.log(json.data.cards);
    } catch (err) {
      console.log("There was an error", err);
    }
  }
  useEffect(() => {
    // console.log(resId)
    getRestaurantInfo(resId);
  }, [resId]);

  return restaurant;
};

export default useRestaurantDetails;
