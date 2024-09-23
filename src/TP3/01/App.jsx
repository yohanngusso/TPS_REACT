import Greeting from './Greeting';
import './App.css';

export default function App() {
    return (
        <div className='app'>
            <Greeting name="João" />
            <Greeting name="Maria" />
            <Greeting name="Carlos" />
        </div>
    );
}