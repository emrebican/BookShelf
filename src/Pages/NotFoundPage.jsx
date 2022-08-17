import { useState } from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../Context/BookContext";

import Loading from "../Components/Loading";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const NotFoundPage = () => {

    const { themeColor } = useBookContext();
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000)

    return (
        loading
            ? <Loading />
            :
            <div className="not-found-page">
                <Link to="/">
                    <MenuBookIcon style={{ color: !themeColor && "#212121" }} />
                </Link>
                <span
                    style={{ color: !themeColor && "#212121" }}
                >
                    Sorry, This page is not found.
                </span>
            </div>
    )
}

export default NotFoundPage;