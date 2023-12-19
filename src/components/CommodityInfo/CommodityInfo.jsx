import React, {useState, memo} from "react";
import { useDispatch } from "react-redux";
import st from "./CommodityInfo.module.scss";
import { addedFavor, removeFavor } from "../../store/favoriteProd";
import { addBasketElement } from "../../store/basketBD";


const CommodityInfo = memo(({currentElement, booleanIsFavoriteList, setNoticeFavoriteList, setBooleanIsFavoriteList }) => {
    const [isAddedBasket, setAddedBasket] = useState(false);
    const [isOpenDescription, setIsOpenDescription] = useState(false);
    const dispatch = useDispatch();

    const addBasket = (e) => {
        e.preventDefault();
        setAddedBasket(true);
        dispatch(addBasketElement(currentElement));
    }

    const handlerAddedFavorite = (e) => {   
        e.preventDefault();
        setNoticeFavoriteList(true);
        setTimeout(() => setNoticeFavoriteList(false), 3000);
        if (!booleanIsFavoriteList) {
            dispatch(addedFavor(currentElement));
            setBooleanIsFavoriteList(true);      
        }
        else {
            dispatch(removeFavor(currentElement));
            setBooleanIsFavoriteList(false);
        }

    }

    return(
        <div className={st.rightColumn}>
                    <div className={st.title}>
                        <h1>{currentElement.name}</h1>
                        <div className={st.colorText}>{currentElement.colorText}</div>
                        <div className={st.cost}>{currentElement.cost} р</div>
                        <div className={st.colors}>
                        {
                            currentElement.color.map((el, i) => (
                                <div key={el + i} className={st.color} style={{backgroundColor: el}}></div>
                            ))
                        }  
                        </div>                   
                        <div className={st.size}>
                            <ul>
                                {currentElement.size.map(el => (
                                    <li key={el}>{el}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={st.formBt}>
                            <form>
                                <button onClick={addBasket} className={st.addedInBasket}>{isAddedBasket ? "Добавлено в корзину" : "Добавить в корзину"}</button>
                                <button onClick={handlerAddedFavorite} className={st.addedInFavorite}>
                                    {
                                        booleanIsFavoriteList ?
                                        <div className={st.trash}>
                                            <svg fill="#292929" version="1.1" id="Capa_1" width="45px" height="45px" viewBox="-281.3 -281.3 1047.60 1047.60" xmlSpace="preserve" stroke="#292929" strokeWidth="0.00485"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="67.224" width="350.535" height="71.81"></rect> <path d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447 h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"></path> </g> </g> </g></svg>
                                        </div>
                                        :
                                        <div className={st.heart}>
                                            <svg viewBox="0 0 24 24" width="30px" height="30px" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="1.552" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                                            </svg>  
                                        </div>
                                    }
                                </button>
                            </form>
                        </div>
                        <div className={st.description}>
                            <div onClick={() => {setIsOpenDescription(!isOpenDescription)}} className={st.btOpenDesc}>{isOpenDescription ? "Свернуть" : "Развернуть"} описание</div>
                            <div className={isOpenDescription ? st.descrInside + ' ' + st.openDescAnimation : st.descrInside + ' ' + st.closeDescAnimation}>
                                {currentElement.description}
                            </div>
                        </div>
                    </div>
                </div>
    );
})


export default CommodityInfo;