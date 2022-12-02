import React from "react";

function Header() {
    return (
        <header>
            <div className="logo">
                <div className="first">IP.Trunilov</div>
                <div className="second">ИП Трунилов | Портфолио</div>
                <div className="header-text">Разработка Web-продуктов любой сложности:<br/>от сайта-визитки до
                    CRM-системы
                </div>
                <button>Оставить заявку</button>
            </div>
            <div className="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="menu-block">
                <ul>
                    <li><a href="/">О себе</a></li>
                    <li><a href="/">Работы</a></li>
                    <li><a href="/">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;