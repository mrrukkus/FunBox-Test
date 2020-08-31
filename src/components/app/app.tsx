import * as React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import Main from "../main/main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route render={
          () => (
            <React.Fragment>
              <h1>
                404.
                <br/>
                <small>Здесь нечего смотреть. Ухади)))</small>
              </h1>
              <Link to="/">Главная страница</Link>
            </React.Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
