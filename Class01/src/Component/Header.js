const Heading = ()=>{
    return (
        <div className='heading'>
            <div className='logo'>
                <img src={require('../../logo2.jpeg')} alt="logo2"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

export default Heading;
