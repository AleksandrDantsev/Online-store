import React, { useEffect, useMemo, useState, lazy, useCallback, Fragment } from "react";
import st from "./ListProducts.module.scss";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { dateCard, categoryFlat, categoryTitle } from "../dateCard";
import { dynamicTitlePage } from "../../hooks/dynamicTitlePage";
import FilterProd from "../FilterProd/FilterProd";
const ListProductsLoadedCards = lazy(() => import("../ListProductsLoadedCards/ListProductsLoadedCards.jsx"));
import LocationLinksLine from "../LocationLinksLine/LocationLinksLine";

const ListProducts = () => {
    const {name} = useParams();
    const location = useLocation();
    const [filterMainArray, setFilterMainArray] = useState([]);
    const [pagePagination, setPagePagination] = useState(1);
    const [isShowNavigationSideBar, setIsShowNavigationSideBar] = useState(false);
    dynamicTitlePage(`${categoryTitle[name] ? categoryTitle[name] + ' - beauté' : "Купить женскую одежду - beauté"}`);
    const url = location.pathname.split('/');

    const filtredListProd = useMemo(() => (name ? dateCard?.[url.at(-2)][name] : categoryFlat[url.at(-1)]), [url.at(-1)]);

    useEffect(() => {
        window.innerWidth <= 790 && setIsShowNavigationSideBar(true);
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0); 
        setFilterMainArray(filtredListProd);
        setPagePagination(1);
    }, [url.at(-1)])
    

    const handlerSetPagePagination = useCallback((e) => {
        if (e.target.tagName === "LI") {
            setPagePagination(+e.target.textContent);
        }
    }, [])

    const ListNavigationCommodity = useMemo(() => {
        return (
            Object.keys(dateCard).map(item => (
                <ul key={item}>
                    <NavLink to={`/${item}`}><h3>{categoryTitle[item]}</h3></NavLink>
                        {
                        Object.keys(dateCard[item]).map((el) => 
                            <NavLink key={item + el} to={`/${item + '/' + el}`}>
                                <li key={el + item}>{categoryTitle[el]}</li>
                            </NavLink>)
                        }
                </ul>
            ))
        );
    }, [])

    const toggleShowNavBar = () => {
        setIsShowNavigationSideBar(!isShowNavigationSideBar);
    }

    return(
        <Fragment>
            <LocationLinksLine isCahngeLink={name || url.at(-1)}/>
            <div className={st.listProducts}>
                        <aside className={isShowNavigationSideBar ? st.sidePanelNav + ' ' + st.closeSideBar : st.sidePanelNav}>
                                {ListNavigationCommodity} 
                        </aside>
                        <div onClick={toggleShowNavBar} className={isShowNavigationSideBar ? st.buttonShowNavigationBar : st.buttonShowNavigationBar + ' ' + st.buttonShowNavBarRotate}>
                        <svg height="30px" weight="30px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#404040"></path> </g></svg>
                        </div>
                <div className={st.mainProductsList}>
                    <h2 className={st.quantity}>{categoryTitle?.[name] || categoryTitle?.[url.at(-1)]}</h2>
                    <div className={st.quantity}>Найдено товаров: {filterMainArray.length}</div>
                        <FilterProd filtredListProd={filtredListProd} setFilterMainArray={setFilterMainArray} setPagePagination={setPagePagination}/>
                        <ListProductsLoadedCards filterMainArray={filterMainArray} 
                                                pagePagination={pagePagination} 
                                                handlerSetPagePagination={handlerSetPagePagination} />
                </div>
            </div>
        </Fragment>
    );
}


export default ListProducts;