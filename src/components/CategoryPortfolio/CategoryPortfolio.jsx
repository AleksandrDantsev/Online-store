import React from "react";
import st from "./CategoryPortfolio.module.scss";
import CategoryPortfolioCard from "../CategoryPortfolioCard/CategoryPortfolioCard";

const CategoryPortfolio = () => {
    return(
        <div className={st.categoryPortfolio}>
            <div className={st.catTitle}>
                <h2>Категории</h2>
            </div>
            <div className={st.catList}>
                <CategoryPortfolioCard title={"СВИТЕРЫ И СВИТШОТЫ"} image={"./picture/cat1.webp"} content={"Уютный ассортимент со суперскидками"} link={'/odejda/sviter'}/>
                <CategoryPortfolioCard title={"КУРТКИ И ПАЛЬТО"} image={"./picture/cat2.webp"} content={"Позаботься о верхних слоях"} link={'/odejda/kurtky'}/>
                <CategoryPortfolioCard title={"ОБУВЬ"} image={"./picture/cat3.webp"} content={"Твоя новая пара - здесь!"} link={'/obuv'}/>
            </div>
        </div>
    );
}


export default CategoryPortfolio;