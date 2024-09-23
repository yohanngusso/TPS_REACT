import Greeting from './Greeting';
import './App.css';

export default function App() {
    return (
        <div className='app'>
            <Greeting name="João" age={24} />
            <Greeting name="Maria" age={30}/>
            <Greeting name="Carlos" age={35}/>
        </div>
    );
}