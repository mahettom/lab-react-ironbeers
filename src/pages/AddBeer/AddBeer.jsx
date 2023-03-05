import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddBeer = () => {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState()
    const [contributed_by, setContributed_by] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const beerToAdd = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by,
        }
        await axios.post('https://ih-beers-api2.herokuapp.com/beers/new')
            .then((response) => {

            })
    }




    return (
        <form onSubmit={handleSubmit}>
            <div className="input-div" >
                <input type='text' name='name' value={name} placeholder="Name your beer ..." onChange={(e) => setName(e.target.value)} />

                <input type='text' name='tagline' value={tagline} placeholder="her tagline ..." onChange={(e) => setTagline(e.target.value)} />

                <input type='text' name='description' value={description} placeholder="her description ..." onChange={(e) => setDescription(e.target.value)} />

                <input type='text' name='first_brewed' value={first_brewed} placeholder="first brewed in ..." onChange={(e) => setFirst_brewed(e.target.value)} />

                <input type='text' name='brewers_tips' value={brewers_tips} placeholder="tips of brewers ..." onChange={(e) => setBrewers_tips(e.target.value)} />

                <input type='text' name='attenuation_level' value={attenuation_level} placeholder="her attenuation level ..." onChange={(e) => setAttenuation_level(e.target.value)} />

                <input type='text' name='contributed_by' value={contributed_by} placeholder="contributor ..." onChange={(e) => setContributed_by(e.target.value)} />
            </div>
        </form>
    )
}

export default AddBeer