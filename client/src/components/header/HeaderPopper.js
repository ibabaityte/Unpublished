import React, {useEffect, useState} from "react";

//util imports
import { logout } from "../../utils/users/userUtils";
import { handleOpenPopper } from "../../utils/users/headerUtils";
import { handleModalToggle } from "../../utils/modal/ModalUtils";

// component imports
import Modal from "../Modal";

// styles imports
import {HeaderStyles} from "../../utils/styles/headerStyles";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

// icon imports
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const HeaderPopper = (props) => {
    const {
        username,
        userType
    } = props;

    const [openPopper, setOpenPopper] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const styles = HeaderStyles();

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(openPopper);
    const anchorRef = React.useRef(null);

    useEffect(() => {
        if (prevOpen.current === true && openPopper === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = openPopper;
    }, [openPopper]);

    return (
        <div className={styles.panel}>
            <Button
                className={styles.username}
                ref={anchorRef}
                aria-controls={openPopper ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={() => setOpenPopper(true)}
            >
                <AccountCircleIcon className={styles.icon}/>
                {username}
            </Button>
            <Popper open={openPopper} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={() => setOpenPopper(false)}>
                                <MenuList autoFocusItem={openPopper}
                                          id="menu-list-grow"
                                          onKeyDown={e => handleOpenPopper(e, setOpenPopper)}
                                >
                                    <MenuItem onClick={e => logout(e, anchorRef, setOpenPopper)}>Logout</MenuItem>
                                    {
                                        userType !== "ADMIN" ?
                                            <MenuItem onClick={() => handleModalToggle(setOpenModal)}>Delete
                                                Profile</MenuItem> :
                                            null
                                    }
                                    {
                                        openModal ?
                                            <Modal
                                                anchorRef={anchorRef}
                                                setOpenPopper={setOpenPopper}
                                                openModal={openModal}
                                                setOpenModal={setOpenModal}
                                                action="deleteProfile"
                                            /> : null
                                    }
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default HeaderPopper