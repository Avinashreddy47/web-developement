import React from "react";
import "../CSS/superadmin.css"

const SuperAdminBusiness = () => {
  return (
    <div>
 
      <div>
        <div className="right chatbody">
          <div className="msger">
            <header className="msger-header">
              <div className="msger-header-title">
                <i className="fas fa-comment-alt"></i> Chat
              </div>
              <div className="msger-header-options">
                <span>
                  <i className="fas fa-cog"></i>
                </span>
              </div>
            </header>

            <main className="msger-chat">
              <div className="msg left-msg">
                <div
                  className="msg-img"
                  //  style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
                ></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Rishik</div>
                  </div>

                  <div className="msg-text">
                    Hi, welcome to Chat! send me a message.
                    😄
                  </div>
                 
                </div>
              </div>

              <div className="msg right-msg">
                <div
                  className="msg-img"
                  //  style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                ></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Regen</div>
                  </div>

                  <div className="msg-text">Hi</div>
                </div>
              </div>
              <div className="msg left-msg">
                <div
                  className="msg-img"
                  //  style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
                ></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Rishik</div>
                  </div>

                  <div className="msg-text">Hi how are you</div>
                </div>
              </div>

              <div className="msg right-msg">
                <div
                  className="msg-img"
                  //  style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                ></div>

                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">Regen</div>
                  </div>

                  <div className="msg-text">Am good</div>
                </div>
              </div>
            </main>

            <form >
              <input type="text"  placeholder="Enter your message..."/>
              <button type="submit" >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminBusiness;
