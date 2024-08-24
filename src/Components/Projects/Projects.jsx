import React from 'react';
import './Projects.css';
import { Element } from 'react-scroll';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Project_info } from '../../Utils/data';

const ProjectInfo = ({ items }) => {
  return items.map((item, index) => (
    <Card key={index} sx={{
        maxWidth: 345 ,
        minHeight: '23rem',
        borderRadius: '0.65rem',
        border: '1.5px solid #6751b9',
        backgroundColor: 'rgba(22,17,47,0.398)',
        backdropFilter:'blur(1rem)',
        padding: 'auto'
    }}  className='card' >
      <CardMedia
        component="img"
        alt={item.altText || "Project Image"}
        height="140"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"
        sx={{fontSize: '1.2rem', 
            color: '#ffff',
        }}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary"
        sx={{fontSize: '1rem', 
            color: '#7c66e3',
        }}>          
        {item.techstack}
        </Typography>
        <Typography variant="body2" color="text.secondary"
        sx={{fontSize: '1rem', 
            color: '#7c66e3', paddingTop: "4px"
        }}> 
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Button size="small" sx={{fontSize: '0.8rem', 
            backgroundColor: '#6751b9', // Background color
            color: '#fff', // Text color
            '&:hover': {
              backgroundColor: '#7c66e3',
            },
            marginLeft:'20px',
            marginTop:'relative',
            padding: '5px'
        }} LinkComponent={item.link}
        > GitHub Link</Button></a>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  ));
}

const Projects = () => {
  return (
    <Element name='projects'>
      <section className='projects-container'>
        <h5>Projects</h5>
        <div className='projects-content'>
          <ProjectInfo items={Project_info} />
        </div>
      </section>
    </Element>
  )
}

export default Projects;
