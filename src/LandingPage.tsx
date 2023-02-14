import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import NavBar from "./NavBar";
import image from "img/shrooms.jpg";
<<<<<<< HEAD
import Product from './Products';
=======
import Products from './Products';
>>>>>>> 10f27c391fd5f488d68b4512dadcd35f7bafc562

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
        <div>
      <header>
<<<<<<< HEAD
      <img style={{ width: 100, height: 100 }} src="src/img/jak.png" alt="j&k"/>
=======
        <h1>J&K</h1>
>>>>>>> 10f27c391fd5f488d68b4512dadcd35f7bafc562
        <NavBar />
      </header>

      <main>
<<<<<<< HEAD
      <img style={{ width: 450, height: 550 }} src="src/img/city.jpg" alt="Shrooms"/>
=======
      <img src="src/img/shrooms.jpg" alt="Shrooms"/>
>>>>>>> 10f27c391fd5f488d68b4512dadcd35f7bafc562
        <h2>Step in to the Multiverse</h2>
        <p></p>
        <button>Step in</button>
      </main>

      <footer>
<<<<<<< HEAD
        <p>Science 2023</p>
=======
        <p>Scince 2023</p>
>>>>>>> 10f27c391fd5f488d68b4512dadcd35f7bafc562
      </footer>
    </div>
    )
}

