import { Link } from 'react-router-dom';


const Heading = ()=>{
    return (
        <div className='heading'>
            <div className='logo'>
                <img src={require('../../logo2.jpeg')} alt="logo2"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

export default Heading;
