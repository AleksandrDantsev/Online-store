import React, {Fragment} from "react";
import st from "./Basket.module.scss";
import BasketForm from "../BasketForm/BasketForm";
import { useSelector } from "react-redux/es/hooks/useSelector";
import BasketCard from "../BasketCard/BasketCard";
import BasketEmpty from "../BasketEmpty/BasketEmpty";
import { dynamicTitlePage } from "../../hooks/dynamicTitlePage";

const Basket = () => {
    const elemsBasket = useSelector(state => state.basketBD.productsBasket);
    const collectionAllBasketElems = useSelector(state => state.basketBD.resultBasketElems);
    dynamicTitlePage("Корзина - beauté");

    return(
        <div className={st.basket}>
            {
            elemsBasket.length ?
            <Fragment>
                <div className={st.basketLeftProduct}>
                    <div className={st.titleBasket}>
                        <h1>Корзина</h1><span className={st.count}>{collectionAllBasketElems.length}</span>
                    </div>
                    <div className={st.commodity}>
                        {
                            elemsBasket.length && 
                            (elemsBasket.map(el => <BasketCard key={el.id} img={el.img} name={el.name} cost={el.cost} colorText={el.colorText} color={el.color} size={el.size} link={el.link} id={el.id}/>))
                        
                        }
                    </div>
                </div>
            <BasketForm />
            </Fragment>
            :
            <BasketEmpty />
            }
        </div>
    );
}


export default Basket;