import React from "react";
import st from "./SuccessAddedFavorWindow.module.scss";
import { Link } from "react-router-dom";

const SuccessAddedFavorWindow = () => {
    return(
        <div className={st.windowPopUpSuccess}>
            <div className={st.insideWindow}>
                <Link to="/favorite"><p>Товар добавлен в <span>"Избранное"</span></p></Link> 
            </div>
        </div>
    );
}


export default SuccessAddedFavorWindow;