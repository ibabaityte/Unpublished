const handleModalToggle = (setOpenModal, setSelectedEntry, entry) => {
    setOpenModal((prevOpen) => !prevOpen);
    if(setSelectedEntry){
        setSelectedEntry(entry);
    }
};

export {
    handleModalToggle,
};