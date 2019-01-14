import React from 'react';
import { Button } from 'reactstrap'
const Home = () => {
    return(
        <div>
            <h2>홈</h2>
            <Button href="/about" color="primary">About</Button>{' '}
        </div>
    )
}

export default Home;