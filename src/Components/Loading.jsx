import { Box, CircularProgress, Typography } from '@mui/material';
import { useBookContext } from '../Context/BookContext';

function Loading() {
    const { themeColor } = useBookContext();
    return (
        <Box
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "93.1vh",
            }}
        >
            <CircularProgress color="secondary" />
            <Typography variant="h6" style={{ color: themeColor && "#fafafa" }}>Loading</Typography>
        </Box>
    )
}

export default Loading