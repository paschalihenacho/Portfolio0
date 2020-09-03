import React, { Component } from 'react';
//import { Grid, Cell } from 'react-mdl';
import { Image, Grid, Button, Icon } from 'semantic-ui-react'


class Landing extends Component {
  render() {
    return(
      <div >
        <Grid className="landing-grid" style={{width: '100%', marginTop: '50px', padding: '30px',}}>
        <Grid.Column>
            <Image
              src="./ProfileImage.png"
              alt="ProfileImage"
              className="ProfileImage.png"
              centered columns={2}
              size='medium' circular
              style={{padding: '30px',}}
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB|
             Vue | Vuetify | API | C# | Git </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/paschal-ihenacho/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/paschalihenacho" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="www.youtube.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
        </div>
            </div>
            </Grid.Column>
        </Grid>
        <div>
        </div>
      </div>
    )
  }
}

export default Landing;
