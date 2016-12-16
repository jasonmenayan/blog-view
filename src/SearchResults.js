import React from 'react'
import Tile from './Tile'
import './styles.css'

function SearchResults(props) {
	let tiles = props.results.map(tiledata => {
		return (
			<Tile tiledata={tiledata} key={tiledata.id} addToFavorites={props.addToFavorites} />
		);
	})
  return (
    <div className="searchresults">
    	{tiles}
    </div>
  );
}

export default SearchResults
