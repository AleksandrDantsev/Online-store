import React, { useState, useEffect, Fragment, useMemo } from "react";
import { useParams } from "react-router-dom";
import st from "./Commodity.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { dateCard, objectLinksKeys } from "../dateCard";
import SliderHomeTop from "../SliderHomeTop/SliderHomeTop";
import ImgLineCommodity from "../ImgLineCommodity/ImgLineCommodity";
import WindowShowImgCommodity from "../WindowShowImgCommodity/WindowShowImgCommodity";
import { dynamicTitlePage } from "../../hooks/dynamicTitlePage";
import LookedProduct from "../LookedProduct/LookedProduct";
import { addProdRecently } from "../../store/recentlyProdLooked";
import CommodityInfo from "../CommodityInfo/CommodityInfo";
import CommodityNoticeAddFav from "../CommodityNoticeAddFav/CommodityNoticeAddFav";
import PageNotFound from "../PageNotFound/PageNotFound";


const Commodity = () => {
    const [counterImg, setCounterImg] = useState(0);
    const [booleanIsFavoriteList, setBooleanIsFavoriteList] = useState(null);
    const [noticeFavoriteList, setNoticeFavoriteList] = useState(false);
    const favoriteList = useSelector(state => state.favoriteProd.allFavAdded);
    const [isActiveShowWindow, setIsActiveShowWindow] = useState(false);
    const dispatch = useDispatch();
    const prodRecentlyShow = useSelector(state => state.recentlyProdLooked.products);
    let {link} = useParams();

    if (!objectLinksKeys[link]) return <PageNotFound />;
    
    const currentElement = useMemo(() => objectLinksKeys[link], [link]);
    const similarProds = useMemo(() => dateCard[currentElement.category][currentElement.type].filter(el => el.id != currentElement.id), [link]);

    dynamicTitlePage(`${currentElement.name} - beauté`);
    
    useEffect(() => {
        window.scrollTo(0, 0);   
        setBooleanIsFavoriteList(Boolean(favoriteList.find(el => el.link == currentElement.link)));
    }, [link])

    useEffect(() => {
        dispatch(addProdRecently(currentElement));
    }, [currentElement])

    const leftImg = () => {
        if (counterImg > 0) setCounterImg(prev => prev - 1);
        else setCounterImg(currentElement.img.length-1);
    }

    const rightImg = () => {
        if (counterImg < currentElement.img.length-1) setCounterImg(prev => prev + 1);
        else setCounterImg(0);
    }

    let counterImgSecongBlock = counterImg+1 >= currentElement.img.length ? 
                                counterImg-(currentElement.img.length-1) : counterImg+1;


    const openWindowShowImg = () => {
        setIsActiveShowWindow(true);
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
    }

    return(
        <Fragment>
            {isActiveShowWindow && <WindowShowImgCommodity  currentElement={currentElement} 
                                                            setCounterImg={setCounterImg} 
                                                            counterImg={counterImg} 
                                                            setIsActiveShowWindow={setIsActiveShowWindow}/>}
                {
                    noticeFavoriteList &&  <CommodityNoticeAddFav booleanIsFavoriteList={booleanIsFavoriteList} />
                }
            <div className={st.commodityBlock}>
                <div className={st.leftColumn}>
                    <ImgLineCommodity currentElement={currentElement} setCounterImg={setCounterImg} flag={true}/>
                    <div className={st.sliderImg}>
                        <div onClick={leftImg} className={st.sliderLeft + ' ' + st.sliderBt}>
                            <svg viewBox="0 0 24 24" width="32px" height="32px" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <div onClick={openWindowShowImg} className={st.sliderPhotosWindow}>
                            <img id={st.oneImgSlider} src={currentElement.img[counterImg]} alt={currentElement.name} />
                            <img src={currentElement.img[counterImgSecongBlock]} alt={currentElement.name} />
                        </div>
                        <div onClick={rightImg} className={st.sliderRight + ' ' + st.sliderBt}>
                            <svg viewBox="0 0 24 24" width="32px" height="32px" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" strokeWidth="0.624" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                    </div>
                </div>
                <CommodityInfo  currentElement={currentElement} 
                                booleanIsFavoriteList={booleanIsFavoriteList}
                                setNoticeFavoriteList={setNoticeFavoriteList}
                                setBooleanIsFavoriteList={setBooleanIsFavoriteList }
                                />
            </div>
            {similarProds.length > 0 && 
            <div className={st.similarProd}>
                <SliderHomeTop dateCard={similarProds} nameCategory={"Похожие товары"} cat={"commodity"}/>
                {prodRecentlyShow.length > 0 && <LookedProduct />}
            </div>
            }     
        </Fragment>
    );
}


export default Commodity;