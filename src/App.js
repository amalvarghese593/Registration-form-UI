import "./App.css";
import { Route, Switch } from "react-router-dom";
import { RegPage } from "./components/RegPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register/recruiter" exact>
          <RegPage who="Recruiter" />
        </Route>
        <Route path="/register/job-seeker" exact>
          <RegPage who="JobSeeker" />
        </Route>
        <Route path="/register/campus" exact>
          <RegPage who="Campus" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
