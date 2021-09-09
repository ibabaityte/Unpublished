const handleDateChange = (e, setSelectedDate) => {
    e.preventDefault();
    e.persist()
    if(e.currentTarget.id === "startDate") {
        setSelectedDate((initialDate) => ({
                ...initialDate,
                startDate: e.target.value
            })
        );
    } else {
        setSelectedDate((initialDate) => ({
                ...initialDate,
                endDate: e.target.value
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