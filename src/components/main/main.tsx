import * as React from "react";
import Catalog from "../catalog/catalog";

const Main = () => {
  return (
    <React.Fragment>
      <main className="main">
        <h1 className="main__title">Ты сегодня покормил кота?</h1>
        <Catalog/>
      </main>
    </React.Fragment>
  )
}

export default Main;