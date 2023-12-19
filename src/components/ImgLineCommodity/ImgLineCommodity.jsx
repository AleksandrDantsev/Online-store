import React, {memo} from "react";
import st from "./ImgLineCommodity.module.scss";

const ImgLineCommodity = memo(({currentElement, setCounterImg, flag}) => {
    
    const showCardSideImg = (e) => {
        let index = currentElement.img.indexOf(e.target.src);
        setCounterImg(index);
    }
    return(
        <div className={flag ? st.imgLine + ' ' + st.hiddenImgLine : st.imgLine}>
            {currentElement.img.map(el => 
            <div key={el} className={st.imgOnLine}>
                <img onClick={showCardSideImg} src={el} alt={currentElement.name} />
            </div>
            )}
        </div>
    );
})


export default ImgLineCommodity;