import { useState } from "react";
import { motion } from 'framer-motion';
import { useBookContext } from "../Context/BookContext";
import BookCard from "../Components/BookCard";
import Loading from "../Components/Loading";
import { TOP_OF_SCREEN } from "../Utilities/utilities";

import { Container, IconButton, Typography, Badge } from "@mui/material";
import { styled } from '@mui/material/styles';
import Masonry from 'react-masonry-css';
import { format } from "date-fns";

// Icons
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 20,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 10px',
    },
}));

function Books() {
    // Context
    const { state, BY_RATING, SEARCH_QUERY, MOST_STAR, CATEGORY, themeColor } = useBookContext();
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 400)

    // Filter Function
    const filteredState = () => {
        let filteredBooks = state;

        if (BY_RATING) {
            filteredBooks = filteredBooks.filter(item => item.book.rating >= BY_RATING);
        }

        if (SEARCH_QUERY) {
            filteredBooks = filteredBooks.filter(item => item.book.book_title.toLowerCase().includes(SEARCH_QUERY.toLowerCase()));
        }

        if (CATEGORY) {
            filteredBooks = filteredBooks.filter(item => item.book.category === CATEGORY);
        }

        if (MOST_STAR) {
            filteredBooks = filteredBooks.sort((a, b) => a.book.rating > b.book.rating ? -1 : a.book.rating === b.book.rating ? 0 : 1);
        } else {
            return filteredBooks.sort((a, b) => b.index - a.index);
        }
        return filteredBooks;
    }

    // Breakpoints for MASONRY
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        loading
            ?
            <Loading />
            :
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ paddingBottom: "2rem" }}
            >
                <Container
                    maxWidth="lg"
                    id="main-container"
                >
                    <Typography variant="h6" className="today-date">
                        <StyledBadge
                            badgeContent={filteredState().length}
                            color="error"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            {format(new Date(), 'do MMMM Y eeee')}
                        </StyledBadge>
                    </Typography >
                    {filteredState().length > 0 ?
                        <Masonry
                            breakpointCols={breakpoints}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {filteredState().map(item => (
                                <BookCard
                                    item={item}
                                    key={item.id}
                                />
                            ))}
                        </Masonry>
                        : <Typography variant="h4" style={{ color: themeColor ? "#fafafa" : "#212121", textAlign: "center" }}>
                            your bookshelf is empty
                        </Typography>

                    }
                    <IconButton
                        onClick={TOP_OF_SCREEN}
                        color="error"
                        className="top_btn"
                    >
                        <ExpandCircleDownRoundedIcon />
                    </IconButton>
                </Container >
            </motion.div>
    )
}

export default Books;