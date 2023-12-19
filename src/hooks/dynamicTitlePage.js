import React, {useRef, useEffect} from "react";

function dynamicTitlePage(title) {
    const documentTitleDefault = document.getElementById("title");

    useEffect(() => {
        documentTitleDefault.innerHTML = title;
        return () => {
            documentTitleDefault.innerHTML = "beauté - Интернет-магазин женской одежды";
        }
    },[title])
}

export {dynamicTitlePage};

