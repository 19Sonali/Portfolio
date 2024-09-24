import React from 'react';
import { Element } from 'react-scroll';
import './Education.css';
import { Timeline } from '@mantine/core';
import * as Icons from '@tabler/icons-react';
import { Education_details } from '../../Utils/data';
import { motion } from 'framer-motion';

const TimelineItem = ({ items }) => {
  return items.map((item, index) => (
    <Timeline.Item
      key={index}
      bullet={<Icons.IconSchool color='#2a2252' size={20} />}
    >
      <motion.div
        className='education-card'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger the animations
      >
        <div className='education-details'>
          <h1>{item.title}</h1>
          <h2>{item.name}</h2>
          <h2>{item.marks}</h2>
          <h2>{item.year}</h2>
        </div>
      </motion.div>
    </Timeline.Item>
  ));
}

const Education = () => {
  return (
    <Element name='education'>
      <section className='education-container'>
        <h5>Education</h5>
        <div className='education-content'>
          <Timeline color='#6852ba' active={3} bulletSize={35} lineWidth={4}>
            <TimelineItem items={Education_details} />
          </Timeline>
        </div>
      </section>
    </Element>
  );
}

export default Education;
