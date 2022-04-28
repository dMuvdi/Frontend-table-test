import react from 'react';
import './photo.css';
import goBackArrow from '../../fonts/goBackArrow.png';


const Photo = () => {
    return (
        <div className='image'>
            <div className='image_container'>
                <a href='projects'><img className='go_back' src={goBackArrow}/></a>
                <div className='state_container'>
                    <p>Closed</p>
                </div>
            </div>
        </div>
    )
}

export default Photo