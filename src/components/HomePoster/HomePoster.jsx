import React from "react";
import st from "./HomePoster.module.scss";
import {Link} from "react-router-dom";
import { dynamicTitlePage } from "../../hooks/dynamicTitlePage";

const HomePoster = ({elems}) => {
    dynamicTitlePage('Купить женскую одежду'); 
    return(
        <section className={st.poster}>
            <div className={st.leftPoster} style={{backgroundColor: elems.color}}>
                <div className={st.posterLeftWrapper}>
                    <h2>{elems.title}</h2>
                    <p>{elems.text}</p>
                    <Link to={elems.link}>Посмотреть</Link>
                </div>
            </div>
            <div className={st.rightPosterImg}>
                <img src={elems.img} alt={elems.title} />
            </div>
        </section>
    );
}


export default HomePoster;