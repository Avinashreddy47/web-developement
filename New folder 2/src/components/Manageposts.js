import React from 'react'
import "../CSS/manageposts.css"
 
export default function Manageposts() {
  return (
    <div className="row">
         <div className="leftcolumn">
          <div className="card">
            <h2>Upload New Post</h2>  
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
        <div className="rightcolumn">
          <div className="card">
            <h2>My Posts</h2>
            <table>
                <tr>
                    <td>
                        <div className="imgContainer">
                            <div className="fakeimg" style={{height:200, width:200}}>Post1</div>
                            <div className="imgButton">
                                <button value="test">Delete Post</button>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="imgContainer">
                            <div className="fakeimg" style={{height:200, width:200}}>Post2</div>
                            <div className="imgButton">
                                <button value="test">Delete Post</button>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="imgContainer">
                            <div className="fakeimg" style={{height:200, width:200}}>Post3</div>
                            <div className="imgButton">
                                <button value="test">Delete Post</button>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="imgContainer">
                            <div className="fakeimg" style={{height:200, width:200}}>Post4</div>
                            <div className="imgButton">
                                <button value="test">Delete Post</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
          </div>
        </div>
       
    </div>
  )
}
