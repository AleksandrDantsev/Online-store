import React, {useState, Fragment, memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import st from "./FavoriteFilter.module.scss";
import { growerSort, lowerSort } from "../../store/favoriteProd";
import { closePopUpOutsidElement } from "../../hooks/closePopUpOutsidElement";


const FavoriteFilter = memo(() => {
    const dispatch = useDispatch();
    const favElems = useSelector(state => state.favoriteProd.allFavAdded);
    const [textInFilter, setTextInFilter] = useState('');
    const [isActiveWindow, refOutside] = closePopUpOutsidElement(false);
    const [isActive, setIsActive] = useState(false);

    const setFilterUp = () => {
        dispatch(growerSort());
        setTextInFilter("возрастанию цены");
    }
    
    const setFilterDown = () => {
        dispatch(lowerSort());
        setTextInFilter("убыванию цены");
    }

    return(
        <Fragment>
        {
            favElems.length > 0 ? 
                <div onClick={() => setIsActive(!isActive)} ref={refOutside} className={st.favFilter}>
                    <span className={st.titleFilter}>Отсортировать по<span className={st.textFilter}> : {textInFilter}</span></span>
                    {
                        (isActiveWindow && isActive) && 
                        <div className={st.dropListFilter}>
                            <span onClick={setFilterUp}>Возрастанию цены</span>
                            <span onClick={setFilterDown}>Убыванию цены</span>
                        </div>
                    }
                </div>
            :
            ''
        }
        </Fragment>
    );
})


export default FavoriteFilter;