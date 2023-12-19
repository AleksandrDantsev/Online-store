import React, {useState, useMemo, memo, useEffect, useRef} from "react";
import st from "./FilterProd.module.scss";
import ArrowBottomRotate from "../../UI/ArrowBottomRotate";


const FilterProd = memo(({filtredListProd, setFilterMainArray, setPagePagination}) => {
    const [isActiveFilter, setIsActiveFilter] = useState({cost: false, color: false, sort: false});
    const [filterParametrs, setFilterParamentrs] = useState({costRangeOne: 0, costRangeTwo: '', color: [], sortFilter: ''});
    const [isActiveBt, setIsActiveBt] = useState(false);
    const textColor = useMemo(() => (Array.from(new Set(filtredListProd.map(el => el.colorText)))), [filtredListProd]);
    const input = useRef(null);

    const openDropFilterHandler = (e) => {
        e.stopPropagation();
        if (e.target.id in isActiveFilter) {
            let idTarget = e.target.id;
            let objFalse = {};
                for (let i in isActiveFilter) {
                    objFalse[i] = false;
                }
                setIsActiveFilter({...objFalse, [idTarget]: !isActiveFilter[idTarget]});
        }
    }
    useEffect(() => {
        function closeFiltersOutside(e) {
            if (!(e.target.id in isActiveFilter)) {
                setIsActiveFilter({cost: false, color: false, sort: false});
            }
        }
                document.addEventListener('click', closeFiltersOutside);
            return () => {
                document.removeEventListener('click', closeFiltersOutside);
            }
        
    }, [])

    const choiseSortVar = (e) => {
        let allVarSorted = e.target.parentElement.children;
        for (let i = 0; i < allVarSorted.length; i++) {
            if (allVarSorted[i].id) {
                allVarSorted[i].className = '';
            }
        }
        if (e.target.tagName === "SPAN" && e.target.id) {
            setFilterParamentrs({...filterParametrs, sortFilter: e.target.id})
            e.target.className = `${st.pickVarSortColor}`;
        }   
        setIsActiveBt(true);
    }

    const addColorCahngeInput = (el, checked) => {
        setIsActiveBt(true);
        let colorSetSingle = new Set([...filterParametrs.color, el]);
        if (!checked) {
            colorSetSingle.delete(el);
        }
        colorSetSingle = Array.from(colorSetSingle);
        setFilterParamentrs({...filterParametrs, color: colorSetSingle});
    }

    const costChangeInputs = (e) => {
        if (e.target.tagName === "INPUT") {
            if (e.target.id === "costInputOne") {
                maxLengthNumberInput(e.target, 4);
                setFilterParamentrs({...filterParametrs, costRangeOne: e.target.value});
            }
            else if (e.target.id === "costInputTwo") {
                let res = e.target.value;
                maxLengthNumberInput(e.target, 5);
                if (+res <= +filterParametrs.costRangeOne) res = +filterParametrs.costRangeOne + 500;
                setFilterParamentrs({...filterParametrs, costRangeTwo: +res});
            }
            setIsActiveBt(true);
        }
    }
    
    const maxLengthNumberInput = (el, max) => {
        el.value > max && (el.value = el.value.slice(0, max));
    }

    const filtredAll = () => {
        let array = [...filtredListProd];
        if (filterParametrs.costRangeTwo || filterParametrs.costRangeOne) {
            if (!filterParametrs.costRangeOne) setFilterParamentrs({...filterParametrs, costRangeOne: 0});
            if (!filterParametrs.costRangeTwo) setFilterParamentrs({...filterParametrs, costRangeTwo: 80000});
            array = array.filter(el => (el.cost >= +filterParametrs.costRangeOne && +el.cost <= +filterParametrs.costRangeTwo))
        }
        if (filterParametrs.color.length > 0) {
            array = array.filter(el => filterParametrs.color.includes(el.colorText));
        }
        if (filterParametrs.sortFilter) {
            if (filterParametrs.sortFilter == "down") {
                array = array.sort((a, b) => +b.cost - +a.cost);
            }
            else {
                array = array.sort((a, b) => +a.cost - +b.cost);
            }
        }
        return array;
    }
    const changeQuery = () => {
        setFilterMainArray(filtredAll());
        try {
            setPagePagination(1);
        }
        catch {
            console.log('');
        }
        finally {
            setIsActiveFilter({cost: false, color: false, sort: false});
            setIsActiveBt(false);
        }
    }
    
    return(
        <div className={st.filter}>
                        <form onClick={openDropFilterHandler}>
                            <div className={st.costRange}>
                                <label className={st.titleCost} htmlFor="costInputOne" id="cost">Цена{<ArrowBottomRotate boolIsRotate={isActiveFilter.cost} />}</label>
                                <div onChange={costChangeInputs} className={isActiveFilter.cost ? st.inputsCost + ' ' + st.activeDrop : st.inputsCost}>
                                    <div className={st.inputs}>
                                        <input type="number" id="costInputOne" min="200" max="49000"/>
                                        <span className={st.dash}>-</span>
                                        <input type="number" id="costInputTwo" min="300" max="50000"/>
                                    </div>
                                    <div className={st.costTitle}>Цена в руб.</div>
                                </div>
                            </div>
                            <div className={st.colors}>
                                <span className={st.colorsTitle} id="color">Цвет{<ArrowBottomRotate boolIsRotate={isActiveFilter.color}/>}</span>
                                <div className={isActiveFilter.color ? st.dropColor + ' ' + st.activeDrop : st.dropColor}>
                                    {
                                        textColor.map((el, i) => (
                                            <div key={el} className={st.checkboxColor}>
                                                <input ref={input} onChange={(e) => addColorCahngeInput(el, e.target.checked)} type="checkbox" id={el+"id"} />
                                                <span className={st.checkBoxCustom}></span>
                                                <label htmlFor={el+"id"}>{el}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={st.sortCost}>
                                {
                                    Object.values(filterParametrs).some(el => el != false) && isActiveBt ? <span onClick={changeQuery} className={st.btAccept}>Принять изменения</span> : ''
                                }
                                <span className={st.sortTitle} id="sort">Сортировать стоимость по:{filterParametrs.sortFilter == "up" && " возрастанию" || filterParametrs.sortFilter == "down" && " убыванию"}</span>
                                <div onClick={choiseSortVar} className={isActiveFilter.sort ? st.dropSortCost + ' ' + st.activeDrop : st.dropSortCost}>
                                    <span id="up">По возрастанию</span>
                                    <span id="down">По убыванию</span>
                                </div>
                            </div>
                        </form>
                </div>
    );
})


export default FilterProd;