import React, { Component } from 'react';
import data from '../data'
import Navigation from './Navigation'
import Header from './Header'

export default class DirectoryApp extends Component {
    constructor(props){
        super(props)

        this.state = {
            index: 0,
            people: data
        }

    }

   next = (index) => {
        index = this.state.index
        
        this.setState({ index++ });
      }



    render() {
        let {people, index} = this.state
        //console.log(data[2].country)
        return (
            <div>
            Name:{`${people[index].name.first} ${people[index].name.last}`}<br/>
            From:{`${people[index].city}, ${people[index].country}`}<br/>
            Employer: {`${people[index].employer}`}<br/>
            <br/><br/>
            Favorite Movies:<br/>
            1.{`${people[index].favoriteMovies[0]}`}<br/>
            2.{`${people[index].favoriteMovies[1]}`}<br/>
            3.{`${people[index].favoriteMovies[2]}`}<br/><br/><br/>

            {`${index+1}/${people.length}`}<br/><br/>
            <Navigation next={this.next} previous={this.previous}/>
            </div>
        )
    }
}