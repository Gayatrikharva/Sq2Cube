import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <h2 className='logo'>Sq2Cube</h2>

            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/insights">Insights</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default Sidebar;
