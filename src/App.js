import "./App.css";
import { Route, Switch } from "react-router-dom";
import { JobSeeker } from "./components/JobSeeker";
import { Recruiter } from "./components/Recruiter";
import { Campus } from "./components/Campus";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register/recruiter" exact>
          <Recruiter />
        </Route>
        <Route path="/register/jobseeker" exact>
          <JobSeeker />
        </Route>
        <Route path="/register/campus" exact>
          <Campus />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
