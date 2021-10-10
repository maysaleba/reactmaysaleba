import React from 'react';
import Navi from './Navi'
import CardGroup from './CardGroup'
import SearchBox from './SearchBox'
import './App.css';
import games from './csvjson.json';
import Results from './Results';
import { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Content from './Content'
import Posts from './components/Posts'
import Pagination from './components/Pagination'

 // const { search } = window.location;
 //  const query = new URLSearchParams(search).get('s');



const filterGames = (games, query) => {
    if (!query) {
        return games;
    }

    return games.filter((game) => {
        const gameTitle = game.Title.toLowerCase();
        return gameTitle.includes(query);
    });
};

// console.log(query);



const App = () => {


	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(20);

	useEffect(()=> {
		const res = games;
		setPosts(res);
		
	},[]);

	//Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	//Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	console.log(posts);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredGames = filterGames(games, searchQuery);


return (
	<Router>
	<Route path="/" exact render={props => 
			<div>
	     	 <Navi />
	         <SearchBox searchQuery={searchQuery}
	         setSearchQuery={setSearchQuery}

	         />
	           <CardGroup games={filteredGames} posts={currentPosts}  loading={loading}/>
	           
	          
                  
	           
	             </div> 

                }/>
                <Route path="/games/:games" component={Content} />
	</Router>

	);
}

 
export default App;

 // <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
{/*<Posts posts={currentPosts} loading={loading} />*/}