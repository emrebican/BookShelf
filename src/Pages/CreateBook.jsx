import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useBookContext } from '../Context/BookContext';
import Rating from '../Components/Rating';
import Loading from '../Components/Loading';

import {
    Container,
    TextField,
    FormLabel,
    FormControlLabel,
    FormControl,
    RadioGroup,
    Radio,
    Typography,
    Button
} from '@mui/material';

import SendRoundedIcon from '@mui/icons-material/SendRounded';

function CreateBook() {

    // From Context
    const { dispatch, themeColor } = useBookContext();
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 700)

    // Form States
    const [bookValues, setBookValues] = useState({
        book_title: "",
        author_name: "",
        comments: "",
        category: "",
        rating: 0
    });

    // Errors
    const [titleError, setTitleError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [commentsError, setCommentsError] = useState(false);

    const navigation = useNavigate();

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
            dispatch({ type: "ADD_BOOK", payload: bookValues });
            navigation('/');
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
        loading
            ? <Loading />
            :
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Container
                    maxWidth="md"
                    className="create-container"
                    style={{
                        backgroundColor: themeColor && "#e0e0e0",
                        boxShadow: themeColor && "0px 0px 0px black",
                    }}
                >
                    <Typography
                        variant="h6"
                        gutterBottom
                        className="title"
                    >
                        Add a New Book
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
                            endIcon={<SendRoundedIcon style={{ fontSize: "1.8rem", marginLeft: ".6rem" }} />}
                        >
                            Add book
                        </Button>
                    </form>
                </Container>
            </motion.div>
    )
}

export default CreateBook