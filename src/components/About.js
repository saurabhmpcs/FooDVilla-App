import React from "react";
import UserClass from "./UserClass";
import userContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div className="w-full mb-72">
        <div className="bg-pink-100 text-center border border-black m-auto w-52">
          <h1>About page</h1>

          <UserClass name={"saurabh"} />
        </div>
      </div>
    );
  }
}

export default About;
