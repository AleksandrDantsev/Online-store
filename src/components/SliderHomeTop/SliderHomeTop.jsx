import React, { useState, useRef, useMemo, memo } from "react";
import st from "./SliderHomeTop.module.scss";
import { Link } from "react-router-dom";
import CardProd from "../CardProd/CardProd";


const SliderHomeTop = memo(({dateCard, filterType, nameCategory, cat}) => {
    const [positionSlider, setPositionSlider] = useState(0);
    const lineSlider = useRef();

    let dateCardFilter = useMemo(() => filterType ? dateCard[filterType[0]][filterType[1]] : dateCard, [dateCard]); 
    
    let quantityCard = filterType ? dateCardFilter.length : (cat == 'commodity' ? dateCardFilter.length-1 : 15);

    const leftSwingBt = () => {
        positionSlider + lineSlider.current.offsetWidth >= 0 ? setPositionSlider(0) : setPositionSlider(prev => prev + lineSlider.current.offsetWidth);
    }

    const rightSwingBt = () => {
        let widthCard = lineSlider.current.offsetWidth;
        setPositionSlider(prev => prev - widthCard);
        if (positionSlider <= -(quantityCard * widthCard) + window.innerWidth) {
            setPositionSlider(prev => prev = -(quantityCard * widthCard) + window.innerWidth - widthCard);
        }
    }

    const listSliderComp = useMemo(() => {

        return (
            (filterType ? dateCardFilter : dateCard).map((el, index) => {
                if (index <= 15) {
                    return (<div ref={lineSlider} className={st.wrapperCard} key={el.id}><CardProd  id={el.id} 
                                      flag={"home"} 
                                      position={"slider"} 
                                      img={el.img} 
                                      color={el.color} 
                                      name={el.name} 
                                      cost={el.cost} 
                                      size={el.size} 
                                      link={el.link} 
                                      description={el.description}/></div>)
                }
                else return;
            })
        )
    }, [])

    return(
            <div className={st.sliderBlock}>
                <div className={st.titleSliderCategory}>
                    <h3>{nameCategory}</h3>
                </div>
                <div className={st.sliderTop}>
                    <div onClick={leftSwingBt} style={{visibility: positionSlider >= 0 ? "hidden" : 'visible'}} className={st.sliderLeft + ' ' + st.sliderBt}>
                        <svg viewBox="0 0 24 24" width="32px" height="32px" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                    <div className={st.sliderHidden}>
                        <div className={st.sliderVisible} style={{transform: `translate3d(${positionSlider}px, 0, 0)`}}>
                            {listSliderComp}
                            {
                            filterType ? 
                                <div className={st.linkedImage + ' ' + st.wrapperCard}>
                                    <Link to={`/${filterType[0]}/` + filterType[1]}>
                                        <img src={dateCardFilter[0].img[0]} alt={filterType} />
                                        <div className={st.lookBt}><span>Посмотреть</span></div>
                                    </Link>
                                </div> : ''
                            }
                        </div>
                    </div>
                    <div onClick={rightSwingBt} className={st.sliderRight + ' ' + st.sliderBt}>
                        <svg viewBox="0 0 24 24" width="32px" height="32px" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                </div>
            </div>
    );
})


export default SliderHomeTop;