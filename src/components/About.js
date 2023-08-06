import React from "react";
import UserClass from "./UserClass";
import userContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About page</h1>
        <div className="flex p-2 ml-2">
          LoggedIn user:
          <userContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </userContext.Consumer>
        </div>
        <UserClass name={"saurabh"} />
      </div>
    );
  }
}

export default About;
