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

const handleOpenPopper = (e, setOpen) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        setOpen(false);
    }
}

export {
    generateRequestConfig,
    // handleToggle,
    handleOpenPopper
};