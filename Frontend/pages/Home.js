import React from 'react';
import Cookies from 'universal-cookie';
import Dashboard from "../components/dashboardTemplate/Dashboard"

const Home = () => {

    const cookies = new Cookies();

    if (cookies.get("loginToken") === "true")
        return (
            <div>
                <Dashboard />
            </div>

        );
    else
        return (
            <div>
                <h1>Nothing to show !</h1>
            </div>
        );
}

export default Home;