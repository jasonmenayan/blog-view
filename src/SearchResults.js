import React from 'react';
import Tile from './Tile'

function SearchResults(props) {
	let tiles = props.results.map(tiledata => {
		return (
			<Tile tiledata={tiledata} key={tiledata.id} />
		);
	})
  return (
    <div className="searchresults">
    	<hr />
    	{tiles}
    </div>
  );
}

export default SearchResults;
