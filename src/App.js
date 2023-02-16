import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from "./Containers/Home/Home";

import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import AddArticle from './Containers/AddArticle/AddArticle'
import Contact from './Containers/Contact/Contact'
import Article from './Containers/Article/Article'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/addArticle" exact element={<AddArticle />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/articles/:slug" exact element={<Article />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
