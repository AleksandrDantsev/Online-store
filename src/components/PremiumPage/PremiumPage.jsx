import React, { Fragment, useMemo, memo, useEffect } from "react";
import st from "./PremiumPage.module.scss";
import HomePoster from "../HomePoster/HomePoster";
import SliderHomeTop from "../SliderHomeTop/SliderHomeTop";
import Banner from "../Banner/Banner";
import CategoryPortfolioCard from "../CategoryPortfolioCard/CategoryPortfolioCard";
import { posterDate} from "../PostersData";
import { pureArray } from "../dateCard";

const PremiumPage = memo(() => {
    const colorSort = useMemo(() => pureArray.filter(el => el.colorText == "Чёрный" 
                                                        && el.category == "odejda"
                                                        && el.type != "underwear"
                                                        ), [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <Fragment>
            <Banner img={"./picture/bannerPremium.webp"} text={"AW'23"} textBool={false}/>
            <HomePoster elems={posterDate.sevenPoster}/>
            <div className={st.backgroundSh}></div>
            <SliderHomeTop dateCard={colorSort}/>
            <div className={st.cardsPremiumCategory}>
                <CategoryPortfolioCard 
                            title={"ПАРА НА НОВЫЙ СЕЗОН"} 
                            image={"./picture/premiumCat1.webp"} 
                            content={"лоферы, мокасины, ботинки, сапожки"} 
                            position={"premium"}
                            link={'/obuv'}/>
                <CategoryPortfolioCard 
                            title={"СУМОЧКИ"} 
                            image={"./picture/premiumCat2.webp"} 
                            content={"Новинки от Patrizia Pepe"} 
                            position={"premium"}
                            link={'/aksessuary/sumochki'}/>
            </div>
        </Fragment>
    );
})


export default PremiumPage;