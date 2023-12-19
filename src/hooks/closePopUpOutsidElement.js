import { useEffect, useState, useRef } from "react";

function closePopUpOutsidElement(init) {
    const [value, setValue] = useState(init);
    const ref = useRef(null);

    const checkPositionClick = (e) => {
        if (!e.target.contains(ref.current)) {
            setValue(true);
        }
        else {
            setValue(false);
        }
     
    }

    useEffect(() => {
            document.addEventListener('click', checkPositionClick);
        return() => {
            document.removeEventListener('click', checkPositionClick);
        }
    })
    
    return [value, ref, setValue]
}

export {closePopUpOutsidElement};