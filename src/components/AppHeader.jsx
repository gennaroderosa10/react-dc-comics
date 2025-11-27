import Logo from "../assets/img/dc-logo.png";
import style from "./Header.module.css";

export default function AppHeader() {
    const navLinks = [
        {
            name: "CHARACTERS",
            active: false,
        },
        {
            name: "MOVIES",
            active: true,
        },
        {
            name: "TV",
            active: false,
        },
        {
            name: "GAMES",
            active: false,
        },
        {
            name: "COLLECTIBLES",
            active: false,
        },
        {
            name: "VIDEOS",
            active: false,
        },
        {
            name: "FANS",
            active: false,
        },
        {
            name: "NEWS",
            active: false,
        },
        {
            name: "SHOP",
            active: false,
        },
    ];

    return (
        <header className="container d-flex justify-content-space-between ">
            <img className={style.logo} src={Logo} alt="" />
            <nav className="d-flex">
                <ul className={style.menu}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a className={link.active ? "active" : ""} href="">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}