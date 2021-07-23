const formatText = (e, command, entry, setSelectedEntry, selectedEntry) => {
    e.preventDefault();
    let selection = window.getSelection().toString();
    let fullContent = entry.content;
    let entryCopy = entry;
    let modifiedSelection = '';

    if (command === 'bold') {
        modifiedSelection = '<b>' + selection + '</b>';
    } else if (command === 'italic') {
        modifiedSelection = '<i>' + selection + '</i>';
    } else if (command === 'unorderedList') {
        modifiedSelection = '<ul>' + selection + '</ul>';
    }

    entryCopy.content = fullContent.replace(selection, modifiedSelection);
    setSelectedEntry({
            ...selectedEntry,
            entryCopy
        }
    );
}

export {
    formatText
}