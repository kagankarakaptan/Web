import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import { ToastProvider } from "react-toast-notifications";
import Productions from './pages/Productions'


const App = () => {

    return (
        <div>
            <ToastProvider>
                <Navigation />
                <BrowserRouter>
                    <Switch >
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/login" component={Login} />
                        <Route path="/productions" component={Productions} />

                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </ToastProvider>
        </div>
    )
}

export default App;