import React, { Fragment, useState } from "react";
import { Link} from "react-router-dom";
import st from "./LoginConfirm.module.scss";
import { dynamicTitlePage } from "../../hooks/dynamicTitlePage";
import { useSelector, useDispatch } from "react-redux";
import { isSingInTrue } from "../../store/personInfo";
import SuccesSignInProfile from "../SuccesSignInProfile/SuccesSignInProfile";

const LoginConfirm = () => {
    const [isBlur, setBlur] = useState({in1: false, in2: false});
    const [inputValues, setInputValues] = useState({password: '', login: ''});
    const aboutPersonDataAccount = useSelector(state => state.personInfo.aboutPerson);
    const dispatch = useDispatch();
    dynamicTitlePage("Личный кабинет - beauté");

    function handlerBlur(e) {
        if (e.target.id == "sign-in-email" && !e.target.value) setBlur({...isBlur, in1: true});
        if (e.target.id == "sign-in-Password" && !e.target.value) setBlur({...isBlur, in2: true});
    }

    const signInAccount = (e) => {
        e.preventDefault();
        if (aboutPersonDataAccount.password === inputValues.password &&
            aboutPersonDataAccount.login === inputValues.login) {
                dispatch(isSingInTrue(true));
        }
    }

    return(
        <Fragment>
        {aboutPersonDataAccount.isActiveAccount ? <SuccesSignInProfile /> :  
        <div className={st.confirmBlockConteiner}>
            <div className={st.confirmBlock}>
                <div className={st.confirmTitle}>
                    <h2>Войти в аккаунт</h2>
                </div>
                <div className={st.formLogin}>
                    <form>
                        <label htmlFor="sign-in-email">
                            <p>Логин*</p>
                            <input className={isBlur.in1 ? st.notFilled : ''} onChange={(e) => setInputValues({...inputValues, login: e.target.value})} onBlur={handlerBlur} onKeyDown={()=> setBlur({...isBlur, in1: false})} type="email" id="sign-in-email"/>
                        </label>
                        {isBlur.in1 ? <p className={st.notFilledText}>Данное поле должно быть заполнено</p> : ''}
                        <label htmlFor="sign-in-Password">
                            <p>Пароль*</p>
                            <input className={isBlur.in2 ? st.notFilled : ''} onChange={(e) => setInputValues({...inputValues, password: e.target.value})} onBlur={handlerBlur} onKeyDown={()=> setBlur({...isBlur, in2: false})} type="password" id="sign-in-Password"/>
                        </label>
                        {isBlur.in2 ? <p className={st.notFilledText}>Данное поле должно быть заполнено</p> : ''}
                        <div className={st.forgetPassword}>
                            <span>Забыли пароль?</span>
                        </div>
                        <button onClick={signInAccount}>Войти</button>
                    </form>
                </div>
                <div className={st.haveNotAccount}>
                    <Link to="registration"><span>У меня нет учетной записи</span></Link>
                </div>
            </div>
        </div>
        }
        </Fragment>
    );
}


export default LoginConfirm;