import React, {memo} from "react";
import st from "./LookedProduct.module.scss";
import LookedProductCard from "../LookedProductCard/LookedProductCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

const LookedProduct = memo(() => {
    const prodChar = useSelector(state => state.recentlyProdLooked.products);
    return(
        <div className={st.lookedProd}>
                <div className={st.backgroundSh}></div>
                <div className={st.conteiner}>
                    <div className={st.title}>Вы смотрели</div>
                    <div className={st.products}>
                        {
                            prodChar.map((el, i) => <LookedProductCard  key={el.name + i} 
                                                                        img={el.img} 
                                                                        name={el.name} 
                                                                        cost={el.cost} 
                                                                        link={el.link} />)
                        }
                    </div>
                </div>
        </div>
    );
})


export default LookedProduct;