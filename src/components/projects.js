import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Global COVID-19 Tracker */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#27221F'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(covid-19-tracker.png) center / cover'}} ></CardTitle>
            <h2 style={{color: '#fff', textAlign: 'center'}}>Global COVID-19 Tracker</h2>
            <CardText style={{color: '#fff', textAlign: 'center'}}>
            This tracker allows you to stay current on the pandemic stats globaly.
            </CardText>
            <CardActions border style={{color: '#fff', textAlign: 'center'}}>
              <a href='https://github.com/paschalihenacho/COVID-19-Tracker_Updated'><Button style={{color: '#fff'}}><i className="fa fa-github-square fa-2x" aria-hidden="true" />GitHub</Button></a>
              <a href='https://paschalihenacho.github.io/COVID-19-Tracker_Updated/index.html'><Button style={{color: '#fff'}}><i className="fa fa fa fa-play-circle fa-2x" aria-hidden="true" />Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* IdeaEXPO */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#27221F'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(ideaEXPO.png) center / cover'}} ></CardTitle>
            <h2 style={{color: '#fff', textAlign: 'center'}}>IdeaEXPO</h2>
            <CardText style={{color: '#fff', textAlign: 'center'}}>
            Expose and startup your ideas with the world!!
            </CardText>
            <CardActions border style={{color: '#fff', textAlign: 'center'}}>
              <a href='https://github.com/szaster/IdeaEXPO'><Button style={{color: '#fff'}}><i className="fa fa-github-square fa-2x" aria-hidden="true" />GitHub</Button></a>
              <a href='http://ideaexpo.herokuapp.com'><Button style={{color: '#fff'}}><i className="fa fa fa-play-circle fa-2x" aria-hidden="true" />Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

           {/* Workout Tracker */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#27221F'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(workout-tracker.png) center / cover'}} ></CardTitle>
            <h2 style={{color: '#fff', textAlign: 'center'}}>Workout Tracker</h2>
            <CardText style={{color: '#fff', textAlign: 'center'}}>
            Workout tracker that allows user to view, create, and track daily workouts.
            </CardText>
            <CardActions border style={{color: '#fff', textAlign: 'center'}}>
              <a href='https://github.com/paschalihenacho/Workout-Tracker'><Button style={{color: '#fff'}}><i className="fa fa-github-square fa-2x" aria-hidden="true" />GitHub</Button></a>
              <a href='https://excercises-tracker.herokuapp.com/'><Button style={{color: '#fff'}}><i className="fa fa fa-play-circle fa-2x" aria-hidden="true" />Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
        


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Employee's Record */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#27221F'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(employees-record.png) center / cover'}} ></CardTitle>
            <h2 style={{color: '#fff', textAlign: 'center'}}>Employee's Record</h2>
            <CardText style={{color: '#fff', textAlign: 'center'}}>
            Allows employer to view entire employee directory to easily have quick access to their information.
            </CardText>
            <CardActions border style={{color: '#fff', textAlign: 'center'}}>
              <a href='https://github.com/paschalihenacho/Employee-Directory/tree/master'><Button style={{color: '#fff'}}><i className="fa fa-github-square fa-2x" aria-hidden="true" />GitHub</Button></a>
              <a href='https://paschalihenacho.github.io/Employee-Directory/'><Button style={{color: '#fff'}}><i className="fa fa fa fa-play-circle fa-2x" aria-hidden="true" />Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Employee's Record */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#27221F'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(vuejs.png) center / cover'}} ></CardTitle>
            <h2 style={{color: '#fff', textAlign: 'center'}}>Vuejs project is in development 😀...</h2>
            <CardText style={{color: '#fff', textAlign: 'center'}}>
            Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. 
            </CardText>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          
            {/* Eat-Da-Burger! */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#27221F'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(Eat-Da-Burger!.png) center / cover'}} ></CardTitle>
            <h2 style={{color: '#fff', textAlign: 'center'}}>Eat-Da-Burger!</h2>
            <CardText style={{color: '#fff', textAlign: 'center'}}>
            A burger devouring app using the MVC architectural pattern.
            </CardText>
            <CardActions border style={{color: '#fff', textAlign: 'center'}}>
              <a href='https://github.com/paschalihenacho/Eat-Da-Burger'><Button style={{color: '#fff'}}><i className="fa fa-github-square fa-2x" aria-hidden="true" />GitHub</Button></a>
              <a href='https://benefique-livre-56942.herokuapp.com'><Button style={{color: '#fff'}}><i className="fa fa fa-play-circle fa-2x" aria-hidden="true" />Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

           {/* JavaScript Coding Quiz */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#27221F'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(codingQuiz.png) center / cover'}} ></CardTitle>
            <h2 style={{color: '#fff', textAlign: 'center'}}>Eat-Da-Burger!</h2>
            <CardText style={{color: '#fff', textAlign: 'center'}}>
              A quiz application that test your knowledge of JavaScript programming. 
            </CardText>
            <CardActions border style={{color: '#fff', textAlign: 'center'}}>
              <a href='https://github.com/paschalihenacho/CodingQuiz'><Button style={{color: '#fff'}}><i className="fa fa-github-square fa-2x" aria-hidden="true" />GitHub</Button></a>
              <a href='https://paschalihenacho.github.io/CodingQuiz/'><Button style={{color: '#fff'}}><i className="fa fa fa-play-circle fa-2x" aria-hidden="true" />Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Weather*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', background: '#27221F'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(weather.png) center / cover'}} ></CardTitle>
            <h2 style={{color: '#fff', textAlign: 'center'}}>Weather Dashboard</h2>
            <CardText style={{color: '#fff', textAlign: 'center'}}> 
            This web and mobile responsive application provides daily and 5-day weather forecasts.
            </CardText>
            <CardActions border style={{color: '#fff', textAlign: 'center'}}>
              <a href='https://github.com/paschalihenacho/Weather-Dashboard'><Button style={{color: '#fff'}}><i className="fa fa-github-square fa-2x" aria-hidden="true" />GitHub</Button></a>
              <a href='https://paschalihenacho.github.io/Weather-Dashboard/'><Button style={{color: '#fff'}}><i className="fa fa fa-play-circle fa-2x" aria-hidden="true" />Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>JavaScript/MongoDB</Tab>
          <Tab>React</Tab>
          <Tab>VueJS</Tab>
          <Tab>MVC</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
