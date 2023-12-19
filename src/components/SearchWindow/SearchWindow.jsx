import React, { Fragment, useEffect, useState, useMemo, memo } from "react";
import st from "./SearchWindow.module.scss";
import { Link, useNavigate } from "react-router-dom";
import SearchCardWindow from "../SearchCardWindow/SearchCardWindow";
import { pureArray, categoryTitle } from "../dateCard";
import { useDispatch } from "react-redux";
import { addInListProductsSearchResult } from "../../store/resultSearch";


const SearchWindow = memo(({query, flagIsOpenSearchWindow, setIsOpenSearchWindow, setQuery, refInput}) => {
    const [stringProductSearch, setStringProductsSearch] = useState([]);
    const [recentlyQuery, setRecentlyQuery] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let reg = new RegExp(`${query}`, 'gm');

    useEffect(() => {
        (function concatStringForSearch() {
            let array = [];
            for (let i = 0; i < pureArray.length; i++) {
                let res = categoryTitle[pureArray[i].type].toLowerCase() + ' ' + pureArray[i].name.toLowerCase() + ' ' + pureArray[i].colorText.toLowerCase();
                array.push(res);
            }
            setStringProductsSearch(array);
        })()
    }, []);

    const setQuerySearchRecenly = (e) => {
        if (e.target.tagName === "LI") setQuery(e.target.textContent);
    }

    const handlerCloseCrossWindow = () => {
        setIsOpenSearchWindow(false);
        setQuery('');
    }
    
    const resultSearch = useMemo(() => {
        const arrayIndexProd = [];
        for (let k = 0; k < stringProductSearch.length; k++) {
            if(reg.test(stringProductSearch[k])) {
                arrayIndexProd.push(pureArray[k]);
            }
        }    
        return [arrayIndexProd.slice(0, 6), arrayIndexProd];
    }, [query])
    

    const goOnPageResult = () => {
        dispatch(addInListProductsSearchResult(resultSearch[1]));
        setIsOpenSearchWindow(false);
        setRecentlyQuery([...recentlyQuery, refInput.current.value]);
        localStorage.setItem('recentlyQuery', JSON.stringify([...recentlyQuery, refInput.current.value]));
        if (JSON.parse(localStorage.getItem('recentlyQuery')).length > 10) {
            localStorage.setItem('recentlyQuery', []);
            setRecentlyQuery([refInput.current.value]);
        }
        navigate("search");
        setQuery('');
    }

    return(
        <Fragment>
            <div onClick={() => {setIsOpenSearchWindow(false); setQuery('')}} className={st.bacgroundFilter + (flagIsOpenSearchWindow ? '' : st.closeWindowSearch)}></div>
            {flagIsOpenSearchWindow ? 
            <div className={st.windowSearch}>  
                    <div className={st.centerBlocks}>  
                        <div className={st.resultCommudityBlock}>
                        <div className={st.titleSearch}>
                            <h3>Результат поиска</h3>
                            <span onClick={handlerCloseCrossWindow} className={st.crossWindow}>
                            <svg fill="#696969" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 490 490" stroke="#696969"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
                            </span>
                        </div>
                            {
                                resultSearch[0].length ? 
                                <div onClick={() => setIsOpenSearchWindow(false)} className={st.resultCommodity}>
                                {resultSearch[0].map((el, i) => <SearchCardWindow key={el.name + i} filterArray={el} />)}
                                </div> 
                                : <div className={st.notFound}><span>Ничего не найдено</span></div>             
                            }        
                            <div className={st.moreCommodity}>
                            {query && resultSearch[0].length ? <Link to="search" onClick={goOnPageResult}>Посмотреть больше</Link> : ''}
                            </div>
                        </div>
                        <div className={st.recentlyQuery}>
                            <h3>Недавние запросы</h3>
                            <ul className={st.listResentlySearch} onClick={setQuerySearchRecenly}>
                                {
                                   localStorage.getItem("recentlyQuery") ? JSON.parse(localStorage.getItem("recentlyQuery")).map((el, i) => <li key={el + i}>{el}</li>) : ''
                                }
                            </ul>
                        </div>
                    </div>
            </div> :
            '' 
    }
        </Fragment>
    );
})


export default SearchWindow;