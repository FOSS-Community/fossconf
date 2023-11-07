import type { NextPage } from "next";
import React from "react";

const Success: NextPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <h1>Your payment for FOSSConf Ticket is successful!</h1>
    </div>
  );
};

export default Success;
