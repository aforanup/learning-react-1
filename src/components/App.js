import React from 'react';
import axios from 'axios';
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

class App extends React.Component{
    state = {images: []}

    onSearchSubmit=async (entry)=>{
        const response = await axios.get(`https://pixabay.com/api/?key=24944812-0262e6419c050224a2390d7c9&q=${entry}&image_type=photo`)
        this.setState({images:response.data.hits})
    }
    render() {
        return(
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;