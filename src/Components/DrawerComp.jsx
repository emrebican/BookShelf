import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MenuNavbar from './MenuNavbar';

import { Box, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComp() {

    const [drawer, setDrawer] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const location = useLocation();

    // Drawer func
    function handleDrawer() {
        setDrawer(!drawer);
    }

    // Window.WidthSize-----------------------------------------------------
    function getWindowSize() {
        const { innerWidth } = window;
        return { innerWidth };
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, []);

    useEffect(() => {
        if (windowSize.innerWidth > 640) {
            setDrawer(false)
        }
    }, [windowSize.innerWidth]);

    // Window.WidthSize-----------------------------------------------------

    return (
        <Box className="menu-component">
            <IconButton
                onClick={handleDrawer}
                className={`menu-btn  ${location.pathname === "/create" && "menu-btn-create"}`}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={windowSize.innerWidth > 640 ? false : drawer}
                onClose={handleDrawer}
            >
                <MenuNavbar
                    drawer={drawer}
                    setDrawer={setDrawer}
                />
            </Drawer>
        </Box >
    )
}

export default DrawerComp;