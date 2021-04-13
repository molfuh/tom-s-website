// import '../styles/App.css';
import FirstView from './FirstView';
import coverPic from '../cover_photo.JPG';
import firstPic from '../first_photo.JPG';
import facePic from '../thomas_smiling_pic.jpeg';
import eric_genaff from '../eric_genaff.png';
import music from '../sheet_music.jpeg';
// import thomas_headshot from '../thomas_headshot.jpeg';
import tom_s_logo from '../tom-s-logo.jpg';
import Header from './Header';
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
// import "../styles/app.scss";

const styling = {
  color:'black',
  textDecoration:"none",
};

const listenStyling = {
  color: 'red'
}

function App() {
  return (
    <Router>
      <AppContainer>
        {/* <Header /> */}
        <StyledNav>
          <StyledLogo>THOMAS M.L. RAVAGO</StyledLogo>
            <StyledUl>
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
            </StyledUl>
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
                  {/* <SecondView thomas_headshot={thomas_headshot}/> */}
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
`;

const StyledNav = styled.nav`
  width: 100vw;
  z-index: 1;
  position: fixed;
  background-color: white;
  height: 2.7rem;
  /* margin-bottom: 10px; */
  /* display: flex; */
  /* align-content: center; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  filter: drop-shadow(0 0 0.5rem grey);
`;

const StyledLogo = styled.span`
  position: absolute;
  /* left: 20px; */
  color: black;
  display: flex;
  align-items: center;
  /* top: 5px; */
  /* top: 50%; */
  left: 5px;
  font-size: 1.5rem;
`;

const StyledLi = styled.li`
  font-size: 1.2vw;
  /* height: 35px; */
  display: inline;
  margin: 0;
  float: right;
  /* display: flex;
  align-items: center; */
  margin: 0 1vw;
  top: 5px;
  margin: 0.5vw 1vw;
  /* align-content: space-around; */
  .listenClass {
    color: red;
  }
`;

const StyledUl = styled.ul`
  /* margin-top: 0; */
  /* text-decoration: none; */
  /* display: flex;
  justify-content: flex-end;
  align-items: center; */
  /* margin: 0; */
  /* height: 30px; */
  /* top: 15px; */
`;


export default App;
