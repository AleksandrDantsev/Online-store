import React from "react";
import st from "./BasketEmpty.module.scss";
import { Link } from "react-router-dom";

const BasketEmpty = () => {
    return(
        <div className={st.basketDummy}>
            <div className={st.titleDummy}><h2>Ваша корзина - пуста</h2></div>
            <div className={st.text}>
                <p>Посмотрите наше актуальное предложение. Вы уж точно найдёте там что-то интересное!</p>
            </div>
            <div className={st.btHome}>
                <Link to="/">На главную</Link>
            </div>
        </div>
    );
}


export default BasketEmpty;