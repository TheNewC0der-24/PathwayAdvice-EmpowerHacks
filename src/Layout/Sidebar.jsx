import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

import logo from '../assets/logo.png';

import { MdDashboardCustomize } from 'react-icons/md';
import { RiToolsFill } from 'react-icons/ri';
import { IoLayers } from 'react-icons/io5';
import { AiOutlineTeam } from 'react-icons/ai';

export const drawerWidth = 240;

const useStyles = makeStyles({
    sideBarActive: {
        backgroundColor: '#fff',
        borderRight: '3px solid #6d2ae2',
        color: '#6d2ae2',
    },
    sideBarActiveIcon: {
        color: '#6d2ae2'
    }
})

function Sidebar({ handleDrawerToggle, mobileOpen }) {

    const classes = useStyles();

    const location = useLocation();
    const navigate = useNavigate();

    const sideBarMenu = [
        {
            label: 'Dashboard',
            icon: <MdDashboardCustomize style={{ fontSize: "1.5rem" }} />,
            link: '/PathwayAdvice'
        },
        {
            label: 'Tools',
            icon: <RiToolsFill style={{ fontSize: "1.5rem" }} />,
            link: '/PathwayAdvice/tools'
        },
        {
            label: 'Resources',
            icon: <IoLayers style={{ fontSize: "1.5rem" }} />,
            link: '/PathwayAdvice/resources'
        },
        {
            label: 'Our Team',
            icon: <AiOutlineTeam style={{ fontSize: "1.5rem" }} />,
            link: '/PathwayAdvice/our-team'
        }
    ]
    const drawer = (
        <div style={{ paddingTop: '5px', paddingLeft: '10px', paddingRight: '10px', backgroundColor: "#f9faff", height: "100%", borderColor: "#f9faff" }}>
            <Box mb={3} sx={{ height: '3.70rem', borderBottom: "1px solid #0000001f" }}>
                <Box sx={{ width: '100%', height: '3.25rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "0.5rem" }}>
                    <img src={logo} alt="logo" width={45} />
                    <Typography color="#6d2ae2" variant='h6' sx={{ fontWeight: "bold" }}>
                        PathwayAdvice
                    </Typography>
                </Box>
            </Box>
            <List>
                {sideBarMenu.map((item, index) => (
                    <ListItem key={index}
                        disablePadding
                        className={location.pathname === item.link ? classes.sideBarActive : null}
                        onClick={() => { navigate(item.link); handleDrawerToggle(item.link); }}
                    >
                        <ListItemButton>
                            <ListItemIcon className={location.pathname === item.link ? classes.sideBarActiveIcon : null}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText className={location.pathname === item.label ? classes.sideBarActive : null} primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }
                }
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box >
    )
}
export default Sidebar;
