import React from "react";

function Footer() {
    return (
        <footer id="contacts">
            <div className="contacts-block">
                <h2>Контакты</h2>
                <p>Для всех желающих связаться со мной, могу порекомендовать заполнить предложенную ниже форму:</p>
                <form id="contact-form" className="contact-form">
                    <input type="hidden" name="contact_number"/>
                    <input className="inputstyle" id="fullName" type="text" name="user_name" placeholder="Иванов Иван" required/>
                    <input className="inputstyle" id="phone_id" type="tel" name="user_phone" placeholder="+7-999-999-9999"
                           required pattern="+[1-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                    <input className="inputstyle" id="email_id" type="email" name="user_email" placeholder="writer@example.com"
                           required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" minLength="3" maxLength="64"/>
                    <textarea className="textareastyle" id="message" name="message" required placeholder="Ваше сообщение..."></textarea>
                    <div className="captcha-container">
                        <div className="captcha-container-first">
                            <div className="captcha" id="captcha">
                            </div>
                            <div className="captcha-restart"><a href="/">Обновить</a>
                            </div>
                        </div>
                        <div className="captcha-container-second">
                            <div className="captcha-input">
                                <input type="text" name="reCaptcha" id="reCaptcha" placeholder="ХХХХХХ" maxLength="6"/>
                            </div>
                            <div id="errCaptcha" className="errmsg"></div>
                        </div>
                        <div className="captcha-container-third">
                            <input className="submit" type="submit" value="Отправить сообщение"/>
                        </div>
                    </div>
                </form>
                <p className="messenger-text">... или найдите меня в одном из мессенджеров или социальной сети</p>
                <div className="social-networks">
                    <div>
                        <a href="https://www.youtube.com/channel/UC2f64gDIBG9Qr018jQV-w4Q" target="_blank" rel="noreferrer">
                            <img src="/images/youtube.png" alt="YouTube"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/g3n0m" target="_blank" rel="noreferrer">
                            <img src="/images/facebook.png" alt="Facebook"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/g3n0m/" target="_blank" rel="noreferrer">
                            <img src="/images/instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://t.me/TruForce" target="_blank" rel="noreferrer">
                            <img src="/images/telegram.png" alt="Telegram"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://vk.com/g3n0m" target="_blank"rel="noreferrer" >
                            <img src="/images/vk.png" alt="VK"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;