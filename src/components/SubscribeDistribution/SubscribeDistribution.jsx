import React from "react";
import st from "./SubscribeDistribution.module.scss";


const SubscribeDistribution = () => {
    return(
        <div className={st.descBlock}>
            <div className={st.leftBlockDesc}>
                <div className={st.leftBlockDescTitle}>
                    <h3>
                        <span>-15%**</span> на первую покупку за подписку на рассылку
                    </h3>
                </div>
                <div className={st.leftBlockDescContent}>
                    <p>Подписывайтесь на рассылку и получайте скидку на покупки</p>
                </div>
                <div className={st.leftBlockDescFootnote}>
                    <p>**Одноразовая скидка распространяется на весь ассортимент и сработает при покупке новинок 
                        (товары с “чёрными ценниками”) минимум на 8500 р. Промокод будет выслан на указанный Тобой адрес e-mail</p>
                </div>
            </div>
            <div className={st.rightBlockDesc}>
                <form>
                    <input className={st.distribInput} type="email" placeholder="Введите адрес электронной почты" />
                    <button>Подписаться</button>
                </form>
            </div>
        </div>
    );
}


export default SubscribeDistribution;