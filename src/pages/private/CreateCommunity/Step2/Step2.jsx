/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { FaCarrot } from "react-icons/fa";
import { GiCrosscutSaw } from "react-icons/gi";
import { ImBin } from "react-icons/im";
import Workshops from "./Workshops";
import Products from "./Products";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";

const Div = styled.div`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  display: flex;
  justify-content: space-between;
  font-size: 1em;

  padding: 0.25em 1em;
  margin: 10%;
  border: 2px solid palevioletred;
`;

function StyledDiv(props) {
  return <Div>{props.children}</Div>;
}

const Step2 = ({ next, communityData, updateData, forward }) => {
  const [workshops, setWorkshops] = useState(communityData.workshops || []);
  const [products, setProducts] = useState(communityData.products || []);
  const [entry, setEntry] = useState("");

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setEntry("");
  };

  const addWorkshop = (newWorkshop) => {
    setWorkshops([...workshops, newWorkshop]);
    setEntry("");
  };

  const deleteItem = (id, item) => {
    if (item === "product") {
      setProducts(products.filter((product, index) => index !== id));
    }
    if (item === "workshop") {
      setWorkshops(workshops.filter((workshop, index) => index !== id));
    }
  };

  useEffect(() => {
    updateData({
      products: products,
    });
  }, [products]);

  useEffect(() => {
    updateData({
      workshops: workshops,
    });
  }, [workshops]);

  const body = (
    <>
      <h1>Products & Workshops</h1>
      <StyledDiv>
        <div>
          Add some workshop{" "}
          <button type="button" onClick={() => setEntry("workshops")}>
            <GiCrosscutSaw />
          </button>
        </div>
        <div>
          Sell Products{" "}
          <button type="button" onClick={() => setEntry("products")}>
            <FaCarrot />
          </button>
        </div>
        {communityData.products &&
          communityData.products.length > 0 &&
          communityData.products.map((product, index) => (
            <div key={index}>
              {product.title && <p>Product : {product.title}</p>}
              {product.price && <p>Price: {product.price}</p>}
              {product.quantity && <p>Quantity: {product.quantity}</p>}
              <span onClick={() => deleteItem(index, "product")}>
                <ImBin />
              </span>
            </div>
          ))}
        {communityData.workshops &&
          communityData.workshops.length > 0 &&
          communityData.workshops.map((workshop, index) => (
            <div key={index}>
              {workshop.title && <p>workshop : {workshop.title}</p>}
              {workshop.description && (
                <p>Description: {workshop.description}</p>
              )}
              <span onClick={() => deleteItem(index, "workshop")}>
                <ImBin />
              </span>
            </div>
          ))}
      </StyledDiv>
      <button type="button" onClick={next}>
        Next
      </button>
      <div>
        {entry === "products" && (
          <Fade bottom>
            <Products products={products} addProduct={addProduct} />
          </Fade>
        )}
        {entry === "workshops" && (
          <Workshops workshops={workshops} addWorkshop={addWorkshop} />
        )}
      </div>
    </>
  );

  return forward ? <Fade right>{body}</Fade> : <Fade left>{body}</Fade>;
};

export default Step2;
