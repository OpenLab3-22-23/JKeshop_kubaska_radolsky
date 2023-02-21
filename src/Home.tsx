import NavBar from "./NavBar";
import React from "react";
import LandingPage from "./LandingPage";



function Home() {
return (
    <div>
        <header>
        
        
        <img style={{ width: 100, height: 100 }} src="src/img/jak.png" alt="j&k"/>
        <NavBar />
        

      </header>
      <main>
        
        <h1 className="New">News</h1>
        <p>♥ Newest drop comming soon!!! ♥</p>
        </main>
    </div>
       );
}
export default Home;