import React from "react";
import st from "./PageNotFound.module.scss";


const PageNotFound = () => {
    return(
        <div className={st.notFound}>
            <span>При переходе на страницу произошла ошибка {"("}</span>
        </div>
    );
}


export default PageNotFound;