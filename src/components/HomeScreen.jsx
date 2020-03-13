import react from 'react';
import {useHistory} from 'react-router-dom';


const HomeScreen = () => {
    const history = useHistory();

    const back = () => {
        history.push('/');
    }
    return <div><h1>It's home here</h1> <button onClick={back}>Go pokemon</button></div>
}

export default HomeScreen;