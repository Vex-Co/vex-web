import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Import your components that you want to navigate to
import About from './About';

const App1 = () => {
  return (
    <div>
        <Router>

        <Routes>
            {/* <Route path="/" element={<App1 />} /> */}
            <Route path="/about" element={<About />} />
        </Routes>
        </Router>
    </div>
  );
};

export default App1;
