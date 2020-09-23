import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import OrchardContainer from './components/OrchardContainer';
// import View from './components/Pages/View';
import About from './components/Pages/About'
import ListingFormPage from './components/Pages/ListingFormPage';
import Add from './components/Pages/Add';

function App() {
  return (
    <div className="everything">
      <Navbar />
      <Router>
        <Route exact path="/" component={Form} />
        <Route exact path="/menu" component={OrchardContainer} />
        {/* <Route exact path="/items" component={View} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/newlisting" component={ListingFormPage} />
        <Route exact path="/menu#Add" component={Add} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
