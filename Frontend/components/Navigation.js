import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import "../Navigation.css"

const Navigation = () => {
    const cookies = new Cookies();
    const home = "http://localhost:3000/";
    const [login, setLogin] = useState(cookies.get("loginToken"));

    const logout = () => {
        cookies.set("loginToken", JSON.stringify(false));
        setLogin("false");
    };

    if (login === "true")
        return (
            <div className="topnav">
                <a className={window.location.href === home ? "active" : null} href="/">Home</a>
                <a className={window.location.href === home + "contact" ? "active" : null} href="/contact">Contact</a>
                <a className={window.location.href === home + "about" ? "active" : null} href="/about">About</a>
                <a style={{ float: "right" }} onClick={logout} href="/">Logout</a>
                <a style={{ float: "right" }} className={window.location.href === home + "profile" ? "active" : null} href="/profile">{cookies.get("loginEmail")}</a>
            </div>

        );
    else
        return (
            <div className="topnav">
                <a className={window.location.href === home ? "active" : null} href="/">Home</a>
                <a className={window.location.href === home + "contact" ? "active" : null} href="/contact">Contact</a>
                <a className={window.location.href === home + "about" ? "active" : null} href="/about">About</a>
                <a style={{ float: "right" }} className={window.location.href === home + "login" ? "active" : null} href="/login">Login</a>
            </div>
        );
}

export default Navigation;