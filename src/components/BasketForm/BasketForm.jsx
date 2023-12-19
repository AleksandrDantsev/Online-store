import React from "react";
import st from "./BasketForm.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const BasketForm = () => {
    const [isOpenPromo, setIsOpenPromo] = useState(false);
    const collectionBasket = useSelector(state => state.basketBD.resultBasketElems);


    const reduceSum = () => {
        return collectionBasket.reduce((acc, el) => acc + +el.cost, 0)
    }

    return(
        <div className={st.basketRightAmount}>
            <form>
                <div className={st.inputPromocode}>
                    <label onClick={() => setIsOpenPromo(!isOpenPromo)} htmlFor="promocode">Промокод</label>
                    <span onClick={() => setIsOpenPromo(!isOpenPromo)} className={st.arrowPromo + (isOpenPromo ? ` ${st.arrowAnim}` : '')}>
                        <svg width="22px" height="22px" viewBox="0 0 32 32"  fill="#212121" stroke="#212121"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <title></title> <g id="chevron-top"> <line className="cls-1" x1="16" x2="25" y1="11.5" y2="20.5"></line> <line x1="7" x2="16" y1="20.5" y2="11.5"></line> </g> </g></svg>
                        </span>
                    <div className={st.animHidenBlock}>
                        <input type="text" id="promocode" placeholder="Введите промокод"/>
                    </div>
                </div>
                <div className={st.animationBox + (isOpenPromo ? `` : ` ${st.hidden}`)}>
                <div className={st.bottomMainForm}>
                    <h3>Итого</h3>
                    <div className={st.amountCost}>
                        <span className={st.nameColumn}>Сумма товаров:</span>
                        <span className={st.resultColumn}>{reduceSum()}</span>
                    </div>
                    <div className={st.deliveryCost}>
                        <span className={st.nameColumn}>Доставка:</span>
                        <span className={st.resultColumn}>800</span>
                    </div>
                    <div className={st.result}>
                        <span className={st.nameColumn + ' ' + st.paySum}>К оплате:</span>
                        <span className={st.resultColumn + ' ' + st.paySum}>{reduceSum() + 800} р</span>
                    </div>
                    <button className={st.btBasketPay}>Купить</button>
                </div>
            <div className={st.bonusForm}>
                <div className={st.lineBonus}>
                    <span>
                    <svg className="SVGInline-svg" width="25px" height="24px" viewBox="0 0 25 24" version="1.1">
                        <g id="Icon/Delivery" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g>
                <rect id="Rectangle" x="0" y="0" width="25" height="24"></rect>
                <g id="Group" transform="translate(0.500000, 2.000200)" fill="#000000">
                    <polygon id="Fill-1" points="0 1.58 9.637 1.58 9.637 0.005 0 0.005"></polygon>
                    <polygon id="Fill-2" points="0 5.33 7.762 5.33 7.762 3.756 0 3.756"></polygon>
                    <polygon id="Fill-3" points="0 9.079 5.887 9.079 5.887 7.505 0 7.505"></polygon>
                    <path d="M6.1782,15.783 C6.7782,15.783 7.2662,16.271 7.2662,16.871 C7.2662,17.47 6.7782,17.959 6.1782,17.959 C5.5782,17.959 5.0902,17.47 5.0902,16.871 C5.0902,16.271 5.5782,15.783 6.1782,15.783 L6.1782,15.783 Z M17.2872,15.783 C17.8872,15.783 18.3752,16.271 18.3752,16.871 C18.3752,17.47 17.8872,17.959 17.2872,17.959 C16.6882,17.959 16.1992,17.47 16.1992,16.871 C16.1992,16.271 16.6882,15.783 17.2872,15.783 L17.2872,15.783 Z M16.1992,11.658 L22.1252,11.658 L22.1252,16.084 L19.8322,16.084 L19.7972,15.983 C19.4212,14.922 18.4122,14.209 17.2872,14.209 C16.9832,14.209 16.6842,14.26 16.4012,14.361 L16.1992,14.432 L16.1992,11.658 Z M16.1992,6.267 L18.2282,6.267 C18.5672,6.267 18.8922,6.429 19.0962,6.699 L21.6502,10.084 L16.1992,10.084 L16.1992,6.267 Z M2.6622,17.658 L3.6332,17.658 L3.6682,17.759 C4.0442,18.82 5.0532,19.533 6.1782,19.533 C7.3032,19.533 8.3122,18.82 8.6882,17.759 L8.7232,17.658 L14.7422,17.658 L14.7782,17.759 C15.1542,18.82 16.1622,19.533 17.2872,19.533 C18.4122,19.533 19.4212,18.82 19.7972,17.759 L19.8322,17.658 L23.6992,17.658 L23.6992,11.39 C23.6992,10.612 23.4422,9.843 22.9732,9.222 L20.3532,5.752 C19.8532,5.089 19.0592,4.693 18.2282,4.693 L16.1992,4.693 L16.1992,2.663 C16.1992,1.194 15.0052,7.10542736e-15 13.5372,7.10542736e-15 L11.8132,7.10542736e-15 L11.8132,1.575 L13.5372,1.575 C14.1372,1.575 14.6252,2.063 14.6252,2.663 L14.6252,16.084 L8.7232,16.084 L8.6882,15.983 C8.3122,14.922 7.3032,14.209 6.1782,14.209 C5.0532,14.209 4.0442,14.922 3.6682,15.983 L3.6332,16.084 L2.6622,16.084 C2.0632,16.084 1.5752,15.596 1.5752,14.996 L1.5752,11.256 L0.0002,11.256 L0.0002,14.996 C0.0002,16.464 1.1942,17.658 2.6622,17.658 L2.6622,17.658 Z" id="Fill-4"></path>
                </g>
            </g>
        </g>
                </svg>
                    </span>
                    <p>Бесплатная доставка из ЕС (при покупке от 5500 р)</p>
                </div>
                <div className={st.lineBonus}>
                    <span>
                    <svg className="SVGInline-svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g id="Icon/Time" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(1.000000, 1.000000)" fill="#000000" fillRule="nonzero" id="Path">
                            <path d="M16.5007734,18.4379336 L17.5245039,19.8143945 C18.0204063,19.4455508 18.4886797,19.0317187 18.9162617,18.5843711 L17.6761836,17.3991211 C17.3150313,17.7769453 16.9195469,18.1264961 16.5007734,18.4379336 Z"></path>
                            <path d="M13.7167852,19.8520352 L14.2231289,21.4909922 C14.8138203,21.3085039 15.3933398,21.0737656 15.9454453,20.7932227 L15.1683984,19.2639219 C14.7029609,19.5003789 14.2145781,19.69825 13.7167852,19.8520352 Z"></path>
                            <path d="M18.6606406,16.1779492 L20.0820898,17.1381289 C20.4289336,16.6246523 20.7337969,16.0786484 20.9883437,15.5152852 L19.4250547,14.8090937 C19.2104258,15.2841563 18.9532578,15.7446953 18.6606406,16.1779492 Z"></path>
                            <polygon points="10.1637422 10.1423008 5.36060938 10.1423008 5.36060938 11.8576992 11.8791406 11.8576992 11.8791406 3.28070703 10.1637422 3.28070703"></polygon>
                            <path d="M20.2846016,1.99413672 L20.2846016,5.17085937 C19.4780352,3.88347266 18.409875,2.77380469 17.1351641,1.90897266 C15.3150508,0.674136719 13.1861641,0.0214414062 10.9785586,0.0214414062 C8.04607031,0.0214414062 5.28915234,1.16342187 3.21552344,3.23696484 C1.14198047,5.31059375 0,8.06751172 0,11 C0,13.9324883 1.14198047,16.6894062 3.21552344,18.7630352 C5.28915234,20.8365781 8.04607031,21.9785586 10.9785586,21.9785586 C11.4559844,21.9785586 11.9365469,21.9475352 12.4068828,21.8863906 L12.1857656,20.1853008 C11.7884766,20.2369492 11.3823789,20.2631602 10.9786016,20.2631602 C5.87086328,20.2631602 1.71544141,16.1077383 1.71544141,11 C1.71544141,5.89226172 5.87086328,1.73683984 10.9786016,1.73683984 C14.2939414,1.73683984 17.3025273,3.48549609 18.9537734,6.28263281 L15.9961055,6.28263281 L15.9961055,7.99803125 L22,7.99803125 L22,1.99413672 L20.2846016,1.99413672 Z"></path>
                            <path d="M20.2091055,11.7719336 C20.201457,11.8634141 20.1923477,11.9544648 20.1821641,12.0452148 L20.1829805,12.0452578 C20.134168,12.4793281 20.0551055,12.9107773 19.9461797,13.3310977 L21.60675,13.7613437 C21.7616523,13.1636055 21.8664961,12.5472187 21.9183164,11.9294141 L21.9170703,11.9293281 C21.921625,11.8769062 21.9261797,11.8245273 21.929832,11.7719336 L20.2091055,11.7719336 L20.2091055,11.7719336 Z"></path>
                        </g>
                    </g>
                    </svg>
                    </span>
                    <p>30 дней на возврат</p>
                </div>
            </div>
            </div>
            </form>
        </div>
    );
}


export default BasketForm;