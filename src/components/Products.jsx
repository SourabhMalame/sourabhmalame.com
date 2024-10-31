import React, { useEffect, useState } from "react";
import data from "../../Data.js";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    setProductData(data);
  };

  console.log(data);

  return (
    <>
      <div className="main-products">
        <div className="products-grid">
          {productData.map((item, index) => (
            <div className="card-products" key={index}>
              {/* <img src={img} alt={item.projectName} className="img" /> */}
              <h3>{item.projectName}</h3>
              <p>{item.description}</p>
              <div className="product-stack">
                {item.projectStack.map((item, index) => (
                  <>
                    <span className="pill" key={index}>
                      {item}
                    </span>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
