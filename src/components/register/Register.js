import React from "react";
import styled from "styled-components";
import "./Register.css"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <div className="top__section">
                <div className="grid__icons">
                    <img src={require("../images/icon_1.png")} alt="icon" className="icons_st" />
                    <img src={require("../images/icon_2.png")} alt="icon" className="icons_st" />
                    <img src={require("../images/icon_3.png")} alt="icon" className="icons_st" />
                </div>
                <TITLE>connect to your bank account</TITLE>
            </div>
            <div className="bottom__section">
                <div className="form">
                    <input type={"text"} required placeholder="Your Name" className="input__field" />

                    <input type={"text"} required placeholder="Bank Account" className="input__field" />

                    <input type={"text"} required placeholder="Email" className="input__field" />

                    <input type={"text"} required placeholder="Password" className="input__field" />

                    <p className="confirm">
                        <input className="checkbox" type={"checkbox"} />By siging up, you  agree to <br />banks term of use & privace policy
                    </p>

                    <div className="btns">
                        <Link to={"/"} className="Link bnt_1">sign in</Link>
                        or
                        <Link to={"/"} className="Link btn_2">cancel</Link>

                    </div>

                    <p className="already">already sign up ? <Link to={"/"}>log in</Link></p>
                </div>
            </div>
        </div>
    )
}

const TITLE = styled.h1`
    color: #fff;
    font-size: 1rem;
    text-align: center;
    position: relative;
    top: 34%;
`

export default Register;