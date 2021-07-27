import React, {useState} from "react";

function Search({onSearchData}) {
  const [searchData, setFormData] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSearchData(searchData)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchData}
        onChange={(e) => setFormData(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
