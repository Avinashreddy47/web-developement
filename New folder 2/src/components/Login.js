import React, { useState } from "react";
import axios from "axios";

import "../CSS/login.css"
import ProfileImage from "../../assets/images/profile.png";
import TemplateModal from "../Modals/TemplateModal";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  //Variables and Constants
  const initialState = {
    email: "",
    password: "",
  };

  const history = useHistory();
  const location = useLocation();

  //States
  const [user, setUser] = useState(initialState);
  const [modal, setModal] = useState({
    isShown: false,
    ModalTitle: "",
    ModalBody: "",
  });

  //Handlers
  const setUserHandler = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const signInHandler = async () => {
    var formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    try {
      const response = await axios({
        url: "/login",
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      });

      if (response.status === 200) {
        formData = new FormData();
        formData.append("token", response.data.token);
        const allImages = await axios({
        //   url: "/getallimages",
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: formData,
        });

        var newArray = [];
        var imgarr = JSON.parse(allImages.data.imagesarray);
        var extarr = JSON.parse(allImages.data.extensionsarray);
        var filenamesarray = JSON.parse(allImages.data.filenamesarray);

        for (var i = 0; i < extarr.length; i++) {
          newArray.push("data:image/" + extarr[i] + ";base64," + imgarr[i]);
        }
        history.push({
          pathname: "/dashboard",
          state: {
            ...location.state,
            token: response.data.token,
            allImages: newArray,
            filenames: filenamesarray,
          },
        });
      } else {
        setUser(initialState);
        setModal({
          isShown: true,
          ModalTitle: response.data.ModalTitle,
          ModalBody: response.data.ModalBody,
        });
      }
    } catch (error) {
      setModal({
        isShown: true,
        ModalTitle: error.response.data.ModalTitle,
        ModalBody: error.response.data.ModalBody,
      });
    }
  };

  return (
    <div className="Signin">
      <img
        src={ProfileImage}
        alt="Profile"
        style={{ width: "30%", margin: "2% 30%" }}
      />

      <div className="input-group mb-3">
        <div className="input-group-prepend d-none d-sm-block">
          <span className="input-group-text customtext">Email</span>
        </div>
        <input
          type="email"
          className="form-control customform"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={setUserHandler}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend d-none d-sm-block">
          <span className="input-group-text customtext">Password</span>
        </div>
        <input
          type="password"
          className="form-control customform"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onChange={setUserHandler}
        />
      </div>
      <button
        type="button"
        onClick={signInHandler}
        className="btn w-100 custombutton"
      >
        SIGN IN
      </button>
      <label for="role"><b>Select Role:</b></label>
                <select name="role" id="role">
                <option value="student">Student</option>
                <option value="schooladmin">School Admin</option>
                <option value="businessowner">Business Owner</option>
                </select>
                <br/><br/>
        <button type="submit">Register</button>
      <TemplateModal
        isShown={modal.isShown}
        setIsShown={setModal}
        ModalTitle={modal.ModalTitle}
        ModalBody={modal.ModalBody}
      />
    </div>


  );
};

export default Login;

