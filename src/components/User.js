import React, { useState } from "react";

const User = () => {
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: Saurabh</h2>
      <h3>Location: Greater Noida</h3>
      <h4>Contact: @saurabh.rgt</h4>
    </div>
  );
};

export default User;
