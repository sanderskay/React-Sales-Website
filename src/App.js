import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Footer from "./Pages/Footer/Footer";
import Services from "./Pages/Services/Services";
import Products from "./Pages/Products/Products";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

/*TO DO

1. CHANGE INTO PORTFOLIO SITE OR CUSTOM SITE
2. CHANGE ICONS
3. CHANGE IMAGES
4. CHANGE DATA CONTENT
5. LINK WITH GITHUB
6. PUT ONLINE



*/
