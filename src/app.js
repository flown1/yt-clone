import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar.js';
import VideoList from './components/videoList.js';
import VideoDetail from './components/videoDetail.js';

const API_KEY = "AIzaSyCOmVeHg0mAPYUjYTJ-lXbkND6VlL0sy_I";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [],
                  selectedVideo: null};

    YTSearch({key: API_KEY, term: 'funny cats'}, (videos) => {
      this.setState({ videos: videos,
                      selectedVideo: videos[0]});
    });
  }

  render() {
    return (
      <div>
        <h1>YT-clone</h1>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo:selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}
