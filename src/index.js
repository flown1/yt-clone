import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import FontAwesome from 'react-fontawesome';

import SearchBar from './components/searchBar.js';
import VideoList from './components/videoList.js';
import VideoDetail from './components/videoDetail.js';

const API_KEY = "AIzaSyCOmVeHg0mAPYUjYTJ-lXbkND6VlL0sy_I";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null};

    this.videoSearch("funny cats")
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]});
    });
  }
  componentDidMount(){
    document.body.style.backgroundColor = "#7f7f7f";

  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <h1>You<span class="logo-span">Me<FontAwesome name='paw'/>w</span></h1>
        <h5>Only Cat-Related Videos</h5>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => {this.setState({selectedVideo}); console.log(this.state.selectedVideo)}}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
