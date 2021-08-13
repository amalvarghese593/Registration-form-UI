import "./App.css";
import { Route, Switch } from "react-router-dom";
import { RegPage } from "./components/RegPage";
import { JobSeeker } from "./components/JobSeeker";
import { Recruiter } from "./components/Recruiter";
import { Campus } from "./components/Campus";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/register/recruiter" exact>
          <RegPage who="Recruiter" />
        </Route> */}
        {/* <Route path="/register/job-seeker" exact>
          <RegPage who="Job Seeker" />
        </Route> */}
        {/* <Route path="/register/campus" exact>
          <RegPage who="Campus" />
        </Route> */}
        <Route path="/register/recruiter2" exact>
          <Recruiter />
        </Route>
        <Route path="/register/job-seeker2" exact>
          <JobSeeker />
        </Route>
        <Route path="/register/campus2" exact>
          <Campus />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
