import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Button,
    IconButton,
    Tooltip,
    Zoom
} from '@mui/material';

// Icons
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';

import { useBookContext } from '../Context/BookContext';
import Rating from './Rating';
import SearchComp from './SearchComp';
import MediaIcons from './MediaIcons';

function Navbar() {

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

    // Category Filter
    const CATEGORIES = [
        { value: "action", title: "Action" },
        { value: "adventure", title: "Adventure" },
        { value: "drama", title: "Drama" },
        { value: "horror", title: "Horror" },
        { value: "history", title: "History" },
        { value: "romance", title: "Romance" },
        { value: "fantasy", title: "Fantasy" },
    ]

    const handleCategoryFilter = (e) => {
        filterDispatch({ type: "CATEGORY", payload: e.target.value })
    }

    return (
        <Box
            className="navbar"
            style={{
                backgroundColor: themeColor && "#616161",
                boxShadow: themeColor && "0px 0px 0px black"
            }}
        >
            <Typography
                variant="h4"
                className="title"
                color="white"
            >
                Book <span>Shelf</span>
            </Typography>
            <List>
                {menuItems.map(item => (
                    <ListItem
                        key={item.text}
                        button
                        className="menu-items"
                        sx={[styles.link, location.pathname === item.path && styles.active]}
                        onClick={() => navigate(item.path)}
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
                <FormControl
                    size="small"
                    color="secondary"
                >
                    <InputLabel>Category</InputLabel>
                    <Select
                        label="Category"
                        onChange={handleCategoryFilter}
                    >
                        {CATEGORIES.map(category => (
                            <MenuItem
                                key={category.title}
                                value={category.value}
                            >
                                {category.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Tooltip
                    arrow
                    placement='left'
                    title="Clear Filter"
                    TransitionComponent={Zoom}
                >
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