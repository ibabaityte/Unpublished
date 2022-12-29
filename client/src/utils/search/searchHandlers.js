const handleDateChange = (e, setSelectedDate) => {
    e.preventDefault();
    if (e.currentTarget.id === "startDate") {
        setSelectedDate((selectedDate) => ({
                ...selectedDate,
                startDate: e.target.value
            })
        );
    } else if (e.currentTarget.id === "endDate") {
        setSelectedDate((selectedDate) => ({
                ...selectedDate,
                endDate: e.target.value
            })
        );
    } else {
        setSelectedDate((selectedDate) => ({
                ...selectedDate,
                [e.target.name]: e.target.value
            })
        );
    }
}

const handleSearchEntry = (e, setQuery) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
};

export {
    handleDateChange,
    handleSearchEntry
};