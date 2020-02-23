import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./Home"
import About from "./About/About.js"
import App from "./App"
import Logomenu from './Logomenu';
import { relative } from 'path';

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <nav >
                        <Link to="/about/"><div id="font">进入商品页面效果，点此粉色区域</div></Link>
                        <App />
                        <Logomenu />
                    </nav>
    
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                </div>
            </Router>
        )
    }
    
}

export default AppRouter;