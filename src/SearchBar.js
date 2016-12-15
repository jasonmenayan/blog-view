import React from 'react';

function SearchBar(props) {
  return (
    <div className="searchbar">
      <input className="blogtextfield" type="text" value={props.blogname} onChange={event => 
        props.onEntry('blogname', event) } />
      <input className="tagtextfield" type="text" value={props.tag} onChange={event => 
        props.onEntry('tag', event) } />
      <button onClick={props.onSubmit}> Search </button>
    </div>
  );
}

export default SearchBar;
