import React, {memo, useCallback, useState} from "react";
import st from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";
import BurgerCategory from "../BurgerCategory/BurgerCategory";


const BurgerMenu = memo(({setBurgerActive}) => {
    const [isOpenCatalogMenu, setOpenMenuCatalog] = useState(false);

    const closeWindowBurger = useCallback((e) => {
        if ((e.target.tagName == 'LI' || e.target.tagName == 'a') && e.target.id != "catalog") setBurgerActive(false);
    }, [])

    const openCatalog = () => {
        setOpenMenuCatalog(!isOpenCatalogMenu);
    }

    return(
        <div className={st.burgerMenuWindow}>
            <div onClick={() => setBurgerActive(false)} className={st.cross}>
                <svg fill="#363636" height="25px" width="25px" version="1.1" id="Capa_1" viewBox="0 0 490 490" stroke="#363636"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
            </div>
            <div className={st.burgerMenuWindowConteiner}>
                <div className={st.burgerList}>
                    <ul onClick={closeWindowBurger}>
                        <li id="catalog" onClick={openCatalog}>Каталог<span className={isOpenCatalogMenu ? `${st.arrowCat} ${st.rotateArrow}` : st.arrowCat}>
                            <svg viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#221911"></path> </g>
                            </svg>
                            </span></li>
                        <Link to="/premium"><li>Премиум</li></Link>
                        <Link to="/outfits"><li>Коллекции</li></Link>
                        <li>Распродажа</li>
                    </ul>
                </div>
               <BurgerCategory isOpenCatalogMenu={isOpenCatalogMenu} closeWindowBurger={closeWindowBurger}/> 
            </div>
        </div>
    );
});


export default BurgerMenu;