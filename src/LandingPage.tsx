import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import NavBar from "./NavBar";
import image from "img/shrooms.jpg";
import Product from './Products';
import { Link } from "react-router-dom";

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
        <div>
      <header>
        <img style={{ width: 100, height: 100 }} src="src/img/jak.png" alt="j&k"/>
        <NavBar />
        <button onClick={handleLogOut}>Sing out</button>
      </header>

      <main>
      <img style={{ width: 450, height: 600 }} src="src/img/city.jpg" alt="Shrooms"/>
        <h2 className="Stepinto" >Step in to the Multiverse</h2>
        <p></p>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Naziv-fontu"></link>
        <Link to="/Home"> {}
          <button className="Stepin" >Step in</button>
        </Link>
      </main>

      <footer>
        <p>Science 2023</p>
      </footer>
    </div>
    )
}

