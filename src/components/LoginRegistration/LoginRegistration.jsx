import React, {Fragment, useState} from "react";
import st from "./LoginRegistration.module.scss";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPassword, createLogin } from "../../store/personInfo";

const LoginRegistration = () => {
    const [isCheckboxSelect, setCheckboxSelect] = useState({ch1: false, ch2: false});
    const [isSelected, setSelected] = useState(false);
    const [dataProfile, setDataProfile] = useState({login: '', password: ''});
    const [isAuth, setIsAuth] = useState(false);
    const dispatch = useDispatch();

    const handlerSubmitReg = (e) => {
        e.preventDefault();
        if (!(Object.values(isCheckboxSelect).every(el => el === true))) setSelected(true);
        else {
            setSelected(false);
            dispatch(createPassword(dataProfile.password));
            dispatch(createLogin(dataProfile.login));
            setIsAuth(true);
        }
    }
    
    return(
        <Fragment>
        {isAuth ? <Navigate to="/account" replace /> :
        <div className={st.registrationWrapper}>
            <div className={st.registration}>
                <div className={st.title}>
                    <h3>Регистрация</h3>
                </div>
                <div className={st.form}>
                
                    <form>
                        <label htmlFor="reg-email">
                            <p>Укажите свой логин*</p>
                            <input onChange={(e) => {setDataProfile({...dataProfile, login: e.target.value})}} type="text" id="reg-email" />    
                        </label> 
                        <label htmlFor="reg-password">
                            <p>Введите пароль*</p>
                            <input onChange={(e) => {setDataProfile({...dataProfile, password: e.target.value})}}type="email" id="reg-password" />    
                        </label> 
                        <div className={st.checkboxConteiner}>
                            <input onClick={() => setCheckboxSelect({...isCheckboxSelect, ch1: !isCheckboxSelect.ch1})} className={st.checkbox} type="checkbox" id="ch1" />
                            <span className={st.customCheckBox}></span>
                            <label htmlFor="ch1">
                                Соглашаюсь Правилами магазина*
                            </label>
                        </div>
                        <div className={st.checkboxConteiner}>
                            <input onClick={() => setCheckboxSelect({...isCheckboxSelect, ch2: !isCheckboxSelect.ch2}) }className={st.checkbox} type="checkbox" id="ch2" />
                            <span className={st.customCheckBox}></span>
                            <label htmlFor="ch2">
                                Хочу получать коммерческие предложения магазина beauté.ru
                            </label>
                        </div>
                        {isSelected ? <div className={st.unSelected}>Должны быть выбраны все пункты</div> : ''}
                        <div className={st.warning}>
                            Администратором персональных данных является beauté  с офисом, зарегистрированным в г. Москве, 31-564 под контролем окружного суда в г. Москва.
                        </div>
                        <button onClick={handlerSubmitReg}>Создать Аккаунт</button>
                    </form>
                </div>
            </div>
        </div>
        }
        </Fragment>
    );
}


export default LoginRegistration;