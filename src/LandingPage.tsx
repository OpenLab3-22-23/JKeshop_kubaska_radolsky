import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import NavBar from "./NavBar";

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
        <div>
      <header>
        <h1>J&K</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Step in to the Multiverse</h2>
        <p></p>
        <button>Step in</button>
      </main>

      <footer>
        <p></p>
      </footer>
    </div>
    )
}

