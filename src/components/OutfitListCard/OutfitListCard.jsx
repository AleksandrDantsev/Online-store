import React from "react";
import st from "./OutfitListCard.module.scss";
import { Link } from "react-router-dom";
import { onloadedImageAnimation } from "../../hooks/onloadedImageAnimation";


const OutfitListCard = ({elems, link}) => {
    const [isLoadedImg, Dummy] = onloadedImageAnimation(false, elems.image);


    return(
        <div className={st.outfitCard}>
        {
            isLoadedImg ?
            <Link to={link}>
                <div className={st.img}>
                    {
                        isLoadedImg ?
                        <img src={elems.image} alt={elems.title} loading="lazy"/>           
                        : Dummy
                    }
                </div>
                <div className={st.bottomInfo}>
                    <div className={st.nameCard}>
                        {elems.title}
                    </div>
                    <div className={st.quantityProd}>
                        <p>Количеств товаров:</p>{elems.products.length}
                    </div>
                </div>
            </Link>
            :
            Dummy
        }
        </div>
    );
}


export default OutfitListCard;