import Logo from "../assets/img/dc-logo.png";
import style from "./Header.module.css";

export default function Header() {
    return (
        <header className="container d-flex justify-content-space-between ">
            <img className={style.logo} src={Logo} alt="" />
            <nav className="d-flex">
                <ul className={style.menu}>
                    <li>
                        <a href="">CHARACTERS</a>
                    </li>
                    <li>
                        <a href="">COMICS</a>
                    </li>
                    <li>
                        <a href="">MOVIES</a>
                    </li>
                    <li>
                        <a href="">TV</a>
                    </li>
                    <li>
                        <a href="">GAMES</a>
                    </li>
                    <li>
                        <a href="">COLLECTIBLES</a>
                    </li>
                    <li>
                        <a href="">VIDEOS</a>
                    </li>
                    <li>
                        <a href="">FANS</a>
                    </li>
                    <li>
                        <a href="">NEWS</a>
                    </li>
                    <li>
                        <a href="">SHOP</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}