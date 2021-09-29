let generateRequestConfig = (order) => {
    return {
        'params': {
            'order': order
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

export {
    generateRequestConfig,
    handleToggle,
    handleListKeyDown,
};