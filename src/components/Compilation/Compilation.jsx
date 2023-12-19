import React, { useMemo, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import st from "./Compilation.module.scss";
import LookedProductCard from "../LookedProductCard/LookedProductCard";
import { pureArray } from "../dateCard";
import outfitsData from "../outfits";
import LocationLinksLine from "../LocationLinksLine/LocationLinksLine";

const Compilation = () => {
    const {id} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const arrayDrawOutfits = useMemo(() => {
        try {
            let array = {
                img: '',
                outfitProd: [],
                title: '',
            };
            let object = outfitsData[id].products;
            array.title = outfitsData[id].title;
            array.img = outfitsData[id].image;
            for (let i = 0; i < object.length; i++) {
                array.outfitProd.push(pureArray[object[i]]);
            }
            return array;
        }
        catch {
            return [];
        }
    }, [id])

    return(
        <Fragment>
        <LocationLinksLine />
        {
         Object.keys(arrayDrawOutfits).length > 0 ?
        <div className={st.outFit}>
            <div className={st.image}>
                <img src={arrayDrawOutfits.img} alt="outfit" />
            </div>
            <div className={st.outfitCompilationCards}>
                <div className={st.titleoutfitCompilation}>
                    <h2>{arrayDrawOutfits.title}</h2>
                </div>
                <div className={st.outfitCompilationCardsConteiner}>
                    {
                        arrayDrawOutfits.outfitProd.map(el => (
                            <LookedProductCard key={el.name} 
                                width={"calc(100% / 2 - 3%)"} 
                                height={"auto"}
                                img={el.img} 
                                name={el.name} 
                                cost={el.cost} 
                                link={el.link}
                                type={"outfit"} />
                        ))
                    }
                </div>
            </div>
        </div> : 
        <div className={st.notFound}>
            <span>К сожалению, возникла ошибка при загрузке страницы. 
                <Link to="/"><span className={st.mainPageLink}>На Главную</span></Link>
            </span>
        </div>
        }
        </Fragment>
    );
}


export default Compilation;