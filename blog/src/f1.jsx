import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
<div>
function F1() {
  return (<Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>)
}
</div>

export default F1;
