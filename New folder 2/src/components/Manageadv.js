import React from 'react'

export default function Manageadv() {
  return (
    <div className="row">
  <div className="rightcolumn">
    <div className="card">
      <h2>My Advertisements</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <div className="imgContainer">
                <div className="fakeimg" style={{ height: 200, width: 200 }}>
                  Advertisement1
                </div>
                <br />
                <div className="imgButton">
                  <button value="test">Delete Advertisement</button>
                </div>
              </div>
            </td>
            <td>
              <div className="imgContainer">
                <div className="fakeimg" style={{ height: 200, width: 200 }}>
                  Advertisement2
                </div>
                <br />
                <div className="imgButton">
                  <button value="test">Delete Advertisement</button>
                </div>
              </div>
            </td>
            <td>
              <div className="imgContainer">
                <div className="fakeimg" style={{ height: 200, width: 200 }}>
                  Advertisement3
                </div>
                <br />
                <div className="imgButton">
                  <button value="test">Delete Advertisement</button>
                </div>
              </div>
            </td>
            <td>
              <div className="imgContainer">
                <div className="fakeimg" style={{ height: 200, width: 200 }}>
                  Advertisement4
                </div>
                <br />
                <div className="imgButton">
                  <button value="test">Delete Advertisement</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="leftcolumn">
    <div className="card">
      <h2>Upload New Advertisement</h2>
      <form>
        <p>Enter Text Here:</p>
        <div>
          <textarea rows={6} placeholder="Add post" defaultValue={""} />
        </div>
        <br />
        <div>
          <span>Upload Image </span>
          <input type="file" placeholder="Image" />
        </div>
        <br />
        <div>
          <button>Post</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
