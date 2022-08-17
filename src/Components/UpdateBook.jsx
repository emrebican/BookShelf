import { React, useState } from 'react';
import Rating from '../Components/Rating';
import { useBookContext } from '../Context/BookContext';

import {
    Backdrop,
    Container,
    Box,
    IconButton,
    Button,
    TextField,
    FormLabel,
    FormControlLabel,
    FormControl,
    RadioGroup,
    Radio,
    Typography,
    Tooltip,
    Zoom
} from '@mui/material';
// Icons
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

function UpdateBook({ item }) {

    const { dispatch } = useBookContext();
    const [open, setOpen] = useState(false);

    // BackDrop
    const handleClose = () => {
        setOpen(false);
    }

    const handleToggle = () => {
        setOpen(!open);
    }

    // Form States
    const [bookValues, setBookValues] = useState({
        book_title: item.book.book_title,
        author_name: item.book.author_name,
        comments: item.book.comments,
        category: item.book.category,
        rating: item.book.rating
    });

    // Errors
    const [titleError, setTitleError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [commentsError, setCommentsError] = useState(false);

    // SUBMIT
    function handleSubmit(e) {
        e.preventDefault();
        // throw errors
        bookValues.book_title.trim() ? setTitleError(false) : setTitleError(true);
        bookValues.author_name.trim() ? setNameError(false) : setNameError(true);
        bookValues.comments.trim() ? setCommentsError(false) : setCommentsError(true);

        if (
            bookValues.book_title.trim()
            && bookValues.author_name.trim()
            && bookValues.comments.trim()
            && bookValues.category
            && bookValues.rating
        ) {
            dispatch({ type: "UPDATE_BOOK", payload: { id: item.id, bookUpdate: bookValues } });
            setOpen(false);
        }
    }

    // handleChange
    function handleChange(e) {
        const { value, name } = e.target;

        setBookValues({
            ...bookValues,
            [name]: value
        })
    }

    // Rating Func
    const handleRate = (index) => {
        setBookValues({
            ...bookValues,
            rating: index + 1
        })
    }

    return (
        <Box>
            <IconButton
                size="large"
                className="update-btn"
                onClick={handleToggle}
            >
                <Tooltip
                    arrow
                    placement='right'
                    title="Update"
                    TransitionComponent={Zoom}
                >
                    <BookmarkIcon />
                </Tooltip>
            </IconButton>
            <Backdrop
                open={open}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 100
                }}
            >
                <Box className='update-box'>
                    <IconButton
                        className="cancel-btn"
                        onClick={handleClose}
                    >
                        <DisabledByDefaultRoundedIcon />
                    </IconButton>
                    <Container maxWidth="md" className="create-container">
                        <Typography
                            variant="h6"
                            gutterBottom
                            className="title"
                        >
                            Update Book
                        </Typography>
                        <form
                            noValidate
                            autoComplete='off'
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                label="Book Title"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                required
                                error={titleError}
                                name="book_title"
                                value={bookValues.book_title}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Author Name"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                required
                                error={nameError}
                                name="author_name"
                                value={bookValues.author_name}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Comments"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                required
                                error={commentsError}
                                multiline
                                rows={4}
                                name="comments"
                                value={bookValues.comments}
                                onChange={handleChange}
                            />
                            <FormControl>
                                <FormLabel>Book Category</FormLabel>
                                <RadioGroup
                                    className='book-category'
                                    name="category"
                                    value={bookValues.category}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel
                                        value="action"
                                        label="Action"
                                        control={<Radio color="secondary" />}
                                    />
                                    <FormControlLabel
                                        value="adventure"
                                        label="Adventure"
                                        control={<Radio color="secondary" />}
                                    />
                                    <FormControlLabel
                                        value="drama"
                                        label="Drama"
                                        control={<Radio color="secondary" />}
                                    />
                                    <FormControlLabel
                                        value="horror"
                                        label="Horror"
                                        control={<Radio color="secondary" />}
                                    />
                                    <FormControlLabel
                                        value="history"
                                        label="History"
                                        control={<Radio color="secondary" />}
                                    />
                                    <FormControlLabel
                                        value="romance"
                                        label="Romance"
                                        control={<Radio color="secondary" />}
                                    />
                                    <FormControlLabel
                                        value="fantasy"
                                        label="Fantasy"
                                        control={<Radio color="secondary" />}
                                    />
                                </RadioGroup>
                            </FormControl>
                            <FormControl fullWidth className="rating">
                                <FormLabel>Rating</FormLabel>
                                <Rating
                                    rate={bookValues.rating}
                                    handleRate={handleRate}
                                />
                            </FormControl>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="error"
                                endIcon={<RestartAltIcon style={{ fontSize: "1.8rem", marginLeft: ".6rem" }} />}
                            >
                                Update Book
                            </Button>
                        </form>
                    </Container>
                </Box>
            </Backdrop>
        </Box>
    )
}

export default UpdateBook;