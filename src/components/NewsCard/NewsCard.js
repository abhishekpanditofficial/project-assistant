import React,{useState,useEffect,createRef} from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './styles';
import classNames from 'classnames';

function NewsCard({project: {description,createdAt,source,name,github,image},i,activeProjects}) {
  const classes= useStyles();
  const [elRefs,setElRefs]= useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  useEffect(() =>{
      setElRefs((refs) => Array(55).fill().map((_,i) => refs[i] || createRef()));
  }, [])

  useEffect(() =>{
     if(i === activeProjects && elRefs[activeProjects]){
         scrollToRef(elRefs[activeProjects]);
     }
  }, [i,activeProjects,elRefs])


    return (
       <Card ref={elRefs[i]} className={classNames(classes.card,activeProjects === i ? classes.activeCard : null)}>
           <CardActionArea href={source || github} target="_blank">
               <CardMedia className={classes.media} image={image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwVoZ1Gm4M0iyL6nPI2goFi5olJ2jdJSRvg&usqp=CAU'} />
               <div className={classes.details}>
                   <Typography variant="body2" color="textSecondary" component="h2">{(new Date(createdAt)).toDateString()}</Typography>
                   <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
               </div>
               <Typography className={classes.title} gutterBottom variant="h5">{name}</Typography>
               <CardContent>
                   <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
               </CardContent>
           </CardActionArea>
           <CardActions className={classes.cardActions}>
               <Button size="small" color="primary">Learn More</Button>
               <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
           </CardActions>
       </Card>
    )
}

export default NewsCard
