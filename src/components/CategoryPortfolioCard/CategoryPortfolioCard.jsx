import React from "react";
import st from "./CategoryPortfolioCard.module.scss";
import { Link } from "react-router-dom";

const CategoryPortfolioCard = (props) => {
    return(
        <div className={props.position ? st.categoryPortfolioCard + ' ' + st.premiumCard : st.categoryPortfolioCard}>
            <div className={st.cardImg}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={st.bottom}>
                <div className={st.title}>
                    <h3>{props.title}</h3>
                </div>
                <div className={st.content}>
                    <p>{props.content}</p>
                </div>
                <div className={st.link}>
                    <Link to={props.link}>Посмотреть</Link>
                </div>
            </div>
        </div>
    );
}


export default CategoryPortfolioCard;