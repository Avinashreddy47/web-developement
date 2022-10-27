import React from 'react'

export default function Managecart() {
  return (
    <div className="row">
       <div className="leftcolumn">
    <div className="card">
      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$5.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$105.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: "center" }}>
        <input type="submit" defaultValue="Checkout" className="btn" />
      </div>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <div className="small-container cart-page">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="1r" />
                  <div>
                    <p>Product 1</p>
                    <p>Price: $25.00</p>
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" defaultValue={1} />
              </td>
              <td>$25.00</td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="1r" />
                  <div>
                    <p>Product 1</p>
                    <p>Price: $50.00</p>
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" defaultValue={1} />
              </td>
              <td>$25.00</td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="1r" />
                  <div>
                    <p>Product 1</p>
                    <p>Price: $25.00</p>
                    <a href="">Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" defaultValue={1} />
              </td>
              <td>$25.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
 
</div>
  )
}
