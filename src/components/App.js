import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchData, setSearchData] = useState('')

  function onSearchData(data) {
    setSearchData(data)
  }
  return (
    <div className="app">
      <Header onSearchData={onSearchData}/>
      <ListingsContainer searchData={searchData}/>
    </div>
  );
}

export default App;
