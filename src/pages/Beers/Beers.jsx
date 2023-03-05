import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Beers.css'
import BeerCard from '../../components/BeerCard/BeerCard'


const Beers = () => {

    const [beers, setBeers] = useState(null)


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data)
            })
            .catch((err) => console.log(err))
    }, [])


    if (!beers) {
        return '  Incomming !!!!'
    }


    return (
        <section className='all-beers'>

            {beers.map((beer) =>

                <BeerCard key={beer._id} beer={beer} />

            )}

        </section>
    )
}

export default Beers