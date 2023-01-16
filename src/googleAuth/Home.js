import React from "react";
import App from "../App";

function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <App />
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default Home;