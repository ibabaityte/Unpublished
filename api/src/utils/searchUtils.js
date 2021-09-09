const generateSearchConfig = (req) => {
    // console.log(req);
    const keyword = req.query.keyword;
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    const author = req.decodedToken.userId;

    if(req.query.startDate) {
        startDate = new Date(startDate).toISOString();
        endDate = new Date(endDate).toISOString();
    } else {
        startDate = "";
        endDate = "";
    }

    if(startDate && endDate && keyword) {
        return {
            'title': {'$regex': req.query.keyword, '$options': 'i'},
            'author': author,
            'createdAt': {
                $gte: new Date(startDate).toISOString(),
                $lt: new Date(endDate).toISOString(),
            }
        };
    } else if (keyword === "") {
        return {
            'author': author,
            // checking if entry contains a created date between start date ($gte) and end date ($lt)
            'createdAt': {
                $gte: new Date(startDate).toISOString(),
                $lt: new Date(endDate).toISOString(),
            }
        };
    } else if (startDate === "" || endDate === "") {
        return {
            // checking if title contains a search query string
            // '$options' : 'i'   is for case insensitivity
            'title': {'$regex': req.query.keyword, '$options': 'i'},
            'author': author
        };
    }

    // if(keyword === "") {
    //     return {
    //         'author': author,
    //         // checking if entry contains a created date between start date ($gte) and end date ($lt)
    //         'createdAt': {
    //             $gte: new Date(startDate).toISOString(),
    //             $lt: new Date(endDate).toISOString(),
    //         }
    //     }
    // } else if (startDate === "" || endDate === ""){
    //     return {
    //         // checking if title contains a search query string
    //         // '$options' : 'i'   is for case insensitivity
    //         'title': {'$regex' : '.*' + keyword + '.*i', '$options' : 'i'},
    //         'author': author
    //     }
    // } else if (startDate && endDate && keyword) {
    //     return {}
    // }
}

export {
    generateSearchConfig
};