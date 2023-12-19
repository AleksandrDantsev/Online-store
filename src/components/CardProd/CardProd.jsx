import React, {useState, memo, Fragment} from "react";
import st from "./CardProd.module.scss";
import { Link } from "react-router-dom";
import SuccessAddedFavorWindow from "../SuccessAddedFavorWindow/SuccessAddedFavorWindow";
import { useDispatch, useSelector} from "react-redux";
import { addedFavor, removeFavor } from "../../store/favoriteProd";
import { onloadedImageAnimation } from "../../hooks/onloadedImageAnimation";

const additionalyClassNameCard = {
    list: 'listCard',
    favorite: 'favoriteCard',
    slider: 'sliderAdaptiveCard',
    search: "searchResult",
}

const CardProd = memo((props) => {
    const [isAddFavor, setIsAddFavor] = useState(false);
    const [isLoadedImg, Dummy] = onloadedImageAnimation(false, props.img[0]);
    const dispatch = useDispatch();
    const listFavor = useSelector(state => state.favoriteProd.allFavAdded);

        const addProdInFavorite = () => {
            if (listFavor.find(el => el.id == props.id)) {
                dispatch(removeFavor(props));
            }
            else {
                dispatch(addedFavor(props))
                setIsAddFavor(true);
            }
        }

        const removeProdInFavorite = () => {
                dispatch(removeFavor(props));
                setIsAddFavor(false);
        }

    return(
        <div className={!props.position ? st.card : st.card + ' ' + st[additionalyClassNameCard[props.position]]}>
            {isAddFavor && <SuccessAddedFavorWindow />}
                {
                    props.flag == 'home' ? 
                    <div onClick={addProdInFavorite} 
                    className={listFavor.find(el => el?.id == props.id) ? st.heart + ' ' + st.heartAdded : st.heart}>
                        <svg viewBox="0 0 24 24" width="30px" height="30px" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="0.552" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                        </svg>
                    </div> :
                    <div onClick={removeProdInFavorite} className={st.trashLogo}>
                        <svg fill="#707070" version="1.1" id="Capa_1" width="50px" height="50px" viewBox="-281.3 -281.3 1047.60 1047.60" xmlSpace="preserve" stroke="#707070" strokeWidth="0.00485"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="67.224" width="350.535" height="71.81"></rect> <path d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447 h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"></path> </g> </g> </g></svg>
                    </div>
                }   
            {isLoadedImg ? 
            <Fragment>
                <div className={st.img}>
                    <Link to={'/' + props.link}>
                        <img src={props.img[0]} alt={props.name} loading="lazy"/>
                        
                        {
                            props.img.length > 1 ? 
                            <span className={st.hiddenImgHover}>
                                <img src={props.img[1]} alt={props.name} />
                            </span> : ''
                        }
                    </Link>
                </div>
                <div className={st.bottomCard}>
                    <div className={st.name}>{props.name}</div>
                    <div className={st.cost}>{props.cost} Р</div>
                    <div className={st.color}>
                        <ul>
                            {props.color.map(el => <li key={el} style={{backgroundColor: `${el}`}}></li>)}
                        </ul>
                    </div>
                    <div className={st.size}>
                        <ul>
                            {props.size.map(el => <li key={el + props.name}>{el}</li>)}
                        </ul>
                    </div>
                </div>  
            </Fragment>
             :
             Dummy 
             }
         </div>
    );
})


export default CardProd;