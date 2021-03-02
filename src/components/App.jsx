import '../App.css';
import FirstView from './FirstView';
import coverPic from '../cover_photo.JPG';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstView coverPic={coverPic}/>
    </div>
  );
}

export default App;
