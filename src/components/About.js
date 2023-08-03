import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About page</h1>
        <UserClass name={"saurabh"} />
      </div>
    );
  }
}

export default About;
