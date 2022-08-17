import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Button,
    IconButton,
    Tooltip
} from '@mui/material';

// Icons
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';

import { useBookContext } from '../Context/BookContext';
import Rating from './Rating';
import SearchComp from './SearchComp';
import MediaIcons from './MediaIcons';

function Navbar({ drawer, setDrawer }) {

    // From Context
    const { BY_RATING, MOST_STAR, filterDispatch, themeColor, themeDispatch } = useBookContext();

    // Rating Func
    const handleRate = (index) => {
        filterDispatch({ type: "SORT_BY_RATING", payload: index + 1 })
    }

    const navigate = useNavigate();
    const location = useLocation();

    // Menu Items
    const menuItems = [
        {
            text: 'Books',
            icon: <NotesRoundedIcon color={themeColor ? "#fafafa" : "secondary"} />,
            path: '/'
        },
        {
            text: 'Add a Book',
            icon: <AddCircleRoundedIcon color={themeColor ? "#fafafa" : "secondary"} />,
            path: '/create'
        },
        {
            text: 'Graphic',
            icon: <InsertChartRoundedIcon color={themeColor ? "#fafafa" : "secondary"} />,
            path: '/graphic/category'
        }
    ]

    // Styles
    const styles = {
        link: {
            paddingY: 2.4,
        },
        active: {
            borderRight: "5px solid #e53935",
            color: "#3f51b5",
        }
    }

    function handleDrawerShow(path) {
        navigate(path);
        setDrawer(false);
    }

    return (
        <Box
            className='menu-navbar'
            style={{
                backgroundColor: themeColor && "#616161",
                boxShadow: themeColor && "0px 0px 0px black",
            }}
        >
            <Typography
                variant="h4"
                className="title"
                color="white"
            >
                Book <span>Shelf</span>
            </Typography>
            <IconButton
                className="menu-close-btn"
                onClick={() => setDrawer(!drawer)}
            >
                <ArrowBackIosRoundedIcon />
            </IconButton>
            <List>
                {menuItems.map(item => (
                    <ListItem
                        key={item.text}
                        button
                        className="menu-items"
                        sx={[styles.link, location.pathname === item.path && styles.active]}
                        onClick={() => handleDrawerShow(item.path)}
                        style={{ borderRight: location.pathname === '/graphic/rating' && item.path === "/graphic/category" && "5px solid #e53935" }}
                    >
                        <ListItemIcon
                            className="menu-item"
                            style={{ color: themeColor ? "#fafafa" : "" }}
                        >
                            {item.icon}
                            <ListItemText primary={item.text} />
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
            <Box
                className="filter-box"
                style={{
                    transform: location.pathname === '/' ? "translateX(0%)" : "translateX(-120%)",
                    transition: "ease all 0.8s",
                    color: themeColor ? "#fafafa" : "",
                    backgroundColor: themeColor ? "#424242" : ""
                }}
            >
                <Typography variant="h5" color="error">Filters</Typography>
                <SearchComp />
                <Typography variant="body1">Rating</Typography>
                <Rating
                    rate={BY_RATING}
                    handleRate={handleRate}
                />
                <Tooltip arrow placement='left' title="Clear Filter">
                    <IconButton
                        className='filter-reset-btn'
                        onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}
                        style={{ color: themeColor ? "#fafafa" : "" }}
                    >
                        <HighlightOffIcon />
                    </IconButton>
                </Tooltip>
                <Button
                    variant="contained"
                    color="error"
                    endIcon={<AutoAwesomeRoundedIcon />}
                    onClick={() => filterDispatch({ type: "MOST_STAR", payload: !MOST_STAR })}
                >
                    Most Stars
                </Button>
            </Box>
            <IconButton
                className="theme-btn"
                onClick={() => themeDispatch({ type: "THEME_TOGGLE" })}
            >
                {themeColor
                    ? <DarkModeIcon style={{ color: "#fff" }} />
                    : <WbSunnyIcon style={{ color: "#e53935" }} />
                }
            </IconButton>
            <MediaIcons />
        </Box>
    )
}

export default React.memo(Navbar);