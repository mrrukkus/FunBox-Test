import * as React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main";

const App: React.FC = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </HashRouter>
  );
};

export default App;
