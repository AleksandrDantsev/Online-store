import React, { useMemo } from "react";
import st from "./Favorite.module.scss";
import CardProd from "../CardProd/CardProd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteFilter from "../FavoriteFilter/FavoriteFilter";

import { dynamicTitlePage } from "../../hooks/dynamicTitlePage";

const Favorite = () => {
    const favElems = useSelector(state => state.favoriteProd.allFavAdded);
    dynamicTitlePage("Избранное - beauté");

    const declensionOfTheWord = useMemo(() => () => {
        let lengthWord = favElems.length;   
        if (lengthWord.toString().at(-1) == "0") return "товаров";
        if (lengthWord.toString().at(-1) == "1" && lengthWord != 11) return "товар";
        if (lengthWord > 1 && lengthWord < 5) return "товара";
        if (lengthWord >= 5 && lengthWord <= 19) return "товаров";
        if (['2', '3', '4'].includes(lengthWord.toString().at(-1))) return "товара";
        else {
            return 'товаров';
        }
    }, [favElems])

    return(
        <div className={st.favoriteConteiner}>
            <div className={st.titleBlock}>
                <div className={st.title}>
                    <div className={st.titleCounter}>
                        <h1>Мои избранные</h1>
                        <div className={st.countProd}><p>{favElems.length} {declensionOfTheWord()} в категории "Избранное"</p></div>
                    </div>
                    <FavoriteFilter />     
                </div>  
            </div>
            <div className={st.conteinterProducts}>
                {
                favElems.length > 0 ? 
                favElems.map(el => <CardProd id={el.id} 
                                            flag={"favorite"} 
                                            position={"favorite"}
                                            key={el.name} 
                                            img={el.img} 
                                            color={el.color} 
                                            name={el.name} 
                                            cost={el.cost} 
                                            size={el.size} 
                                            link={el.link} 
                                            description={el.description}/>) :
                        <div className={st.emptyFavoriteWindow}>
                            <span>Ваша коллекция избранного пуста. <Link to="/">На главную</Link></span>
                        </div>
                }
            </div>
        </div>
    );
}


export default Favorite;