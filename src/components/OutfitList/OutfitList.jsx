import React, { Suspense, lazy } from "react";
import st from "./OutfitList.module.scss";
import outfitsData from "../outfits";
const OutfitListCard = lazy(() => import("../OutfitListCard/OutfitListCard"));
import LasyLoadedCard from "../../UI/LasyLoadedCard/LasyLoadedCard";
import LocationLinksLine from "../LocationLinksLine/LocationLinksLine";
import { Fragment } from "react";

const OutfitList = () => {
    return(
        <Fragment>
        <LocationLinksLine />
        <div className={st.listOutfits}>
            <div className={st.titleOutfit}>
                <h1>Аутфиты от beauté </h1>
            </div>
            <div className={st.listProd}>
                {
                    Object.keys(outfitsData).map((el, i) => <Suspense fallback={<LasyLoadedCard />} key={outfitsData[el]?.title + i + i}>
                                                            <OutfitListCard key={outfitsData[el]?.title + i} 
                                                                            elems={outfitsData[el]} 
                                                                            link={el}
                                                                             />
                                                            </Suspense>)
                }
            </div>
        </div>
        </Fragment>
    );
}


export default OutfitList;