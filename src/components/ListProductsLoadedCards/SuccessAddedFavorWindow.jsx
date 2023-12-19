import React, { lazy, Suspense} from "react";
import st from "./ListProductsLoadedCards.module.scss";
import LasyLoadedCard from "../../UI/LasyLoadedCard/LasyLoadedCard";
const CardProd = lazy(() => import("../CardProd/CardProd"));

const ListProductsLoadedCards = ({filterMainArray}) => {
    return(
        <div className={st.cards}>
                    {   filterMainArray.length ?
                        filterMainArray.map(el => <Suspense key={el.id + el.name} fallback={<LasyLoadedCard />}>
                                                            <CardProd id={el.id} 
                                                            flag={"home"} 
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
    );
}


export default ListProductsLoadedCards;