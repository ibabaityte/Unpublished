const handleModalToggle = (setOpenModal, setSelectedEntry, entry) => {
    setOpenModal((prevOpen) => !prevOpen);
    setSelectedEntry(entry);
};

export {
    handleModalToggle,
};