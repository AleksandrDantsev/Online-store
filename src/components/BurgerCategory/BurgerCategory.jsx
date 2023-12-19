import React, {Fragment, useMemo} from "react";
import st from "./BurgerCategory.module.scss";
import { Link } from "react-router-dom";
import { dateCard, categoryTitle } from "../dateCard";

const BurgerCategory = ({isOpenCatalogMenu, closeWindowBurger}) => {

    const ListCategoryMenu = useMemo(() => {
        return (
            Object.keys(dateCard).map((item, id) => (
            <ul onClick={closeWindowBurger} key={item + id}>
                <Link to={`/${item}`}><h3>{categoryTitle[item]}</h3></Link>
                    {
                        Object.keys(dateCard[item]).map((el, i) => 
                        <Link key={item + el + i} to={`/${item + '/' + el}`}>
                        <li key={el + item + i}>{categoryTitle[el]}</li>
                </Link>)
                    }
            </ul>
        ))
        );
    }, [])

    return(
        <Fragment>
            <div className={!isOpenCatalogMenu ? `${st.burgerListCategory} ${st.hiddenMenuSide}` : st.burgerListCategory}>
            {ListCategoryMenu}
            </div>
            <div className={isOpenCatalogMenu ? `${st.burgerListInfo} ${st.hiddenMenuSide}` : st.burgerListInfo}>
                <ul onClick={closeWindowBurger}>
                    <Link to="/sotrudnichestvo"><li>Партнерам</li></Link>
                    <Link to="/payment"><li>Оплата и доставка</li></Link>
                    <Link to="/order"><li>Как оформить заказ</li></Link>
                    <Link to="/exchange"><li>Обмен и возврат</li></Link>
                </ul>
            </div>
        </Fragment>
    );
}


export default BurgerCategory;