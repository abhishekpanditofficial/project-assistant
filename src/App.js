import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const alanKey= '68f2b0f9e87aaa17529dd20f9e6578802e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const classes= useStyles();
  const [projects,setProjects]= useState([]);
 const [activeProjects,setActiveProjects]= useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand:({command, projects,number}) =>{
        if(command === 'newProjects'){
         setProjects(projects);
         setActiveProjects(-1);
        } else if(command === 'highlight'){
            setActiveProjects((p) => p + 1);   
        } else if(command === 'open'){
           const parsedNumber= number.length > 2 ? wordsToNumbers(number,{fuzzy: true}) : number;
           const project= projects[parsedNumber - 1];
          
         
          if(parsedNumber > 55){
            alanBtn().playText('Please try that again');
          }else {
            if(project.source){
              window.open(project.source, '_blank');
              alanBtn().playText('Opening.....');
            }else{
              window.open(project.github, '_blank');
              alanBtn().playText('Live site not found, opening github repo');
            }
          }
          
        }
      }

    })
  }, [])

 

  return (
     <div>
      <div className={classes.logoContainer}> 
      <img src="https://i.ibb.co/tHHZxCJ/20210908-001936-0000.png" className={classes.alanLogo} alt="alan logo"/> 
      {projects.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open project number [2]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
 
      </div>
     <NewsCards projects={projects} activeProjects={activeProjects} /> 
     </div>
  );
}

export default App;
