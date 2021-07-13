const generateRequestConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('LoginToken')
        }
    };
};

export {
    generateRequestConfig
};