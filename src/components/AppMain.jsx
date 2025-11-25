import style from "./Main.module.css";
import DigitalComics from "../assets/img/buy-comics-digital-comics.png";
import Merc from "../assets/img/buy-comics-merchandise.png";
import Sub from "../assets/img/buy-comics-subscriptions.png";
import Location from "../assets/img/buy-comics-shop-locator.png";
import Visa from "../assets/img/buy-dc-power-visa.svg";


export default function AppMain() {
    return (
        <main>
            <div className="background-black">
                <div className="container d-flex">
                    <h2 className="color-white py-50">--CONTENT GOES HERE--</h2>
                </div>
            </div>
            <div className="background-blue">
                <div className="container d-flex">
                    <nav className="d-flex">
                        <ul className={style.menu}>
                            <li className={style.icon}>
                                <img src={DigitalComics} alt="" />
                                PROVA
                            </li>
                            <li className={style.icon}>
                                <img src={Merc} alt="" />
                                PROVA
                            </li>
                            <li className={style.icon}>
                                <img src={Sub} alt="" />
                                PROVA
                            </li>
                            <li className={style.icon}>
                                <img src={Location} alt="" />
                                PROVA
                            </li>
                            <li className={style.icon}>
                                <img src={Visa} alt="" />
                                PROVA
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
    )
}