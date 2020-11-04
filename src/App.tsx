import React from "react";

import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landlord from "./components/Landlord";
import { BorderLinearProgress } from "./components/BorderLinearProgress";
import InsurancePolicy from "./components/InsurancePolicy";
import { useStoreState } from "./store";
import FindLocation from "./components/FindLocation";

function App() {
  const progress = useStoreState((state) => state.progress);
  return (
    <div className="App">
      <Container maxWidth="md">
        <div className="mt-6 flex justify-center items-center">
          <h3 className="mr-4">Start</h3>
          <BorderLinearProgress variant="determinate" value={progress} />
          <h3 className="ml-4">Finish</h3>
        </div>
      </Container>
      <Container maxWidth="md">
        <Router>
          <Route exact path="/landlord">
            <Landlord />
          </Route>
          <Route exact path="/insurance">
            <InsurancePolicy />
          </Route>
          <Route path="/location">
            <FindLocation />
          </Route>
        </Router>
      </Container>
    </div>
  );
}

export default App;
