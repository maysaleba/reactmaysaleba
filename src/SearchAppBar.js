import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import logo from './logo.svg';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 30,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
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
    width: 'auto'
  }
}));


export default function SearchAppBar({ search, setSearch, clearGenre, onDropDownChange}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#55597d" }}>
        <Toolbar sx={{ 
          justifyContent: "space-between", 
          width: "100%",
          maxWidth: {md:' 60%', lg: '60%'},
          mx: "auto" }}>
          <Stack direction="row" alignItems="center">
            <img
              style={{ marginRight: "10px" }}
              src={logo}
              alt="logo"
              className="logotext"
              width="38"
              height="38"
            /><Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, marginRight: '10px', display: { xs: 'none', sm: 'block' }, fontFamily: 'woojooaidpmedium', fontSize: 24 }}
          >
            MAYSALEBA?
          </Typography>
          </Stack>
          <Search sx={{width: {xs: '100%', md: '100%', lg: '50%'}, marginLeft: 'auto'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: "auto" }}
              value={search}
              onChange={(e) => {
                clearGenre();
                setSearch(e.target.value);
                onDropDownChange("All Genres")
              }}
              placeholder="Search All Games…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0, ml: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
