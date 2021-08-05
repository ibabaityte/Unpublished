import React, {useEffect} from "react";

//util imports
import {
    logout,
    deleteProfile
} from "../../utils/users/userUtils";
import {
    handleToggle,
    handleListKeyDown,
    handleClose
} from "../../utils/users/headerUtils";

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

    const [open, setOpen] = React.useState(false);

    const styles = HeaderStyles();

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    const anchorRef = React.useRef(null);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
      <div className={styles.panel}>
          <Button
              className={styles.username}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={() => handleToggle(setOpen)}
          >
              <AccountCircleIcon className={styles.icon}/>
              {username}
          </Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                  <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                      <Paper>
                          <ClickAwayListener onClickAway={(e) => handleClose(e, anchorRef, setOpen)}>
                              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={e => handleListKeyDown(e, setOpen)}>
                                  <MenuItem onClick={e => logout(e, anchorRef, setOpen)}>Logout</MenuItem>
                                  {userType !== "ADMIN" ?
                                      <MenuItem onClick={e => deleteProfile(e, anchorRef, setOpen)}>Delete Profile</MenuItem> :
                                      null
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

export default HeaderPopper;