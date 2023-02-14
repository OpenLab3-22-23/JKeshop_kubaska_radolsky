import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import NavBar from "./NavBar";
import image from "img/shrooms.jpg";
import Product from './Products';

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
      </header>

      <main>
      <img style={{ width: 450, height: 550 }} src="src/img/city.jpg" alt="Shrooms"/>
        <h2>Step in to the Multiverse</h2>
        <p></p>
        <button>Step in</button>
      </main>

      <footer>
        <p>Science 2023</p>
      </footer>
    </div>
    )
}

