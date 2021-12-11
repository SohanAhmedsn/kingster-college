import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./component/Home/Home";

import Header from "./component/Header/Header";
import Acacemics from "./component/Academics/Acacemics";
import Blog from "./component/Athletics/Blog/Blog";
import Athletics from "./component/Athletics/Athletics";
import Courses from "./component/Academics/Admission/Courses/Courses";

import Found from "./component/notFound/Found";
import Admission from "./component/Academics/Admission/Admission";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/acacemics">
            <Acacemics />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/athletics">
            <Athletics />
          </Route>
          <Route exact path="/admission">
            <Admission />
          </Route>
          <Route exact path="*">
            <Found />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
