import React from "react";
import st from "./AnimationLoadedPage.module.scss";


const AnimationLoadedPage = () => {
    return(
        <div className={st.aniamtionLoad}>
            <div className={st.animEffect}>
                <div className={st.title}>beauté</div>
                <div className={st.circle}></div>
            </div>
        </div>
    );
}


export default AnimationLoadedPage;