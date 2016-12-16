import React from 'react'
import './styles.css'

function SearchBar(props) {
  return (
    <div className="searchbar">
    	<label htmlFor="blogname" className="inputlabel">Tumblr Blog Name
      	<input className="blogtextfield" type="text" id="blogname" value={props.blogname} onChange={event => 
        props.onEntry('blogname', event) } />
      </label>
      <label htmlFor="tag" className="inputlabel">Tag
      	<input className="tagtextfield" type="text" id="tag" value={props.tag} onChange={event => 
        props.onEntry('tag', event) } />
      </label>
      <button onClick={props.onSubmit} className="searchbutton"> Search </button>
    </div>
  );
}

export default SearchBar
