import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const Order = () => {
  const context = useContext(myContext);
  const { name, rollno } = context;
  return (
    <Layout>
      <h1>Order</h1>
      <h1>Name: {name}</h1>
      <p>Roll No: {rollno}</p>
    </Layout>
  );
};

export default Order;
