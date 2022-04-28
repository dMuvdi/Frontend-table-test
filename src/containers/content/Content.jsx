import react from 'react';
import './content.css';
import { Author, Description, Title } from '../../components';


const Content = () => {
    return (
        <div>
            <Author/>
            <Title/>
            <Description/>
        </div>
    )
}

export default Content