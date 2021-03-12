import '../App.css';
import FirstView from './FirstView';
import coverPic from '../cover_photo.JPG';
import firstPic from '../first_photo.JPG';
import Header from './Header';
import styled from 'styled-components';
import SecondView from './SecondView.jsx';
import ThirdView from './ThirdView.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollContainer>
        <FirstView coverPic={coverPic} firstPic={firstPic}/>
        <SecondView firstPic={firstPic}/>
        <ThirdView />
      </ScrollContainer>
    </div>
  );
}

const ScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

export default App;
