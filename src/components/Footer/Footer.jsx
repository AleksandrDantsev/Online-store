import React from "react";
import st from "./Footer.module.scss";


const Footer = () => {
    return(
        <div className={st.footer}>
            <div className={st.top}>
                <div className={st.footerColumnEl}>
                    <ul>
                        <h3>ПОМОЩЬ И ИНФОРМАЦИЯ</h3>
                        <li>О ANSWEAR.ua</li>
                        <li>Правила магазина ANSWEAR.ua</li>
                        <li>Сотрудничество</li>
                        <li>Правила ANSWEARClub</li>
                        <li>Что нужно знать, покупая товар дороже 150 евро?</li>
                        <li>Возврат и рекламация</li>
                        <li>Часто задаваемые вопросы</li>
                        <li>Контакт</li>
                        <li>Корпоративная социальная ответственность</li>
                        <li>Блог ANSWEAR</li>
                        <li>Политика конфиденциальности</li>
                    </ul>
                </div>
                <div className={st.footerColumnEl}>
                    <ul>
                        <h3>ДОСТАВКА</h3>
                        <li>В отделение Новая Почта</li>
                        <li>Курьером Meest ПОЧТА</li>
                    </ul>
                </div>
                <div className={st.footerColumnEl} id={st.usersInfo}>
                    <ul>
                        <h3>ОПЛАТА</h3>
                        <li>Банковской картой</li>
                        <li>Наложенным платежом</li>
                    </ul>
                </div>
            </div>
            <div className={st.footerBottom}>
                <ul>
                    <li>Политика Конфиденциальности</li>
                    <li>Правила</li>
                    <li>Данные Компании</li>
                    <li>Все Кукис</li>
                    <li>Карта Сайта</li>
                </ul>
            </div>
        </div>
    );
}


export default Footer;