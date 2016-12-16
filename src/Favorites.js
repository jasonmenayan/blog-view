import React from 'react';
import Tile from './Tile'
import './styles.css'

function Favorites(props) {
	let tiles = props.favorites.map(tiledata => {
		return (
			<Tile tiledata={tiledata} key={tiledata.id} removeFromFavorites={props.removeFromFavorites} />
		);
	})
  return (
    <div className="favorites">
      <h2>Favorites:</h2>
    	{tiles}
    </div>
  );
}

export default Favorites
