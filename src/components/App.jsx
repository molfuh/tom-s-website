import FirstView from './FirstView';
import coverPic from '../cover_photo.JPG';
import firstPic from '../first_photo.JPG';
import facePic from '../thomas_smiling_pic.jpeg';
import eric_genaff from '../eric_genaff.png';
import music from '../sheet_music.jpeg';
import tom_s_logo from '../tom-s-logo.jpg';
import styled from 'styled-components';
import SecondView from './SecondView';
import ThirdView from './ThirdView';
import Footer from './Footer';
import About from './About';
import Videos from './Videos';
import Listen from './Listen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styling = {
  color:'black',
  textDecoration:"none",
};


function App() {
  return (
    <Router>
      <AppContainer>
        <StyledNav>
          <StyledLogo>THOMAS M.L. RAVAGO</StyledLogo>
            <ul>
              <StyledLi>
              <Link to="/listen"
                style={styling}
                >Take a Listen</Link>
              </StyledLi>
              <StyledLi>
              <Link to="/videos"
                  style={styling}
                >Videos</Link>
              </StyledLi>
              <StyledLi>
              <Link to="/about"
                  style={styling}
                >About</Link>
              </StyledLi>
              <StyledLi>
              <Link to="/"
                style={styling}
                >Home</Link>
              </StyledLi>
            </ul>
          </StyledNav>
          <Switch>
            <Route path="/about">
              <About facePic={facePic}/>
            </Route>
            <Route path="/videos">
              <Videos eric_genaff={eric_genaff}/>
            </Route>
            <Route path="/listen">
              <Listen music={music}/>
            </Route>
            <Route path="/">
              <ScrollContainer>
                  <FirstView coverPic={coverPic}/>
                  <SecondView tom_s_logo={tom_s_logo}/>
                  <ThirdView firstPic={firstPic}/>
                  <Footer />
              </ScrollContainer>
            </Route>
          </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  overflow-x: hidden;
`;

const ScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  overflow-x: hidden;
`;

const StyledNav = styled.nav`
  width: 100vw;
  z-index: 1;
  position: fixed;
  background-color: white;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  filter: drop-shadow(0 0 0.5rem grey);
`;

const StyledLogo = styled.span`
  position: absolute;
  color: black;
  display: flex;
  align-items: center;
  left: 5px;
  font-size: 1.2vw;
`;

const StyledLi = styled.li`
  font-size: 1.2vw;
  display: inline;
  margin: 0;
  float: right;
  margin: 0 1vw;
  top: 5px;
  margin: 0.5vw 1vw;
`;

export default App;
