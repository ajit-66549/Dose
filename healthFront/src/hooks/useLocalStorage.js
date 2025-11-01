/*
small reusable hook that reads an initial value from localStorage, 
returns [value, setValue], and syncs updates to localStorage using useEffect.
*/

import { useState, useEffect } from "react"

// setting customized hook to store the values in local storage
function useLocalStorage(key, initialValue) {
    // initialize the state variable from local storage or passed initialValue 
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    // syncing the updated state value to local storage, whenever changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;