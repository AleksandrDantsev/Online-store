import React, { useState, useEffect } from "react";
import st from "./BasketCard.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCounterBasketElems, removeCounterBasketElemsPop, deleteSimilarElem } from "../../store/basketBD";
import { addedFavor } from "../../store/favoriteProd";

const BasketCard = (props) => {
    const [countProd, setCountProd] = useState(1);
    const dispatch = useDispatch();
    const resultBasketCollection = useSelector(state => state.basketBD.resultBasketElems);
    const favoriteColl = useSelector(state => state.favoriteProd.allFavAdded);

    useEffect(() => {
        setCountProd((resultBasketCollection.filter(el => el.id == props.id).length));
    }, []);

    const plusProd = () => {
        setCountProd(prev => prev + 1);
        dispatch(addCounterBasketElems(props));
    }

    const minusProd = () => {
        if (countProd <= 1) return;
        setCountProd(prev => prev - 1);
        dispatch(removeCounterBasketElemsPop(props));
    }

    const deleteElemInBasket = () => {
        dispatch(deleteSimilarElem(props));
    }

    const addFavorite = () => {
        dispatch(addedFavor(props));
    }

    return(
        <div className={st.cardBasket}>
            <div className={st.img}>
                <Link to={'/' + props.link}><img src={props.img[0]} alt={props.name} /></Link>
            </div>
            <div className={st.infoCard}>
                <div className={st.nameAndAmount}>
                    <Link to={'/' + props.link}><h3>{props.name}</h3></Link>
                    <span>{props.cost * countProd} р</span>
                </div>
                <div className={st.desc}>
                    <span className={st.infoTitleList}>Цвет</span>
                    <span className={st.Characteristic}>{props.colorText}</span>
                </div>
                <div className={st.desc}>
                    <span className={st.infoTitleList}>Цена</span>
                    <span className={st.Characteristic}>{props.cost} р</span>
                </div>
                <div className={st.desc}>
                    <span className={st.infoTitleList}>Кол-во</span>
                    <div className={st.characteristicBtns}>
                        <span onClick={minusProd} className={st.bt + ' ' + st.Minus}>-</span>
                        <div className={st.count}>{countProd}</div>
                        <span onClick={plusProd} className={st.bt + ' ' + st.btPlus}>+</span>
                    </div>
                </div>
                <div className={st.actions}>
                    <div onClick={deleteElemInBasket} className={st.delete}>Удалить</div>
                        {
                            !favoriteColl.find(el => el.id == props.id) ?
                            <div onClick={addFavorite} className={st.addFavorite + ' ' + st.colorAction}>
                                Добавить в "Избранное"
                             </div> :
                            <div onClick={addFavorite} className={st.addFavorite}>
                                Уже в избранном
                            </div>
                        }   
                </div>
            </div>
        </div>
    );
}


export default BasketCard;