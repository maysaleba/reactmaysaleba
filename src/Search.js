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
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}));

export default function SearchAppBar({ searchQuery, setSearchQuery, clearGenre, onDropDownChange}) {
return (
	 <Box sx={{ flexGrow: 1 }}>
	 	<Search sx={{width: {xs: '90vw', md: '50vw', lg: '30%'}, margin: 'auto', marginBottom: '20px'}}>
            <SearchIconWrapper>
              <SearchIcon style={{color:'#55597d'}} />
            </SearchIconWrapper>
            <form name="searchform">
            <StyledInputBase
              sx={{ width: "auto" }}
              value={searchQuery}

              onChange={

                (e) => {
                clearGenre();
                setSearchQuery(e.target.value);
                onDropDownChange("All Genres")
                // document.searchform.submit();

              }}
              autoComplete="off"
              placeholder="Search All Games…"
              inputProps={{ "aria-label": "search" }}
              type="search"
              name="q"
              id="site-search"
            /></form>
          </Search>
    	</Box>

  );
}
