import React from 'react'
import '../CSS/manageproducts.css'
import Image from '../Images/prod1.jpeg'
import Image2 from '../Images/prod1.jpeg'
import Image3 from '../Images/prod1.jpeg'

export default function Buyproducts() {
  return (
    <>
  <div className="row">
    <h2>
      <center>Explore Products</center>
    </h2>
  </div>
  <table>
    <tbody>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Quantity</th>
        <th />
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img
              src={Image}
              style={{ maxWidth: "45%", height: "15%" }}
            />
            <div>
              <p>Product 1</p>
              <p>Price: $25.00</p>
            </div>
          </div>
        </td>
        <td>Category1</td>
        <td>
          <input
            type="number"
            defaultValue={1}
            style={{ textAlign: "center" }}
          />
        </td>
        <td>
          <a href="buyproduct.html">Add To Cart</a>
        </td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img
              src={Image2}
              style={{ maxWidth: "15%", height: "15%" }}
            />
            <div>
              <p>Product 2</p>
              <p>Price: $31.00</p>
            </div>
          </div>
        </td>
        <td>Category2</td>
        <td>
          <input
            type="number"
            defaultValue={1}
            style={{ textAlign: "center" }}
          />
        </td>
        <td>
          <a href="buyproduct.html">Add To Cart</a>
        </td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img
                src={Image3}
              style={{ maxWidth: "15%", height: "15%" }}
            />
            <div>
              <p>Product 3</p>
              <p>Price: $28.00</p>
            </div>
          </div>
        </td>
        <td>Category3</td>
        <td>
          <input
            type="number"
            defaultValue={1}
            style={{ textAlign: "center" }}
          />
        </td>
        <td>
          <a href="buyproduct.html">Add To Cart</a>
        </td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img
              src={Image3}
              style={{ maxWidth: "15%", height: "15%" }}
            />
            <div>
              <p>Product 4</p>
              <p>Price: $15.00</p>
            </div>
          </div>
        </td>
        <td>Category1</td>
        <td>
          <input
            type="number"
            defaultValue={1}
            style={{ textAlign: "center" }}
          />
        </td>
        <td>
          <a href="buyproduct.html">Add To Cart</a>
        </td>
      </tr>
      <tr>
        <td>
          <div className="cart-info">
            <img
              src={Image3}
              style={{ maxWidth: "15%", height: "15%" }}
            />
            <div>
              <p>Product 5</p>
              <p>Price: $55.00</p>
            </div>
          </div>
        </td>
        <td>Category3</td>
        <td>
          <input
            type="number"
            defaultValue={1}
            style={{ textAlign: "center" }}
          />
        </td>
        <td>
          <a href="buyproduct.html">Add To Cart</a>
        </td>
      </tr>
    </tbody>
  </table>
  <br />
  <br />
  <br />
</>
  )
}
