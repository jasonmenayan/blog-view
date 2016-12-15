import React, {Component} from 'react'
import jsonp from 'jsonp'
import './styles.css'
import {key} from '../config'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Favorites from './Favorites'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {blogname: '', tag: '', searchresults: [], favorites: []}
    this.toggleFavorites = this.toggleFavorites.bind(this)
    this.handleEntry = this.handleEntry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleFavorites(id, likeStatus, e) {
    e.preventDefault()
    if (likeStatus) {
      // remove from Favorites
      let faves = this.state.favorites
      let index = faves.findIndex(element => {
        return element.id === id
      })
      faves.splice(index, 1);
      this.setState({favorites: faves})
    } else {
      // add to Favorites
      let searchtiles = this.state.searchresults
      let index = searchtiles.findIndex(element => {
        return element.id === id
      })
      let faves = this.state.favorites
      let favesIndex = faves.findIndex(element => {
        return element.id === id
      })
      if (favesIndex < 0) {
        faves.unshift(searchtiles[index])
        this.setState({favorites: faves})
      }
    }
  }

  handleEntry(field, e) {
    e.preventDefault()
    this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.blogname && !this.state.tag) {
      alert('Please fill out at least one field.')
      return
    }
    var apiKey = `api_key=${key}`
    let request;
    if (this.state.blogname.length === 0) {
      request = `https://api.tumblr.com/v2/tagged?tag=${this.state.tag}&${apiKey}`
    } else {
      let tag = this.state.tag.length > 0 ? `&tag=${this.state.tag}` : ''
      request = `https://api.tumblr.com/v2/blog/${this.state.blogname}/posts?${apiKey}${tag}`
    }
    jsonp(request, null, (err, data) => {
      if (err) throw new Error(err.message)
      this.setState({searchresults: data.response.posts})
    })
  }

  render() {
    return (
      <div className="app">
        <SearchBar onEntry={this.handleEntry} onSubmit={this.handleSubmit} blogname={this.state.blogname} tag={this.state.tag} />
        {this.state.searchresults.length > 0 && <SearchResults results={this.state.searchresults} toggleFavorites={this.toggleFavorites} />}
        {this.state.favorites.length > 0 && <Favorites favorites={this.state.favorites} toggleFavorites={this.toggleFavorites} />}
      </div>
    );
  }
}

export default App;
