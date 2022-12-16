import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'
import '../DATA/data.json'
import marketdata from "../DATA/aboutData";
import products from "../DATA/data.json";
import Herobanner from "../components/Herobanner";
import Thumbnails from "../components/Thumbnails";
import image from "../assets/banner.png";


const slogan = marketdata.slogan;

const Products = () => {
  return (
    <div className="home">
      <div className=" home__banner">
        <Herobanner image={image} title={slogan} />
      </div>{" "}
      <section className="home__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Products;