import type { NextPage } from "next";
import React from "react";

const Cancel: NextPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <h1>Purchase canceled. We hope to see you at FOSSConf soon!</h1>
    </div>
  );
};

export default Cancel;
