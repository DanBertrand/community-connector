import { useState } from "react";

const Products = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState("");

  const data = {
    title: title,
    price: price,
    quantity: quantity,
  };

  return (
    <div className="Products">
      Product
      <form>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Price
          <input
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Quantity
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </label>
        <button type="button" onClick={() => addProduct(data)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Products;
