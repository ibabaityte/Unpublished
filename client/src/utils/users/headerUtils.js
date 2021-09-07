let generateRequestConfig = (query) => {
    return {
        'params': {
            'query': query
        },
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

const handleClose = (e, anchorRef, setOpen) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
        return;
    }
    setOpen(false);
};

export {
    generateRequestConfig,
    handleToggle,
    handleListKeyDown,
    handleClose,
};