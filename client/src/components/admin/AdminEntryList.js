import React, {useState} from "react";

// util imports
import Entry from "../entries/Entry";
import ViewEntry from "../entries/ViewEntry";
import {Route} from "react-router-dom";

const AdminEntryList = (props) => {
    const {userType, adminEntries, setEntries} = props;
    const [selectedEntry, setSelectedEntry] = useState({});

    return (
        <div>
            <Route exact path="/home/admin/allEntries">
                {
                    adminEntries.map((entry) => (
                        <div key={entry._id}>
                            <Entry
                                key={entry._id}
                                entry={entry}
                                entries={adminEntries}
                                setEntries={setEntries}
                                setSelectedEntry={setSelectedEntry}
                                userType={userType}
                            />
                        </div>
                    ))
                }
            </Route>

            <Route path="/home/admin/allEntries/viewEntry" render={() => (
                <ViewEntry
                    key={selectedEntry._id}
                    userType={userType}
                    entries={adminEntries}
                    setEntries={setEntries}
                    selectedEntry={selectedEntry}
                    setSelectedEntry={setSelectedEntry}
                />
            )}/>
        </div>
    );
}

export default AdminEntryList;