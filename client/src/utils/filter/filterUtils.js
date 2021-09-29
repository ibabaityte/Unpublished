let generateSortRequestConfig = (order) => {
    return {
        'params': {
            'order': order
        },
        'headers': {
            'Authorization': localStorage.getItem('LoginToken')
        }
    };
};

export {
    generateSortRequestConfig
};