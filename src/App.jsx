import React, { lazy } from "react";
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { dateCard } from "./components/dateCard";
import Home from './components/Home/Home';
const Favorite = lazy(() => import('./components/Favorite/Favorite'));
const LoginConfirm = lazy(() => import('./components/LoginConfirm/LoginConfirm'));
const LoginRegistration = lazy(() => import('./components/LoginRegistration/LoginRegistration'));
const Commodity = lazy(() => import('./components/commodity/Commodity'));
const Basket = lazy(() => import('./components/Basket/Basket'));
const ListProducts = lazy(() => import('./components/ListProducts/ListProducts'));
const PremiumPage = lazy(() => import('./components/PremiumPage/PremiumPage'));
const ConteinerInfo = lazy(() => import('./components/ConteinerInfo/ConteinerInfo'));
const PaymentInfo = lazy(() => import('./components/PaymentInfo/PaymentInfo'));
const ExchangeCommodity = lazy(() => import('./components/ExchangeCommodity/ExchangeCommodity'));
const OrderInfo = lazy(() => import('./components/OrderInfo/OrderInfo'));
const Cooperation = lazy(() => import('./components/Cooperation/Cooperation'));
const SearchResult = lazy(() => import('./components/SearchResult/SearchResult'));
import PageNotFound from './components/PageNotFound/PageNotFound';
import Compilation from './components/Compilation/Compilation';
import OutfitList from './components/OutfitList/OutfitList';




function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home />} />
            <Route path="/:link" element={<Commodity />} />
            {
              Object.keys(dateCard).map((el, i) => (
                <Route key={el + i} path={`/${el}`} element={<ListProducts />}>
                    <Route path={`/${el}/:name`} element={<ListProducts />} />
                </Route>
              ))
            }
            <Route path="/search" element={<SearchResult />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/Account" element={<LoginConfirm />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/outfits" element={<OutfitList />} />
            <Route path="/outfits/:id" element={<Compilation />} />
            <Route path="/sotrudnichestvo" element={<ConteinerInfo children={<Cooperation />}/>} />
            <Route path="/payment" element={<ConteinerInfo children={<PaymentInfo />}/>} />
            <Route path="/order" element={<ConteinerInfo children={<OrderInfo />}/>} />
            <Route path="/exchange" element={<ConteinerInfo children={<ExchangeCommodity />}/>} />
            <Route path="/Account/registration" element={<LoginRegistration />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
      </Routes>
  )
}

export default App
