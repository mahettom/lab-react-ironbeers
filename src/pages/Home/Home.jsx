import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <section className='all-section'>
                <img src={require('../../assets/beers.png')} alt="all-beers" />
                <Link to='/beers'>See all beers</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, delectus quidem? Obcaecati exercitationem non perspiciatis dolorum, autem harum blanditiis asperiores vero deserunt sed nulla ab distinctio enim eos suscipit vel.</p>
            </section>
            <section className='random-section'>
                <img src={require('../../assets/random-beer.png')} alt="random-beer" />
                <Link to='/random-beer'>See a random beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem veritatis atque obcaecati quia sit, optio nemo blanditiis inventore aperiam consectetur corrupti expedita quibusdam eius quaerat molestias dolores vero accusamus.</p>
            </section>
            <section className='add-section'>
                <img src={require('../../assets/new-beer.png')} alt="new-beer" />
                <Link to='/new-beer'>create a beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et quam fuga delectus, quaerat dolorem nobis porro laboriosam itaque quisquam ratione neque amet aliquam, veritatis temporibus expedita odio excepturi asperiores.</p>
            </section>
        </>
    )
}

export default Home