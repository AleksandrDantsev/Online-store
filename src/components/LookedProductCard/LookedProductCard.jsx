import React, {memo} from "react";
import st from "./LookedProductCard.module.scss";
import { Link } from "react-router-dom";
import { onloadedImageAnimation } from "../../hooks/onloadedImageAnimation";

const LookedProductCard = memo((props) => {
    const [isLoadedImg, Dummy] = onloadedImageAnimation(false, props.img);
    return(
            <div className={props.type ? st.card + ' ' + st.outfit : st.card} style={props.width && {width: props.width, height: props.height}}>
                <Link to={'/' + props.link}>
                    <div className={st.img}>
                        {
                            isLoadedImg ?
                            <img src={props.img} alt={props.name} /> : Dummy
                        }
                    </div>
                    <div className={st.bottomInfo}>
                        <div className={st.name}>
                            <p>{props.name}</p>
                        </div>
                        <div className={st.cost}>
                            <span>{props.cost} Р</span>
                        </div>
                    </div>
                </Link>
            </div>
    );
})


export default LookedProductCard;