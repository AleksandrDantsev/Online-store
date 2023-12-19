import React, { useRef, useState, memo } from "react";
import st from "./SearchSite.module.scss";
import SearchWindow from "../SearchWindow/SearchWindow";
import SearchPlaceholderFake from "../SearchPlaceholderFake/SearchPlaceholderFake";

const SearchSite = memo(() => {
    const [query, setQuery] = useState('');
    const [isOpenSearhWindow, setIsOpenSearchWindow] = useState(false);
    const refInput = useRef(null);
    
    const handlerInputGetValue = (e) => {
        e.preventDefault();
        setQuery(e.target.value.toLowerCase());
    }

    const openWindowSearchQuery = () => {
        setIsOpenSearchWindow(true);
        window.scrollTo(0, 90);
    }

    return(
        <form className={st.searchSiteForm}>
            <input ref={refInput} onClick={openWindowSearchQuery} 
                                  onChange={handlerInputGetValue} 
                                  className={st.searchSite} 
                                  type="text" 
                                  value={isOpenSearhWindow ? query : ''}/>
            {!isOpenSearhWindow && <SearchPlaceholderFake />}
            <span className={st.searchSiteSvg}>
                <svg viewBox="0 0 24 24" width="23px" height="23px" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_152)"> <rect width="24" height="24" ></rect> <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" strokeLinejoin="round"></circle> <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path> </g> <defs> <clipPath id="clip0_15_152"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
            </span>
            <SearchWindow refInput={refInput} 
                          flagIsOpenSearchWindow={isOpenSearhWindow} 
                          setIsOpenSearchWindow={setIsOpenSearchWindow}
                          query={query} 
                          setQuery={setQuery} />
        </form>
    );
})

export default SearchSite;