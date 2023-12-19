import React, {Fragment} from "react";
import st from "./ExchangeCommodity.module.scss";


const ExchangeCommodity = () => {
    return(
        <div className={st.wrapper}>
            <h1>Обмен и возврат товаров</h1>
            <p>Если вам по каким-либо причинам не подошел товар, мы можем предложить вам обмен или возврат.</p>
            <ol>
                <span>Оформляя заказ на сайте, Вы автоматически соглашаетесь с условиями работы интернет-магазина:</span>
                <li>- Транспортные расходы по возвращению бракованного товара оплачивается Продавцом.</li>
                <li>- Возврат товара по каким-либо другим причинам оплачивается Покупателем.</li>
            </ol>
            <ol>
                <li>Возврат товара возможен в течение 14 дней с момента покупки, в новом и не поврежденном состоянии. (Сохраненный товарный вид, бирки  и без посторонних запахов духов, стирального порошка, и тому подобное. В противном случае мы можем принять товар, не возмещая его стоимость)</li>
                <li>Возврат средств осуществляется в течение 10 рабочих дней с момента отправки Покупателем возврата.</li>
            </ol>
            <p>Согласно действующему закону "О защите прав потребителей" товары, приобретенные по скидке в период акций, обмену и возврату не подлежат! Кроме случаев, когда покупателем обнаружен брак товара.</p>
            <p>На категорию Парфюмерия и Боди нет обмена и возврата.
            Согласно действующим нормам законодательства, парфюмерно-косметические товары и нижнее белье надлежащего качества не подлежат возврату или обмену*.</p>
            <p>Мы дорожим своей репутацией и к каждому клиенту относимся лояльно и с уважением</p>
            <p>*Согласно статьи 9 Закона Украины «О защите прав потребителей» от 12.05.1991 г. №1023-ХІІ и Приложения №3 к Постановлению КМУ «Про реализацию отдельных положений Закона Украины «О защите прав потребителей» от 19.03.1994 г. №172, к товарам надлежащего качества, которые не подлежат обмену (возврату), относятся: парфюмерно-косметические изделия, нижнее белье т. д. (в списке очень много товаров).</p>
        </div>
    );
}


export default ExchangeCommodity;