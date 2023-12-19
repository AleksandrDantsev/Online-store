import React, { memo } from "react";
import st from "./ButtonUpPage.module.scss";


const ButtonUpPage = memo(() => {

    const pageMoveUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return(
        <div onClick={pageMoveUp} className={st.btUp}>
            <svg fill="#7f7f7f" height="25px" width="25px" version="1.1" viewBox="0 0 330 330" xmlSpace="preserve" stroke="#7f7f7f" strokeWidth="0.0033"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
        </div>
    );
})


export default ButtonUpPage;