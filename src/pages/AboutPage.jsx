import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to Sambhav Jain's E-Commerce Website, where passion meets
          innovation to bring you the finest products curated just for you. Our
          journey began with a simple idea: to create a shopping experience that
          is as enjoyable as it is convenient. We believe that every purchase
          tells a story, and we're here to make sure yours is exceptional. At
          Sambhav Jain's E-Commerce Website, we're not just about selling
          products; we're about crafting experiences. Our team meticulously
          selects each item, ensuring that it meets our high standards for
          quality, style, and sustainability. Whether you're searching for the
          latest trends or timeless classics, you'll find a carefully curated
          collection that speaks to your unique taste. But we don’t stop there.
          We’re committed to providing outstanding customer service, with a
          focus on making your shopping journey seamless and delightful. From
          the moment you browse our site to the moment your order arrives at
          your doorstep, we’re here to support you every step of the way. We are
          proud to be more than just a store. We’re a community of passionate
          individuals who believe in the power of great design, quality
          craftsmanship, and ethical practices. Our mission is to offer products
          that not only look good but also do good—by supporting artisans,
          sustainable practices, and responsible sourcing. Thank you for
          choosing Sambhav Jain's E-Commerce Website . We invite you to explore
          our collection, share your story, and become part of our growing
          family. Together, let’s make every day extraordinary.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
