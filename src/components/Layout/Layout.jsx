import React, { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SubscribeDistribution from "../SubscribeDistribution/SubscribeDistribution";
import ButtonUpPage from "../ButtonUpPage/ButtonUpPage";
import Footer from "../Footer/Footer";
import "./Layout.scss";
import AnimationLoadedPage from "../../UI/AnimationLoadedPage/AnimationLoadedPage";



const Layout = () => {
    return(
        <Fragment>
            <Header/> 
            <main>
                <Suspense fallback={<AnimationLoadedPage />}>
                    <Outlet />
                </Suspense>
            </main>
            <SubscribeDistribution />
            <Footer />
            <ButtonUpPage />
        </Fragment>
    );
}


export default Layout;