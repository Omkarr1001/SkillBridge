import React from 'react';
import './FeaturesSection.css';
import { Typography, Box } from '@mui/material';

const features = [
  {
    title: 'User Authentication',
    highlightText: 'Secure & Simple',
    image: '/images/authentication.png',
    description: 'Enterprise-grade security with seamless login experience.',
    color: '#4CAF50'
  },
  {
    title: 'Smart Projects',
    highlightText: 'AI-Powered',
    image: '/images/projects.png',
    description: 'Get personalized project recommendations based on your skills.',
    color: '#2196F3'
  },
  {
    title: 'Expert Mentorship',
    highlightText: '1-on-1 Sessions',
    image: '/images/mentor.png',
    description: 'Connect and learn from industry professionals.',
    color: '#9C27B0'
  },
  {
    title: 'Progress Tracking',
    highlightText: 'Real-time',
    image: '/images/dashboard.png',
    description: 'Monitor your growth with detailed analytics dashboard.',
    color: '#FF9800'
  },
  {
    title: 'Team Collaboration',
    highlightText: 'Build Together',
    image: '/images/team.png',
    description: 'Work on real-world projects with other learners.',
    color: '#E91E63'
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <div 
      className="feature-card"
      style={{ 
        '--feature-color': feature.color,
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="feature-image-wrapper">
        <img 
          src={feature.image} 
          alt={feature.title} 
          className="feature-image"
          loading="lazy"
        />
      </div>
      <Box className="feature-content">
        <Typography 
          variant="overline" 
          className="feature-highlight"
          style={{ color: feature.color }}
        >
          {feature.highlightText}
        </Typography>
        <Typography variant="h5" className="feature-title">
          {feature.title}
        </Typography>
        <Typography variant="body1" className="feature-description">
          {feature.description}
        </Typography>
      </Box>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <Typography variant="h2" className="section-title">
          Powerful Features
        </Typography>
        <Typography variant="h6" className="section-subtitle">
          Everything you need to accelerate your learning journey
        </Typography>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
