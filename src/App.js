import { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Signin from "./googleAuth/signin";

function App() {
  const [data, setData] = useState([]);
  const [tempdata, settempData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((res) => res.json())
      .then((data) => {
        setData(data.books);
        settempData(data.books);
      });
  }, []);

  console.log(data);

  return value ? (
    <div className="app-body">
      <Header data={data} settempData={settempData} />
      <Cards data={tempdata} />
    </div>
  ) : (
    <Signin setValue={setValue} />
  );
}

export default App;
