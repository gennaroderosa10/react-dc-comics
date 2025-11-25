import style from "./FooterBottom.module.css";

export default function AppFooterBottom() {
    return (
        <footer className="background-black ">
            <div className="container d-flex justify-content-space-between align-items-center ">
                <button className={`${style.btn} ciao`}>
                    SIGN-UP NOW!
                </button>
                <nav className="d-flex py-50">
                    <ul className={style.menu}>

                        <li>
                            <h3>FOLLOW</h3>
                        </li>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                            <img src="" alt="" />
                        </li>
                        <li>
                            <img src="" alt="" />
                        </li>
                    </ul>
                </nav>
            </div>

        </footer>
    )
}