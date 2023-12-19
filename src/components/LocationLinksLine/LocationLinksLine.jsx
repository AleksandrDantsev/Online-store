import React, {memo} from "react";
import st from "./LocationLinksLine.module.scss";
import { Link } from "react-router-dom";
import { categoryTitle } from "../dateCard";

const LocationLinksLine = memo(({isCahngeLink}) => {
    const url = window.location.href.split('/').splice(3);

    return(
        <div className={st.locatonLine}>
            <ul>
            <Link to="/"><li>beauté {'>'}</li></Link>
                {url[0].length ? 
                url.map((el, i) => 
                <Link key={el+i} to={`/${el}`}><li>{categoryTitle?.[el] ? categoryTitle?.[el].toLowerCase() :
                 el} {'>'}</li></Link>) : ''}
            </ul>
        </div>
    );
})


export default LocationLinksLine;