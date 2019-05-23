import React, { Component } from 'react';
import data from '../data'
import Navigation from './Navigation'
import Header from './Header'


export default class DirectoryApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            people: data
        }

    }

    next = () => {
        if (this.state.index < this.state.people.length - 1) {
            let index = this.state.index + 1
            this.setState({ index: index });
        }
    }

    previous = () => {
        if (this.state.index > 0) {
            let index = this.state.index - 1

            this.setState({ index: index });
        }
    }



    render() {
        let { people, index } = this.state
        //console.log(data[2].country)
        return (
            <div className="wholeDoc">
                <Header />
                <div className="wrapper">
                    <section>
                        <div className='countersection'>
                            <div className='counter'>{`${index + 1}/${people.length}`}<br /><br /></div>
                        </div>
                        <div className='textsection'>
                            <p>
                                <span className="name">{`${people[index].name.first} ${people[index].name.last}`}</span><br/><br/>
                                <span className='bold'>From:  </span>{`${people[index].city}, ${people[index].country}`}<br />
                                <span className='bold'>Employer:</span> {`${people[index].employer}`}<br />
                                <br />
                                <span className='bold'>Favorite Movies:</span>
                            <span className='indent'><br/>
                                    1.{`${people[index].favoriteMovies[0]}`}<br />
                                    2.{`${people[index].favoriteMovies[1]}`}<br />
                                    3.{`${people[index].favoriteMovies[2]}`}<br /><br /><br />
                            </span>
                                
                            </p>
                        </div>
                    </section>

                        <Navigation next={this.next} previous={this.previous} />
                </div>
                </div>
                )
            }
}