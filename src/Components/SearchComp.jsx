import { useBookContext } from '../Context/BookContext';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

// SEARCH
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.2),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
}));

function SearchComp() {
    // From Context
    const { SEARCH_QUERY, filterDispatch } = useBookContext();

    return (
        <Search >
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search a book"
                inputProps={{ 'aria-label': 'search' }}
                variant="search"
                value={SEARCH_QUERY}
                onChange={(e) => filterDispatch({
                    type: 'SORT_BY_SEARCH',
                    payload: e.target.value
                })}
            />
        </Search>
    )
}

export default SearchComp;