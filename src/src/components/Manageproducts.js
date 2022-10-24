import React from 'react'

export default function Manageproducts() {
  return (
    <div className="row">
  <div className="rightcolumn">
    <div className="card">
      <div className="small-container cart-page">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="1r" />
                  <div>
                    <p>Product 1</p>
                    <p>Price: $25.00</p>
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={1}
                  style={{ textAlign: "center" }}
                />
              </td>
              <td>Category1</td>
              <td>
                <a href="updateproduct.html">Update Product</a>
              </td>
              <td>
                <a href="manageproducts.html">Remove Product</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="1r" />
                  <div>
                    <p>Product 2</p>
                    <p>Price: $50.00</p>
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={1}
                  style={{ textAlign: "center" }}
                />
              </td>
              <td>Category1</td>
              <td>
                <a href="updateproduct.html">Update Product</a>
              </td>
              <td>
                <a href="manageproducts.html">Remove Product</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="1r" />
                  <div>
                    <p>Product 3</p>
                    <p>Price: $25.00</p>
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={1}
                  style={{ textAlign: "center" }}
                />
              </td>
              <td>Category1</td>
              <td>
                <a href="updateproduct.html">Update Product</a>
              </td>
              <td>
                <a href="manageproducts.html">Remove Product</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="leftcolumn">
    <div className="card">
      <h2>Add New Product</h2>
      <form>
        <label htmlFor="pname">Enter Product Name:</label>
        <br />
        <input type="text" id="pname" name="pname" />
        <br />
        <br />
        <label htmlFor="cname">Enter Product Category:</label>
        <br />
        <input type="text" id="catname" name="catname" />
        <br />
        <br />
        <label htmlFor="prodprice">Enter Product Price:</label>
        <br />
        <input type="number" id="prodprice" name="prodprice" />
        <br />
        <br />
        <label htmlFor="prodquan">Enter Product Quantity:</label>
        <br />
        <input type="number" id="prodquan" name="prodquan" />
        <br />
        <br />
        <div>
          <span>Upload Product Image</span>
          <input type="file" placeholder="ClubImage" />
        </div>
        <br />
        <br />
        <div>
          <button>Add Product</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
