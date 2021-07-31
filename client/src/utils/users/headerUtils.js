import React from "react";

let generateRequestConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('LoginToken')
        }
    };
};

// header popper utils
const handleToggle = (setOpen) => {
    setOpen((prevOpen) => !prevOpen);
};

const handleListKeyDown = (e, setOpen) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        setOpen(false);
    }
}

const useHandleClose = (e, setOpen) => {
    const anchorRef = React.useRef(null);
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
        return;
    }

    setOpen(false);
};

export {
    generateRequestConfig,
    handleToggle,
    handleListKeyDown,
    useHandleClose,
};