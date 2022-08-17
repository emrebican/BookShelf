import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useBookContext } from '../Context/BookContext';
import Loading from '../Components/Loading';

function ChartBooks() {

    const { themeColor } = useBookContext();

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 700)

    return (
        loading
            ? <Loading />
            :
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
    )
}

export default ChartBooks;
