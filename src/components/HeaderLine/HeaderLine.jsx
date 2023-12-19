import React from "react";
import stl from "./HeaderLine.module.scss"

const HeaderLine = ({closeButton}) => {
    return(
        <div className={stl.lineTopHeader}>
            <div className={stl.lineTopHeaderText}>
                <p>
                    Парфюм 50 мл в подарок при покупке на сумму свыше 5000р
                </p>
            </div>
            <div className={stl.lineTopHeaderClose} onClick={() => {closeButton(false)}}>x</div>
        </div>
    );
}


export default HeaderLine;