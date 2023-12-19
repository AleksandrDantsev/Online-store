import React, { useEffect, useState, useRef} from "react";
import st from "./WindowShowImgCommodity.module.scss";
import ImgLineCommodity from "../ImgLineCommodity/ImgLineCommodity";

const WindowShowImgCommodity = ({currentElement, setCounterImg, counterImg, setIsActiveShowWindow}) => {
    const [positionY, setPositionY] = useState(0);
    const ref = useRef(null);
    
    const closeWindow = () => {
        setIsActiveShowWindow(false);
          document.body.style.overflow = "unset";
    }

    const closeOutsideImg = (e) => {
        if (e.target.tagName != "IMG") {
            setIsActiveShowWindow(false);
            document.body.style.overflow = "unset";
        } 
    }

    const wheelSlideimg = (e) => {
        if (e.deltaY < 0) {
            if (counterImg > 0) setCounterImg(prev => prev - 1);
            else setCounterImg(currentElement.img.length-1);
        }
        else {
            if (counterImg < currentElement.img.length-1) setCounterImg(prev => prev + 1);
            else setCounterImg(0);
        }
    }

    const zoomImage = (e) => {
        if (positionY) setPositionY(0);
        else {
            if (e.clientY <= e.target.offsetHeight / 3.5) setPositionY(e.clientY);
            else setPositionY(-e.clientY / 3);
        }
    }

    const switchPhotoMobile = (e) => {
        if (e.clientX > e.target / 2) {
            if (counterImg > 0) setCounterImg(prev => prev - 1);
            else setCounterImg(currentElement.img.length-1);
        }
        else {
            if (counterImg < currentElement.img.length-1) setCounterImg(prev => prev + 1);
            else setCounterImg(0);
        }
    }
    
    useEffect(() => {
        ref.current.style.setProperty("--positionYVal", `${positionY}px`);
    }, [positionY]);

    useEffect(() => {
        setPositionY(0);
        const keysSlide = (e) => {
            if (e.keyCode == 37) {
                if (counterImg > 0) setCounterImg(prev => prev - 1);
                else setCounterImg(currentElement.img.length-1);
            }
            if (e.keyCode == 39) {
                if (counterImg < currentElement.img.length-1) setCounterImg(prev => prev + 1);
                else setCounterImg(0);
            }
        }
        document.addEventListener("keydown", keysSlide);
        return () => {
            document.removeEventListener("keydown", keysSlide) ;
        }
    }, [counterImg]);

    const navigationBtImage = (e) => {
        if (positionY == 0) {
            setPositionY(1);
            return;
        }
        if (e.target.id === "btUp") {
            setPositionY(prev => prev + 70);
            if (positionY >= window.innerHeight / 5) setPositionY(window.innerHeight / 5);
        }
        else if (e.target.id === "btDown") {
            setPositionY(prev => prev - 70);
            if (positionY <= -window.innerHeight/5) setPositionY(-window.innerHeight/5);
        }
    }

    return(
        <div className={st.windowShowImg}>
            <div className={st.topLine}>
                <div className={st.wrapper}>
                    <span className={st.count}>{counterImg + 1} из {currentElement.img.length}</span>
                    <span className={st.closeShower} onClick={closeWindow}>X</span>
                </div>
            </div>
            <div onClick={closeOutsideImg} className={st.mainShow}>
                <div className={st.blockLineLeftImg}>
                    <ImgLineCommodity currentElement={currentElement} setCounterImg={setCounterImg}/>
                </div>
                <div onWheel={wheelSlideimg} onClick={window.innerWidth >= 400 ? zoomImage : switchPhotoMobile} className={st.img}>
                    <img ref={ref} src={currentElement.img[counterImg]} alt="card" className={positionY != 0 ? st.scale : ''} 
                     />
                </div>
            </div>
            <div onClick={navigationBtImage} className={st.btNav}>
                <span id="btUp" title="Вверх" className={st.btUp}>+</span>
                <span id="btDown" title="Вниз" className={st.btBottom}>-</span>
            </div>
        </div>
    );
}


export default WindowShowImgCommodity;