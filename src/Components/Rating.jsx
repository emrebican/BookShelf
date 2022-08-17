import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

function Rating({ rate, handleRate }) {
    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRate(index)}
                >
                    {rate > index
                        ? (
                            <StarRoundedIcon style={{ fontSize: "1.2rem" }} />
                        )
                        : (
                            <StarBorderRoundedIcon style={{ fontSize: "1.2rem" }} />
                        )
                    }
                </span>
            ))}
        </div >
    )
}

export default Rating;