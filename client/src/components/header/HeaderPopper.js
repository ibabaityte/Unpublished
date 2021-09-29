import React, {useEffect} from "react";

//util imports
import {
    logout,
    deleteProfile
} from "../../utils/users/userUtils";
import {
    handleToggle,
    handleListKeyDown
} from "../../utils/users/headerUtils";

// styles imports
import {HeaderStyles} from "../../utils/styles/headerStyles";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

// icon imports
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Modal from "@material-ui/core/Modal";

const HeaderPopper = (props) => {
    const {
        username,
        userType
    } = props;

    const [openModal, setOpenModal] = React.useState(false);
    const [openPopper, setOpenPopper] = React.useState(false);

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
              {({ TransitionProps, placement }) => (
                  <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                      <Paper>
                          <ClickAwayListener onClickAway={() => setOpenPopper(false)}>
                              <MenuList autoFocusItem={openPopper} id="menu-list-grow" onKeyDown={e => handleListKeyDown(e, setOpenPopper)}>
                                  <MenuItem onClick={e => logout(e, anchorRef, setOpenPopper)}>Logout</MenuItem>
                                  {userType !== "ADMIN" ?
                                      <MenuItem onClick={() => handleToggle(setOpenModal)}>Delete Profile</MenuItem> :
                                      null
                                  }
                                  <Modal
                                      open={openModal}
                                      onClose={() => handleToggle(setOpenModal)}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                  >
                                      <div className={`${styles.paper}`}>
                                          <Container className={styles.modalContainer}>
                                              <h2 className={styles.modalText}>Are you sure you want to delete this profile?</h2>
                                              <div className={styles.modalButtons}>
                                                  <Button className={styles.modalButton} onClick={e => deleteProfile(e, anchorRef, setOpenPopper)}>Yes, delete profile</Button>
                                                  <Button className={styles.modalButton} onClick={() => handleToggle(setOpenModal)}>Cancel</Button>
                                              </div>
                                          </Container>
                                      </div>
                                  </Modal>
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