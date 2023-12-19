import React, { lazy, Suspense, Fragment, useMemo, memo } from "react";
import st from "./ListProductsLoadedCards.module.scss";
const CardProd = lazy(() => import("../CardProd/CardProd"));
import LasyLoadedCard from "../../UI/LasyLoadedCard/LasyLoadedCard";


const ListProductsLoadedCards = memo(({filterMainArray, pagePagination, handlerSetPagePagination}) => {
    let quantityShowProd = 20;
    window.scrollTo(0, 0); 

    const lengthPaginationButton = useMemo(() => {
        const count = Math.ceil(filterMainArray.length / quantityShowProd);
        const arrayCount = Array.from({length: count}, (el, i) => i + 1);
        return arrayCount;
    }, [filterMainArray, pagePagination]);


    return(
        <Fragment>
            {
                filterMainArray.length ?
                <Fragment>
                    <div className={st.cards}>
                                {   filterMainArray ?
                                    filterMainArray.slice((pagePagination * quantityShowProd) - quantityShowProd, pagePagination * quantityShowProd)
                                                    .map(el => <Suspense key={el.id + el.name} fallback={<LasyLoadedCard />}>
                                                                        <CardProd id={el.id} 
                                                                        flag={"home"}
                                                                        position={"list"} 
                                                                        key={el.id} 
                                                                        img={el.img} 
                                                                        color={el.color} 
                                                                        name={el.name} 
                                                                        cost={el.cost} 
                                                                        size={el.size} 
                                                                        link={el.link} 
                                                                        description={el.description}/>
                                                            </Suspense>) : 
                                    <div className={st.notFoundQuery}>
                                        <span>Извините, по вашему запросу ничего не найдено</span> 
                                    </div>
                                }
                    </div>
                    <div className={st.pagination}>
                            <ul onClick={handlerSetPagePagination}>
                                {
                                    lengthPaginationButton.map(el => <li className={pagePagination == el ? st.active : ''} key={el}>{el}</li>)
                                }
                            </ul>
                    </div>
                </Fragment>
                :
                <div className={st.listNotFound}>
                    <span>К сожалению, товары, с заданными характеристиками, не найдены</span>
                </div>
            }
        </Fragment>
    );
})


export default ListProductsLoadedCards;