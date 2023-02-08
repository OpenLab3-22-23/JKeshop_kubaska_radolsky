import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import NavBar from "./NavBar";
import image from "img/shrooms.jpg";
import Products from './Products';

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
        <div>
      <header>
        <h1>J&K</h1>
        <NavBar />
      </header>

      <main>
      <img src="src/img/shrooms.jpg" alt="Shrooms"/>
        <h2>Step in to the Multiverse</h2>
        <p></p>
        <button>Step in</button>
      </main>

      <footer>
        <p>Scince 2023</p>
      </footer>
    </div>
    )
}

