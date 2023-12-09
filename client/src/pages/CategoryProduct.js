import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [products, setProduct] = useState();
  const getCategoryProduct = async () => {
    const { data } = await axios.get(
      `/api/v1/product/category-product/${params.slug}`
    );
    setCategory(data?.category);
    setProduct(data?.products);
  };
  useEffect(() => {
    if (params?.slug) getCategoryProduct();
  }, [params?.slug]);
  return (
    <Layout>
      <div className="container mt-3">
        <h1 className="text-center">{category?.name}</h1>
        <h1 className="text-center">{products?.length} products found</h1>
        <div className="d-flex flex-wrap">
          {products?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text"> ₹ {p.price}</p>
                <button
                  class="btn btn-primary ms-1"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
                <button class="btn btn-secondary ms-1">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
