import React, {useEffect, useState } from "react";
import st from "./onloadedImageAnimation.module.scss";

const onloadedImageAnimation = (init, elems) => {
    const [isLoadedImg, setIsLoadeImg] = useState(init);

    useEffect(() => {
        let imageLoaded = () => {
            let sr = document.createElement('img');
            sr.src = elems;
            sr.onload = function() {
                setIsLoadeImg(true);
            }
    }
    setTimeout(imageLoaded, 400);
    return () => {
        imageLoaded = null;
    }
    }, [])

    const dummy = <div className={st.dummy}></div>;

    return [isLoadedImg, dummy];
}

export { onloadedImageAnimation };