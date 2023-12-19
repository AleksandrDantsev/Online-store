import React from "react";
import st from "./PosterInfoHome.module.scss";
import { Link } from "react-router-dom";

const PosterInfoHome = (props) => {
    return(
        <div className={props.type == "image" ? st.posterConteiner : st.posterConteinerVideo}>
            <div className={st.img}>
                {props.type == "image" ?
                    <img src={props.img} alt={'Продукт ' + props.title} />
                    :
                    <video poster={props.poster}
                    muted="muted" autoPlay loop>
                        <source src={props.img} type="video/mp4"/>
                    </video>
                }
            </div>
            <div className={st.content}>
                {props.title && 
                    <div className={st.title}>
                        <h3>{props.title}</h3>                
                    </div>
                }
                {
                    props.text && 
                    <div className={st.text}>
                        <p>{props.text}</p>
                    </div>
                }
                {
                    props.type == "image" && <Link to={props.link}>Посмотреть</Link>
                }      
            </div>
        </div>
    );
}


export default PosterInfoHome;