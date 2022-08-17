import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useBookContext } from '../Context/BookContext';
import { Typography } from '@mui/material';
import Loading from '../Components/Loading';

function ChartBooks() {

    const { themeColor, state } = useBookContext();

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 700)

    return (
        loading
            ? <Loading />
            :
            <>
                {state.length > 0
                    ?
                    <div className="routes-container">
                        <nav className="routes-navbar">
                            <NavLink
                                to="category"
                                style={{ color: !themeColor && "#212121" }}
                            >
                                Category
                            </NavLink>
                            <NavLink
                                to="rating"
                                style={{ color: !themeColor && "#212121" }}
                            >
                                Rating
                            </NavLink>
                        </nav>
                        <Outlet />
                    </div>
                    :
                    <Typography variant="h4" style={{ color: themeColor ? "#fafafa" : "#212121", textAlign: "center", marginTop: "4rem" }}>
                        your bookshelf is empty
                    </Typography>}
            </>

    )
}

export default ChartBooks;
