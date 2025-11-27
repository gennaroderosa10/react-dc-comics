import style from "./FooterBottom.module.css";
import Facebook from "../assets/img/footer-facebook.png";
import Twitter from "../assets/img/footer-twitter.png";
import Youtube from "../assets/img/footer-youtube.png";
import Pinterest from "../assets/img/footer-pinterest.png";
import Periscope from "../assets/img/footer-periscope.png";
import AppFooterTop from "./AppFooterTop";

export default function AppFooterBottom() {
    return (
        <footer className="background-black ">
            <AppFooterTop />
            <div className="container d-flex justify-content-space-between align-items-center ">
                <button className={`${style.btn} ciao`}>
                    SIGN-UP NOW!
                </button>
                <nav className="d-flex py-50">
                    <ul className={style.menu}>

                        <li>
                            <h3>FOLLOW US</h3>
                        </li>
                        <li>
                            <img src={Facebook} alt="" />
                        </li>
                        <li>
                            <img src={Twitter} alt="" />
                        </li>
                        <li>
                            <img src={Youtube} alt="" />
                        </li>
                        <li>
                            <img src={Pinterest} alt="" />
                        </li>
                        <li>
                            <img src={Periscope} alt="" />
                        </li>
                    </ul>
                </nav>
            </div>

        </footer>
    )
}