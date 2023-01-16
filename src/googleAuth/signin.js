import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";

function Signin({ setValue }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="signin">
      <button class="reg" onClick={handleClick}>
        Signin With Google
      </button>
    </div>
  );
}
export default Signin;
