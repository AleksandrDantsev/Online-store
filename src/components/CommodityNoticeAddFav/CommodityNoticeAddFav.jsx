import React, { Fragment } from "react";
import st from "./CommodityNoticeAddFav.module.scss";


const CommodityNoticeAddFav = ({booleanIsFavoriteList}) => {
    return(
        <Fragment>
            {
                booleanIsFavoriteList ?
                <div className={st.noticeFavoriteAction}>
                    <span>Товар добавлен в избранное</span>
                    <span onClick={() => setNoticeFavoriteList(false)} className={st.cross}>x</span>
                </div> : 
                <div className={st.noticeFavoriteAction + ' ' + st.deletedFav}>
                    <span>Товар удален из избранного</span>
                    <span onClick={() => setNoticeFavoriteList(false)} className={st.cross}>x</span>
                </div>
            }
        </Fragment>
    );
}


export default CommodityNoticeAddFav;