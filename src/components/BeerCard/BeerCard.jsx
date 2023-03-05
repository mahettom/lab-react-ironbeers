import React from 'react'
import { Link } from 'react-router-dom'
import './BeerCard.css'

const BeerCard = (props) => {
    const beer = props.beer



    return (
        <>
            <Link key={beer._id} to={'/beers/' + beer._id} className='link' >
                <img className='beer-img' src={beer.image_url} alt="beer" />
                <div className='beer-description' >
                    <p className='beer-name'> {beer.name}</p>
                    <p className='beer-tagline'> {beer.tagline}</p>
                    <p className='beer-contributor'> {beer.contributed_by}</p>
                </div>
            </Link>
        </>
    )
}

export default BeerCard