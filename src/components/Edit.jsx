
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  useEffect(() => {
   setProduct(products.filter((p) => p.id == id)[0]);
  }, [id, products]);

  const changeHandler = (e) => {
    setProduct({...product,[e.target.name]: e.target.value})
  };

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert(
        'All fields must be filled out and each field must have at least 5 characters.'
      );
      return;
    }

   const pi = products.findIndex((p)=>p.id == id);
   const copyData = [...products];
   copyData[pi] = {...products[pi],...product};

   setProducts(copyData);
   localStorage.setItem("products",JSON.stringify(copyData))
   navigate(-1);

   
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="items-center flex flex-col p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>

      <label className="w-1/2 mb-3">
        Image Link
        <input
          type="url"
          name="image"
          placeholder="Image link"
          className="text-1xl bg-zinc-100 rounded p-3 w-full mb-3"
          onChange={changeHandler}
          value={product.image}
        />
      </label>

      <label className="w-1/2 mb-3">
        Title
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="text-1xl bg-zinc-100 rounded p-3 w-full mb-3"
          onChange={changeHandler}
          value={product.title}
        />
      </label>

      <div className="w-1/2 flex justify-between mb-3">
        <label className="w-[48%] mb-3">
          Category
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="text-1xl bg-zinc-100 rounded p-3 w-full"
            onChange={changeHandler}
            value={product.category}
          />
        </label>

        <label className="w-[48%] mb-3">
          Price
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="text-1xl bg-zinc-100 rounded p-3 w-full"
            onChange={changeHandler}
            value={product.price}
          />
        </label>
      </div>

      <label className="w-1/2 mb-3">
        Description
        <textarea
          name="description"
          onChange={changeHandler}
          placeholder="Enter product description here..."
          value={product.description}
          className="text-1xl bg-zinc-100 rounded p-3 w-full mb-3"
          rows="10"
        ></textarea>
      </label>

      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Update Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
