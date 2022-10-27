import React from 'react'
import "../CSS/manageclubs.css"

export default function Manageclubs() {
  return (
    <div className="row">
       <div className="leftcolumn">
    <div className="card">
      <h2>Create New Club</h2>
      <form>
        <label htmlFor="cname">Enter Club Name:</label>
        <br />
        <input type="text" id="cname" name="cname" />
        <br />
        <br />
        <label htmlFor="cdesc">Club Description:</label>
        <br />
        <div>
          <textarea
            rows={6}
            placeholder="Add club description"
            defaultValue={""}
          />
        </div>
        <br />
        <div>
          <span>Upload Club Logo </span>
          <input type="file" placeholder="ClubImage" />
        </div>
        <br />
        <div>
          <button>Add Club</button>
        </div>
      </form>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>My Clubs</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <div className="imgContainer">
                <div className="fakeimg" style={{ height: 200, width: 200 }}>
                  Club1
                </div>
                <div className="imgButton">
                  <button value="test">Leave Club</button>
                </div>
              </div>
            </td>
            <td>
              <div className="imgContainer">
                <div className="fakeimg" style={{ height: 200, width: 200 }}>
                  Club2
                </div>
                <div className="imgButton">
                  <button value="test">Leave Club</button>
                </div>
              </div>
            </td>
            <td>
              <div className="imgContainer">
                <div className="fakeimg" style={{ height: 200, width: 200 }}>
                  Club3
                </div>
                <div className="imgButton">
                  <button value="test">Leave Club</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="card">
      <div className="card">
        <h2>Other Clubs</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="imgContainer">
                  <div className="fakeimg" style={{ height: 200, width: 200 }}>
                    Club1
                  </div>
                  <div className="imgButton">
                    <button value="test">Join Club</button>
                  </div>
                </div>
              </td>
              <td>
                <div className="imgContainer">
                  <div className="fakeimg" style={{ height: 200, width: 200 }}>
                    Club2
                  </div>
                  <div className="imgButton">
                    <button value="test">Join Club</button>
                  </div>
                </div>
              </td>
              <td>
                <div className="imgContainer">
                  <div className="fakeimg" style={{ height: 200, width: 200 }}>
                    Club3
                  </div>
                  <div className="imgButton">
                    <button value="test">Join Club</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
 
</div>
  )
}
