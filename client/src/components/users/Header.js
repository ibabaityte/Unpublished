import React from "react";
import {Link} from "react-router-dom";
import {HeaderStyles} from "../../utils/styles/headerStyles";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = (props) => {
    const {username, userType, handleLogout, handleProfileDelete} = props;

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const styles = HeaderStyles();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={styles.header}>
            <Grid container>
                <Grid item lg={9}>
                    <Link className={styles.logo} to="/entries">unpublished</Link>
                </Grid>
                <Grid item lg={3} className={styles.panel}>
                    <Link className={styles.home} to="/entries">Home</Link>
                    <Button
                        className={styles.username}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
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
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={e => handleLogout(e, anchorRef, setOpen)}>Logout</MenuItem>
                                            {userType !== "ADMIN" ?
                                                <MenuItem onClick={e => handleProfileDelete(e, anchorRef, setOpen)}>Delete Profile</MenuItem> :
                                                null
                                            }
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;