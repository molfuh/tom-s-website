import React from 'react';
import styled from 'styled-components';
import { TextFocus } from 'react-text-effects';

export default function About({ facePic }) {
  return (
    <>
      <Container>
        <StyledImage src={facePic}/>
        <Styledh1>
          <TextFocus type='in' duration='2s'>
            About
          </TextFocus>
        </Styledh1>
        <h2>
          Once a student of music, always a student of music.
        </h2>



MISSION
To always make the music the best I can deliver as a musician, to make audiences feel emotion with intention as a composer, to make the musical intentions of the project clear to its listeners as a producer, to entertain as best as I can so that audiences leave remembering the experience as a performer, and to learn all that I can to make the above goals attainable as a student of music.
<hr />
BIOGRAPHY
Thomas Miguel Lopez Ravago was born in West Covina, California in 1995. Shortly after his birth, his family moved to Northern California in the city of Stockton, where Thomas has spent the majority of his life and music career thus far.

Thomas began his musical journey in 2002 when he began to study clarinet under the instruction of Nelson Zane (1936-2011), a highly-respected educator in the Central Valley. Starting in 2004, Thomas studied band under the direction of John Vaughn at Lakeside Christian School. By the time he left Lakeside's middle school in 2009, Thomas was playing with Mr. Vaughn's high school group at Brookside Christian High School, the Central Valley Youth Symphony, and some honor ensembles. Thomas started his high school career in 2009, and began playing in the Saint Mary's High School Band under the direction of Chad Brines. Throughout his high school career, Thomas played with the school's concert band, drum line, and jazz band, as well as continuing to take saxophone lessons under Mr. Vaughn. Included in his high school achievements are two World Strides Music Festivals Sweepstakes Awards (2010 & 2013), two World Strides Music Festivals individual Maestro Awards (2012 & 2013), music composer credits for the "Empowering Young Men" visual presentation, arrangement credits for drum line performances during various school events, and the San Joaquin County High School Honor Bands "Nelson Zane Award" and "Nelson Zane Scholarship." It was toward the end of his high school career when Thomas joined the music ministry at the Church of Presentation's music ministry, where he would go on to play woodwinds with the church's contemporary group "Sunday at Five" as well as co-found and direct the group "Presentation Contemporary Youth Band."

In 2013, Thomas began his college career at the University of the Pacific's Conservatory of Music as a Music Composition Major. There, he studied music composition under Dr. Francois Rose, Dr. Robert Coburn, and Dr. Eric Wood. While fulfilling his academic duties with honors, Thomas also wrote extracurricular works, having collaborated often with his fellow musicians at the Conservatory of Music. Throughout his college career, Thomas played with the Symphonic Wind Ensemble under the direction of Dr. Eric Hammer, a Chamber Music Trio under the coaching of Dr. Nicolasa Kuster, and a jazz combo under the direction of Patrick Langham. Thomas studied clarinet under Dr. Patricia Shands.

While there, Thomas also began studying and seriously pursuing music production. Taking what he learned, he began songwriting and producing his own works beginning with his album Life is a Journey. Under the guidance of Professor Keith Hatschek, Thomas was signed as an artist and producer of the school's record label "PacAve Records". Thomas also spent this time collaborating with various local artists in hip-hop, pop, and alternative genres.

Thomas held two student organization leadership roles during his time at Pacific. Thomas was voted in as Composers Club President for two terms, where he carried out his professor's vision of reshaping the club to bring back its former productive and educational environment. In 2015, Thomas was appointed as music director for the Beta Pi chapter of Phi Mu Alpha Sinfonia, where he led the chapter toward a strong musical year, including two well-received recitals, philanthropic performances, and a performance collaboration with the Stockton Symphony.

In 2017, Thomas concluded his college career with his strongest collegiate achievement- leading nearly one hundred collaborators in the production of Storybook Symphony: The Concert. The concert was an hour-long event where collaborated with students and the community in the performance of his works, which concluded with the performance of "The Beginning is the End: Storybook Symphony", an orchestral and choral piece for a concept video game designed by Cenon Corpuz. A professor said that it was one of the best student-led musical events in the school's recent history.

During his time in Southern California, Thomas has continued to work in both orchestral and popular music. In 2019, Thomas worked alongside Taylor Carnes by scoring the romantic-comedy short film, Almost Charming, which saw major success on the film festival circuit. Among other accolades, the film also received a nomination for “Best Score, Short Film” at the Shauna Shea Film Festival, and is now streaming on Amazon Prime. Thomas has also played supporting roles while working with Four Larks and LACO for several of their shows in the 2019 seasons.

Thomas is currently working with platinum-certified 3013 Music Group as a music producer for popular music, and is continuing to write music for independent film and video game projects.
        {/* <Styledh1>About</Styledh1> */}
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  /* text-align: center; */
`;

const StyledImage = styled.img`
  /* position: absolute; */
  display: block;
  width: 55%;
  margin: 0 auto;
`;

const Styledh1 = styled.h1`

  position: absolute;
  color: white;
  font-size: 6em;
  top: 15vw;
  left: 25vw;
`;