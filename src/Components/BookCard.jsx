import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  IconButton,
  Avatar,
  Tooltip,
  Zoom
} from '@mui/material';
import { red, blue, teal, yellow } from '@mui/material/colors';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import { useBookContext } from '../Context/BookContext';
import { categoryName, upperCaseString } from "../Utilities/utilities";
import Rating from "./Rating";
import UpdateBook from './UpdateBook';
import TimeAgo from '../Utilities/TimeAgo';

// Styles
const styles = {
  avatarRED: {
    backgroundColor: red[400],
    textTransform: "uppercase"
  },
  avatarBLUE: {
    backgroundColor: blue[600],
    textTransform: "uppercase"
  },
  avatarTEAL: {
    backgroundColor: teal[600],
    textTransform: "uppercase"
  },
  avatarYELLOW: {
    backgroundColor: yellow[800],
    textTransform: "uppercase"
  },
  upper: {
    textDecoration: "uppercase"
  }
}

function BookCard({ item }) {

  const { dispatch } = useBookContext();

  return (
    <Card
      elevation={3}
      className="card-item"
    >
      <CardHeader
        title={upperCaseString(item.book.book_title)}
        subheader={upperCaseString(item.book.author_name)}
        className="top-content"
        avatar={
          <Avatar sx={
            // eslint-disable-next-line
            item.book.category === "action" && styles.avatarRED ||
            // eslint-disable-next-line
            item.book.category === "adventure" && styles.avatarRED ||
            // eslint-disable-next-line
            item.book.category === "drama" && styles.avatarTEAL ||
            // eslint-disable-next-line
            item.book.category === "horror" && styles.avatarTEAL ||
            // eslint-disable-next-line
            item.book.category === "history" && styles.avatarBLUE ||
            // eslint-disable-next-line
            item.book.category === "romance" && styles.avatarBLUE ||
            // eslint-disable-next-line
            item.book.category === "fantasy" && styles.avatarYELLOW
          }>
            {categoryName(item.book.category)}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={() => dispatch({ type: "DELETE_BOOK", payload: item.id })}
          >
            <ClearRoundedIcon
              className="delete-btn"

            />
          </IconButton>
        }
      />
      <CardContent className="mid-content">
        <Typography variant="body2">
          {item.book.comments}
        </Typography>
      </CardContent>
      <Box className="bottom-content">
        <Box>
          <Tooltip
            arrow
            placement='right'
            title="Category"
            TransitionComponent={Zoom}
          >
            <Typography variant="caption">{item.book.category}</Typography>
          </Tooltip>
          <Tooltip
            arrow
            placement='right'
            title="Rating"
            TransitionComponent={Zoom}
          >
            <Typography variant="caption">
              <Rating rate={item.book.rating} />
            </Typography>
          </Tooltip>

        </Box>
        <Tooltip
          arrow
          placement='top'
          title="Added Date"
          TransitionComponent={Zoom}
        >
          <TimeAgo timestamp={item.date} />
        </Tooltip>
      </Box>
      <UpdateBook item={item} />
    </Card >
  )
}

export default BookCard;