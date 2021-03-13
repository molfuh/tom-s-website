// import '../styles/App.css';
import FirstView from './FirstView';
import coverPic from '../cover_photo.JPG';
import firstPic from '../first_photo.JPG';
import Header from './Header';
import styled from 'styled-components';
import SecondView from './SecondView';
import ThirdView from './ThirdView';
import About from './About';
import Videos from './Videos';
import Listen from './Listen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <Link to="/listen">Take a Listen</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/videos">
              <Videos />
            </Route>
            <Route path="/listen">
              <Listen />
            </Route>
            <Route path="/">
              <ScrollContainer>
                  <FirstView coverPic={coverPic} firstPic={firstPic}/>
                  <SecondView />
                  <ThirdView firstPic={firstPic}/>
              </ScrollContainer>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

const ScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

export default App;
