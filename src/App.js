import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Signup from "./components/Signup";
import Layout from './Layout/index';
import Addbill from './components/AddBill/Addbill';
import Reports from './components/Reports/Reports';

// const Layout = React.lazy(() =>
//   import('./components/AddBill/index')
// );


function App() {
  return (
    <div>
      <Router>
              <Routes>
                {/* default page */}
                <Route path='/' element={<Signup />} />
                {/* /layout/bill, /layout/report */}
                <Route path='/layout' element={<Layout />} >
                  <Route path='bill' element={<Addbill />} />
                  <Route path='report' element={<Reports />} />
                </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
