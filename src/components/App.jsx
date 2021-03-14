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
        <StyledNav>
          <StyledLogo>THOMAS M.L. RAVAGO</StyledLogo>
            <StyledUl>
              <StyledLi>
                <Link to="/">Home</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/about">About</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/videos">Videos</Link>
              </StyledLi>
              <StyledLi>
                <Link to="/listen">Take a Listen</Link>
              </StyledLi>
            </StyledUl>
          </StyledNav>
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
`;

const StyledNav = styled.nav`
  width: 100vw;
  z-index: 1;
  position: fixed;
  background-color: white;
  /* display: flex; */
  /* align-content: center; */
`;

const StyledLogo = styled.span`
  position: absolute;
  /* left: 20px; */
  color: black;
  display: flex;
  align-items: center;
  top: 5px;
  left: 5px;
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
`;

const StyledUl = styled.ul`
  margin-top: 0;
  /* text-decoration: none; */
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  margin: 0;
  height: 30px;
  /* top: 15px; */
`;

export default App;
