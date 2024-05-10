// App.js
import React from 'react';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Home from './Home';
import Veeru from './Linking';


const App = () => {
    return (
        <Router>
            <Veeru/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    );
}

export default App;
