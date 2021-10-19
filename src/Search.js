import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 30,
  backgroundColor: '#ffffff',
  border: '1px',
  borderStyle: 'solid',
  borderColor: '#55597d',
  // marginLeft: 10,
 width: 'auto',
 '.MuiInputBase-root': {
    width: '100%'
  }
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
    width: '100%'
  }
}));

export default function SearchAppBar({ search, setSearch, clearGenre, onDropDownChange}) {
return (
	 <Box sx={{ flexGrow: 1 }}>
	 	<Search sx={{width: {xs: '90vw', md: '50vw', lg: '30%'}, margin: 'auto', marginBottom: '20px'}}>
            <SearchIconWrapper>
              <SearchIcon style={{color:'#55597d'}} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: "auto" }}
              value={search}

              onChange={

                (e) => {
                clearGenre();
                setSearch(e.target.value);
                onDropDownChange("All Genres")

              }}
              placeholder="Search All Games…"
              inputProps={{ "aria-label": "search" }}
              type="search"
              name="q"
              id="site-search"
            />
          </Search>
    	</Box>

  );
}
