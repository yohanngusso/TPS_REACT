import ProfileCard from './ProfileCard';
import './App.css';

function App() {
    return (
        <div className="app">
            <ProfileCard name="João" age={30} />
            <ProfileCard name="Maria" />
        </div>
    );
}

export default App;