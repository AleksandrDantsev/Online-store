import React, { useEffect, useState } from "react";
import st from "./SearchPlaceholderFake.module.scss";

let arg = ['Ваш запрос ', 'Чёрный ', 'Boss ', 'Платье ', 'Джинсы ', 'Шапка ', 'Calvin Klein'];
let letterCounter = 0;
let numberWordInArray = 0;
let flagIsEndWorld = false;
let randomTime = 300;

const SearchPlaceholderFake = () => {
    const [queryFake, setQueryFake] = useState('');
    
    useEffect(() => {
            let dynamicPlaceholderErase = () => {
                randomTime = Math.round(Math.random() * (300 - 100) + 100);
                if (!flagIsEndWorld) letterCounter++;
                if (flagIsEndWorld) {
                    letterCounter--;
                    if (letterCounter == 0) {
                        flagIsEndWorld = false;
                        numberWordInArray++;
                    }
                    if (numberWordInArray == arg.length) numberWordInArray = 0;
                }
                setQueryFake(arg[numberWordInArray].slice(0, letterCounter));
                if (letterCounter == arg[numberWordInArray].length) flagIsEndWorld = true;
    
                setTimeout(dynamicPlaceholderErase, randomTime);
            }
            dynamicPlaceholderErase();
        return () => {
            dynamicPlaceholderErase = null;
            letterCounter = 0;
            numberWordInArray = 0;
            flagIsEndWorld = false;
            setQueryFake('');
        }
    }, [])

    

    return(
        <div className={st.searchPlaceholderBlock}>{queryFake}</div>
    );
}


export default SearchPlaceholderFake;