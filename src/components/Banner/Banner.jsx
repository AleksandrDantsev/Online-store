import React, {memo} from "react";
import st from "./Banner.module.scss";
import { onloadedImageAnimation } from "../../hooks/onloadedImageAnimation";


const Banner = memo(({img, textBool, text}) => {
    const [isLoadedImg, Dummy] = onloadedImageAnimation(false, img);
    return(
        <div className={st.banner}>
            {
                isLoadedImg ?
                <img src={img} alt="banner" /> : Dummy
            }
            {
            textBool && 
                <div className={st.bannetText}>
                    <div className={st.wrapper}>
                        {
                        typeof(text) === "object" ?
                        text.map(el => <p key={el}>{el}</p>)
                        : text
                        }
                    </div>
                </div>
            }
        </div>
    );
})

export default Banner;