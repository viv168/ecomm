
import React, { useContext, useState } from 'react';
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
  const navigate = useNavigate();

  const [products, setproducts] = useContext(ProductContext);

  const [title, settitle] = useState('');
  const [image, setimage] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');

  const AddProductHandler = (e) => {
    e.preventDefault();
    if ( 
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert(
        'All fields must be filled out and each field must have at least 5 characters.'
      );
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem(
        'products', 
        JSON.stringify([...products, product])
        );
        toast.success("Product Added Successfully");
    navigate('/');
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="items-center flex flex-col p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>

      <label className="w-1/2 mb-3">
        Image Link
        <input
          type="url"
          id="image"
          name="image"
          placeholder="Image link"
          className="text-1xl bg-zinc-100 rounded p-3 w-full mb-3"
          onChange={(e) => setimage(e.target.value)}
          value={image}
        />
      </label>

      <label className="w-1/2 mb-3">
        Title
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          className="text-1xl bg-zinc-100 rounded p-3 w-full mb-3"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
      </label>

      <div className="w-1/2 flex justify-between mb-3">
        <label className="w-[48%] mb-3">
          Category
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            className="text-1xl bg-zinc-100 rounded p-3 w-full"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />
        </label>

        <label className="w-[48%] mb-3">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            className="text-1xl bg-zinc-100 rounded p-3 w-full"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
        </label>
      </div>

      <label className="w-1/2 mb-3">
        Description
        <textarea
          id="description"
          name="description"
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter product description here..."
          value={description}
          className="text-1xl bg-zinc-100 rounded p-3 w-full mb-3"
          rows="10"
        ></textarea>
      </label>

      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
