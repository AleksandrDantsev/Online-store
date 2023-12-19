import React, { Fragment, useMemo } from "react";
import Banner from "../Banner/Banner";
import SliderHomeTop from "../SliderHomeTop/SliderHomeTop";
import { posterDate } from "../PostersData";
import { dateCard } from "../dateCard";
import HomePoster from "../HomePoster/HomePoster";
import CategoryPortfolio from "../CategoryPortfolio/CategoryPortfolio";
import PosterInfoHome from "../PosterInfoHome/PosterInfoHome";

const dateData = {
        second: [
            {img: "./picture/poster3window.webp", title: "КУРТКИ И ПАЛЬТО -30% И БОЛЬШЕ", text: "Утепляемся!", link: "odejda/kurtky"},
            {img: "./picture/poster4window.webp", title: "NATIVE", text: `Новаторские решения канадского бренда
            помогли создать уникальную одежду, которая
            успела обрести поклонников во всем мире.`, link: "/odejda/platya"},
            {img: "./picture/videoBanner2.mp4", title: "", text: "", link: "ewee2", notWorkingPoster: "./picture/posterVideoNotWorking1.webp"},
            {img: "./picture/banner.jpg", text: ["NOT A SECRET", "SALE ОТ -30%", "И БОЛЬШЕ"]}
        ],
    };
    
    
    let dataPosters = dateData.second;
    

const Home = () => {
    const widthScreen = window.innerWidth;
    return(
        <Fragment>
            <Banner img={dataPosters[3].img} text={dataPosters[3].text} textBool={true}/>
            <HomePoster elems={posterDate.firstPoster}/>
            <SliderHomeTop dateCard={dateCard} filterType={["odejda", "kofty"]} nameCategory={"Новая коллекция кофт"}/>
            <HomePoster elems={posterDate.secondPoster}/>
            <SliderHomeTop dateCard={dateCard} filterType={["odejda", "platya"]} nameCategory={"Новые платья"}/>
            <CategoryPortfolio />
            <HomePoster elems={posterDate.fourPoster}/>
            <PosterInfoHome type={"image"} img={dataPosters[0].img} title={dataPosters[0].title} text={dataPosters[0].text} link={dataPosters[0].link}/>
            <SliderHomeTop dateCard={dateCard} filterType={["odejda", "bluzki"]} nameCategory={"Хит продаж в категории: \"Блузки\""}/>
            <HomePoster elems={posterDate.threePoster}/>
            {widthScreen > 600 && <PosterInfoHome type={"video"} poster={dataPosters[2]?.notWorkingPoster} img={dataPosters[2]?.img} title={dataPosters[2].link.title} text={dataPosters[2].text} link={dataPosters[2].link}/>}
            <SliderHomeTop dateCard={dateCard} filterType={["odejda", "phutbolki"]} nameCategory={"Футболки"}/>
            <HomePoster elems={posterDate.sixPoster}/>
            <PosterInfoHome type={"image"} img={dataPosters[1].img} title={dataPosters[1].title} text={dataPosters[1].text} link={dataPosters[1].link}/>
            <HomePoster elems={posterDate.fivePoster}/>
            <SliderHomeTop dateCard={dateCard} filterType={["aksessuary", "braslet"]} nameCategory={"Браслеты"}/>
        </Fragment>
    );
}

export default Home;