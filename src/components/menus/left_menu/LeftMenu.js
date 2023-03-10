import React from "react";
import "./LeftMenu.css"

import { Link } from "react-router-dom";

const LeftMenu = () => {
    const [navbar, setNavbar] = React.useState(true);

    return (
        <>
            <i class={navbar ? "bi bi-list style" : "bi bi-x-lg style"} onClick={() => setNavbar(!navbar)}></i>
            <div className={navbar ? "navbar-toggle" : "navbar"}>
                <div className={navbar ? "navbar_itens-toggle" : "navbar_itens"}>
                    <h3>
                        <i class="nav__item bi bi-person" ></i>
                        <Link className="link_itens" to={"/account"}>
                            account
                        </Link>

                    </h3>
                    <h3><i class="nav__item bi bi-cash-stack"></i>loan </h3>
                    <h3><i class="nav__item bi bi-arrow-left-right"></i>transfer</h3>
                    <h3><i class="nav__item bi bi-credit-card-2-back"></i>payments</h3>
                    <h3><i class="nav__item bi bi-piggy-bank-fill"></i>savings</h3>
                    <h3><i class="nav__item bi bi-bar-chart-fill"></i>finance</h3>
                    <h3><i class="nav__item bi bi-currency-exchange"></i>exchange</h3>
                </div>
            </div>
        </>
    )
}

export default LeftMenu;