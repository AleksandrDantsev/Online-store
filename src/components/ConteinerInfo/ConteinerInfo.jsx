import React from "react";
import st from "./ConteinerInfo.module.scss";


const ConteinerInfo = ({children}) => {
    return(
        <div className={st.conteinerInfo}>
            <div className={st.wrapper}>
                {children}
            </div>
        </div>
    );
}


export default ConteinerInfo;