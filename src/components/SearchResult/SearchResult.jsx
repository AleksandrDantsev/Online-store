import React, {Fragment, useEffect, useState} from "react";
import st from "./SearchResult.module.scss";
import CardProd from "../CardProd/CardProd";
import { useSelector } from "react-redux/es/hooks/useSelector";
import FilterProd from "../FilterProd/FilterProd";

const SearchResult = () => {
    const resultListStore = useSelector(state => state.resultSearch.listProducts);
    const [filterMainArray, setFilterMainArray] = useState([]);

    useEffect(() => {
        setFilterMainArray(resultListStore[0]);
        window.scrollTo(0, 100);
    }, [resultListStore]);

    return(
        <div className={st.wrapperResultList}>
            <h1 className={st.titleSeatch}>Результат поиска</h1>
            {
                resultListStore[0].length && filterMainArray.length ?
                <Fragment>
                    <p className={st.quantityProd}>Найдено товаров:<span>{filterMainArray.length}</span></p>
                    <FilterProd filtredListProd={resultListStore[0]} setFilterMainArray={setFilterMainArray}/>
                    <div className={st.listResultProducts}>
                        {filterMainArray ? filterMainArray.map(el => <CardProd 
                                                                                id={el.id} 
                                                                                flag={"home"} 
                                                                                position={"search"}
                                                                                key={el.id} 
                                                                                img={el.img} 
                                                                                color={el.color} 
                                                                                name={el.name} 
                                                                                cost={el.cost} 
                                                                                size={el.size} 
                                                                                link={el.link} 
                                                                                description={el.description}
                         />) : 'Ничего не найдено'}
                    </div>
                </Fragment>
                : <div className={st.notFound}><span>Ничего не найдено :-(</span></div>
            }
        </div>
    );
}


export default SearchResult;