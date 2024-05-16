// App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
// import Dashboard from './Dashboard';
// import About from './About';
// import Home from './Home';
// import Veeru from './Linking';


// const App = () => {
//     return (
//         <Router>
//             <Veeru/>
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/About" element={<About/>} />
//                 <Route path="/Dashboard" element={<Dashboard/>} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
