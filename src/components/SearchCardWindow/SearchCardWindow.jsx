import React from "react";
import st from "./SearchCardWindow.module.scss";
import { Link } from "react-router-dom";

const SearchCardWindow = ({filterArray}) => {
    return(
        <div className={st.card}>
            <div className={st.img}>
            <Link to={'/' + filterArray.link}><img src={filterArray.img[0]} alt={filterArray.name} /></Link>
            </div>
            <div className={st.cardInfo}>
                <div className={st.name}>
                    <Link to={'/' + filterArray.link}><h3>{filterArray.name}</h3></Link>
                </div>
                <div className={st.size}>
                    <ul>
                        {filterArray.size.map(el => <li key={el}>{el}</li>)}
                    </ul>
                </div>
                <div className={st.cardCost}>
                    <span>{filterArray.cost} Р</span>
                </div>
            </div>
        </div>
    );
}


export default SearchCardWindow;