import { useState, useEffect } from "react";

function Header({ data, settempData }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length === 0) settempData(data);
    else {
      const temp = data.filter((element) => {
        return element.title.toLowerCase().includes(search.toLowerCase());
      });
      settempData(temp);
    }
  }, [search]);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="input-body">
      <div className="searchbar">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search book..."
        />
      </div>

      <div className="logbutton">
        <button className="log" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
