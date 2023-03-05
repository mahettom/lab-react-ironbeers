import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BeerCard from '../../components/BeerCard/BeerCard'

const Beer = () => {

    const [beer, setBeer] = useState(null)
    const beerId = useParams().beerId


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
            .then((response) => {
                setBeer(response.data)
            })
            .catch((err) => console.log(err))
    }, [beerId])

    if (!beer) {
        return '  Incomming !!!!'
    }

    return (
        <section>
            <BeerCard beer={beer} />
            <div className='info' >
                <div>{beer.first_brewed}</div>
                <div>{beer.attenuation_level}</div>
            </div>
            <p>{beer.description}</p>
        </section>
    )
}

export default Beer