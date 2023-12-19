import React from "react";
import st from "./SuccesSignInProfile.module.scss";


const SuccesSignInProfile = () => {
    return(
        <div className={st.wrapper}>
            <div className={st.tetSuccesReg}>
                <h3>Вы успешно зарегистрировались. Здесь должна быть информация о вас, но её не будет :-)</h3>
            </div>
        </div>
    );
}


export default SuccesSignInProfile;