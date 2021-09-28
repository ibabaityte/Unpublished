const generateSearchConfig = (req) => {
    const keyword = req.query.keyword;
    const range = req.query.range;
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    const authorId = req.decodedToken.userId;

    if(req.query.startDate) {
        startDate = new Date(startDate).toISOString();
        endDate = new Date(endDate).toISOString();
    } else {
        startDate = "";
        endDate = "";
    }

    if(range === "7days") {
        startDate = new Date();
        endDate = new Date();
        startDate.setDate(startDate.getDate() - 7).toString();
    } else if (range === "thisMonth") {
        startDate = new Date();
        endDate = new Date();
        startDate.setMonth(startDate.getMonth(), 1).toString();
    } else if (range === "lastMonth") {
        startDate = new Date();
        endDate = new Date();
        startDate.setMonth(startDate.getMonth() - 1, 1).toString();
        endDate.setMonth(endDate.getMonth() - 1, 31).toString();
    } else if (range === "thisYear") {
        startDate = new Date();
        endDate = new Date();
        startDate.setFullYear(startDate.getFullYear(), 0, 1).toString();
    } else if (range === "lastYear") {
        startDate = new Date();
        endDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - 1, 0, 1).toString();
        endDate.setFullYear(endDate.getFullYear() - 1, 11, 31).toString();
    }

    if(startDate && endDate && keyword) {
        return {
            'title': {'$regex': req.query.keyword, '$options': 'i'},
            'authorId': authorId,
            'createdAt': {
                $gte: new Date(startDate).toISOString(),
                $lt: new Date(endDate).toISOString(),
            }
        };
    } else if (keyword === "") {
        return {
            'authorId': authorId,
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
            'authorId': authorId
        };
    }
}

export {
    generateSearchConfig
};