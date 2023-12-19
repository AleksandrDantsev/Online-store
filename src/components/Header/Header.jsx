import React, { useState } from "react";
import {Link} from "react-router-dom";
import HeaderLine from "../HeaderLine/HeaderLine";
import st from "./Header.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SearchSite from "../Search/SearchSite";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
    const [isActiveLineHeaderTop, setIsActiveLineHeaderTop] = useState(true);
    const basketLength = useSelector(state => state.basketBD.resultBasketElems);
    const favoriteCount = useSelector(state => state.favoriteProd.allFavAdded);
    const [burgerIsActive, setBurgerActive] = useState(false);

    return(
        <header>
            {burgerIsActive && <BurgerMenu setBurgerActive={setBurgerActive}/>}
            {isActiveLineHeaderTop && <HeaderLine closeButton={setIsActiveLineHeaderTop} />}
            <div className={st.headerMain}>
                <div className={st.headerTop}>
                    <div className={st.headerTopLeft}>
                        <ul>
                            <li onClick={() => setBurgerActive(!burgerIsActive)} className={st.headerBurger}>
                                <svg width="30px" height="30px" viewBox="0 0 12 12" enableBackground="new 0 0 12 12" id="Слой_1" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect fill="#333333" height="1" width="11" x="0.5" y="5.5"></rect> <rect fill="#333333" height="1" width="11" x="0.5" y="2.5"></rect> <rect fill="#333333" height="1" width="11" x="0.5" y="8.5"></rect> </g> </g></svg>
                            </li>
                        </ul>
                    </div>
                    <div className={st.headerTopLogo}>
                        <Link to="/">beauté</Link>
                    </div>
                    <div className={st.headerTopRight}>
                        <div className={st.homebutoon}>
                            <Link to="/">
                            <svg width="27px" height="29px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10.8074C3 9.9094 3.40231 9.0586 4.09639 8.48876L9.46186 4.08378C10.9372 2.87254 13.0628 2.87255 14.5381 4.08378L19.9036 8.48876C20.5977 9.0586 21 9.9094 21 10.8074V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V10.8074Z" stroke="#000000" strokeWidth="1.272"></path> <path d="M15 21V16C15 14.8954 14.1046 14 13 14H11C9.89543 14 9 14.8954 9 16V21" stroke="#000000" strokeWidth="1.272"></path> </g></svg>
                            </Link>
                        </div>
                        <div className={st.profil}>
                            <Link to="account">
                                <svg width="19px" height="28px" viewBox="0 0 20 20" version="1.1" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g transform="translate(-180.000000, -2159.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298"> </path> </g> </g> </g> </g></svg>
                            </Link>
                        </div>
                        <div className={st.basket}>
                            <Link to="basket">
                                <svg viewBox="0 0 24 24" width="28px" height="28px" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4" stroke="#000000" strokeWidth="1.336" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </Link>
                            {
                            basketLength.length ?
                            <span className={st.logoHeaderCount}>{basketLength.length}</span> : ''
                            }                      
                        </div>
                        <div className={st.heart}>
                            <Link to="/favorite"><svg width="28px" height="28px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </Link> 
                            {favoriteCount.length ?
                             <span className={st.logoHeaderCount}>{favoriteCount.length}</span> : ''
                            }
                        </div>
                    </div>
                </div>
                <div className={st.headerBottom}>
                    <div className={st.headerCategory}>
                        <ul>
                            <li><Link to="odejda">Одежда</Link></li>
                            <li><Link to="obuv">Обувь</Link></li>
                            <li><Link to="aksessuary">Аксессуары</Link></li>
                            <li><Link to="premium">Премиум</Link></li>
                            <li><Link to="/outfits">Коллекции</Link></li>
                        </ul>
                    </div>
                    <SearchSite />
                </div>
            </div>
        </header>
    );
}


export default Header;