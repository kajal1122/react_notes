import { Link } from 'react-router-dom';


const Heading = ()=>{
    return (
        <div className='heading'>
            <div className='logo'>
                <Link to="/"><img src={require('../../logo2.jpeg')} alt="logo2"/></Link>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/" className='routes'>Home</Link>
                    </li>
                    <li>
                       <Link to="/about" className='routes'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='routes'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

export default Heading;
