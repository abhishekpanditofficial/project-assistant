import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles';

const infoCards = [
    { color: '#00838f', title: 'All Projects', text: 'show me projects' },
    { color: '#1565c0', title: 'React Projects', info: 'Facebook-Clone,Voice-Assistant,Team-Chat,Netflix-Clone,Ecommerce-App', text: 'Show me react projects' },
    { color: '#4527a0', title: 'Express Projects', info: 'Amazon-price-ticker,Zoom-clone,Url-Shortener', text: 'Show me express projects' },
    { color: '#283593', title: 'Javascript Projects', info: 'Snake-Game,Tic-Tac-Toe,Piano,Password-Generator', text: 'Show me javascript projects' },
  ];

function NewsCards({ projects , activeProjects }) {
    const classes = useStyles();
    if(projects.length === 0){
        return (
            <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                     {infoCards.map((infoCard) =>(
                         <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                           <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                               <Typography variant="h5">{infoCard.title}</Typography>
                               {infoCard.info ? ( <Typography variant="h6"><strong>{infoCard.title.split(' ')[2]} </strong><br /> {infoCard.info} </Typography>)  : null}
                             <Typography variant="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                           </div>
                         </Grid>
                     ))}
                   </Grid>
               </Grow>   
        )
    }
    return (
       <Grow in>
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
           {projects.map((project,i) =>{
              return (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
              <NewsCard activeProjects={activeProjects} project={project} i={i}/>
            </Grid>
              );
           })}
           </Grid>
            
       </Grow>
         
      
    )
}

export default NewsCards
