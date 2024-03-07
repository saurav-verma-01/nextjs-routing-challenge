import React from "react";

const page = ({ params }) => {
  return (
    <main className="checkout">
      <div className="container">
        <h1>Search Term - {params.slug}</h1>
      </div>
    </main>
  );
};

export default page;
