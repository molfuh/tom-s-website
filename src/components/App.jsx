import '../App.css';
import HomePage from './HomePage';
import coverPic from '../cover_photo.JPG';

function App() {
  return (
    <div className="App">
      <HomePage coverPic={coverPic}/>
    </div>
  );
}

export default App;
