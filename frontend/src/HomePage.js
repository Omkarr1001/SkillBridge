import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
  useScrollTrigger,
  Slide,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import MenuIcon from '@mui/icons-material/Menu';
import "./HomePage.css";
import FeaturesSection from "./FeaturesSection";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const successStories = [
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
    quote: "SkillBridge helped me transition from a beginner to a confident developer. The project-based learning approach made all the difference.",
    company: "Tech Innovators Inc."
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    quote: "The mentorship program on SkillBridge connected me with amazing industry experts who guided my design journey.",
    company: "Creative Solutions Ltd."
  },
  {
    name: "Emily Rodriguez",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=80",
    quote: "The hands-on projects and real-world challenges prepared me for my dream role in data science.",
    company: "Data Analytics Pro"
  }
];

const learningPaths = [
  {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop&q=80",
    description: "Master modern web technologies and frameworks",
    skills: ["React", "Node.js", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Data Science",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
    description: "Learn data analysis and machine learning",
    skills: ["Python", "SQL", "Machine Learning", "Statistics"]
  },
  {
    title: "UX Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&auto=format&fit=crop&q=80",
    description: "Create beautiful and functional user experiences",
    skills: ["UI Design", "User Research", "Prototyping", "Figma"]
  }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <HideOnScroll>
        <AppBar position="fixed" className="appBar">
          <Toolbar className="toolbar">
            <div className="logo-container">
              <img 
                src="https://images.unsplash.com/photo-1501290836517-b22a21c522a4?w=45&h=45&auto=format&fit=crop&q=80"
                alt="SkillBridge Logo"
                className="brand-icon"
              />
              <Typography variant="h6" className="brand-name">
                SkillBridge
              </Typography>
            </div>
            <Box className="navButtons">
              <Button className="navButton">Home</Button>
              <Button className="navButton">Courses</Button>
              <Button className="navButton">Features</Button>
              <Button className="navButton">About</Button>
              <div className="auth-buttons">
                <Button variant="outlined" className="loginButton">
                  Log In
                </Button>
                <Button variant="contained" className="signupButton">
                  Get Started
                </Button>
              </div>
            </Box>
            <IconButton className="mobile-menu-button">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <main>
        <section className="hero-section">
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <div className="hero-content">
                  <div className="hero-logo-container">
                    <Typography variant="h1" className="hero-title">
                      Master In-Demand Skills with <span className="highlight">SkillBridge</span>
                    </Typography>
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80"
                      alt="Students collaborating"
                      className="hero-banner-image"
                    />
                  </div>
                  <Typography variant="h6" className="hero-subtitle">
                    Join a community of 50,000+ learners who are building their future with industry-relevant skills. 
                    Get hands-on experience with real-world projects and personalized mentorship from top professionals.
                  </Typography>
                  <Box className="hero-buttons">
                    <Button variant="contained" className="getStartedBtn">
                      Start Your Journey
                    </Button>
                    <Button variant="outlined" className="exploreBtn">
                      Explore Courses
                    </Button>
                  </Box>
                  <Box className="hero-stats">
                    <div className="stat-highlight">
                      <Typography variant="h4">50K+</Typography>
                      <Typography>Active Learners</Typography>
                    </div>
                    <div className="stat-highlight">
                      <Typography variant="h4">200+</Typography>
                      <Typography>Expert Mentors</Typography>
                    </div>
                    <div className="stat-highlight">
                      <Typography variant="h4">95%</Typography>
                      <Typography>Success Rate</Typography>
                    </div>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="hero-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80"
                    alt="SkillBridge Learning Platform"
                    className="hero-image"
                  />
                </div>
              </Grid>
            </Grid>
            <div className="scroll-indicator">
              <KeyboardArrowDownIcon />
            </div>
          </Container>
        </section>

        <section className="value-proposition">
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Paper elevation={0} className="value-card">
                  <Typography variant="h4" className="value-title">
                    Your Journey to Career Success Starts Here
                  </Typography>
                  <Typography variant="body1" className="value-description">
                    SkillBridge combines the best of online learning with practical experience. Our platform offers 
                    structured learning paths, live mentorship sessions, and real-world projects that prepare you 
                    for your dream career. Whether you're starting from scratch or leveling up your skills, 
                    we provide the tools and support you need to succeed.
                  </Typography>
                  <Box className="value-features">
                    <div className="feature-item">
                      <img 
                        src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&auto=format&fit=crop&q=80"
                        alt="Project-based learning"
                        className="feature-icon"
                      />
                      <Typography variant="h6">Project-Based Learning</Typography>
                    </div>
                    <div className="feature-item">
                      <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=80"
                        alt="Expert mentorship"
                        className="feature-icon"
                      />
                      <Typography variant="h6">Expert Mentorship</Typography>
                    </div>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Collaborative Learning Environment"
                  className="value-image"
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Container>
        </section>

        <FeaturesSection />

        <section className="learning-paths-section">
          <Container maxWidth="lg">
            <Typography variant="h2" className="section-title text-center">
              Industry-Aligned Learning Paths
            </Typography>
            <Typography variant="h6" className="section-subtitle text-center">
              Choose from our carefully curated learning tracks designed by industry experts
            </Typography>
            <Grid container spacing={4} className="learning-paths-grid">
              {learningPaths.map((path, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card className="learning-path-card">
                    <div className="path-image-container">
                      <img src={path.image} alt={path.title} className="path-image" />
                    </div>
                    <CardContent>
                      <Typography variant="h5" className="path-title">
                        {path.title}
                      </Typography>
                      <Typography variant="body1" className="path-description">
                        {path.description}
                      </Typography>
                      <div className="skills-container">
                        {path.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section className="success-stories-section">
          <Container maxWidth="lg">
            <Typography variant="h2" className="section-title text-center">
              Success Stories
            </Typography>
            <Typography variant="h6" className="section-subtitle text-center">
              Join thousands of learners who transformed their careers with SkillBridge
            </Typography>
            <Grid container spacing={4} className="testimonials-grid">
              {successStories.map((story, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card className="testimonial-card">
                    <CardContent>
                      <FormatQuoteIcon className="quote-icon" />
                      <Typography variant="body1" className="testimonial-quote">
                        "{story.quote}"
                      </Typography>
                      <div className="testimonial-author">
                        <Avatar src={story.image} alt={story.name} className="author-avatar" />
                        <div className="author-info">
                          <Typography variant="h6" className="author-name">
                            {story.name}
                          </Typography>
                          <Typography variant="subtitle2" className="author-role">
                            {story.role}
                          </Typography>
                          <Typography variant="caption" className="author-company">
                            {story.company}
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section className="stats-section">
          <Container maxWidth="lg">
            <Grid container spacing={4} className="stats-grid">
              <Grid item xs={12} md={6}>
                <div className="stats-content">
                  <Typography variant="h2" className="stats-title">
                    Join Our Growing Community
                  </Typography>
                  <div className="stats-items">
                    <div className="stat-item">
                      <Typography variant="h3" className="stat-number">50K+</Typography>
                      <Typography variant="body1" className="stat-label">Active Learners</Typography>
                    </div>
                    <div className="stat-item">
                      <Typography variant="h3" className="stat-number">200+</Typography>
                      <Typography variant="body1" className="stat-label">Expert Mentors</Typography>
                    </div>
                    <div className="stat-item">
                      <Typography variant="h3" className="stat-number">1000+</Typography>
                      <Typography variant="body1" className="stat-label">Success Stories</Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="stats-image-container">
                  <img 
                    src="https://ik.imagekit.io/skillbridge/stats-illustration.png?tr=w-700" 
                    alt="SkillBridge Impact" 
                    className="stats-image"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section className="cta-section">
          <Container maxWidth="md">
            <Paper elevation={3} className="cta-card">
              <Typography variant="h4" className="cta-title">
                Ready to Transform Your Career?
              </Typography>
              <Typography variant="body1" className="cta-description">
                Take the first step towards your dream career. Join SkillBridge today and get access to 
                expert-led courses, personalized mentorship, and a supportive community of learners.
              </Typography>
              <Button variant="contained" className="cta-button">
                Get Started Now
              </Button>
            </Paper>
          </Container>
        </section>
      </main>

      <footer className="footer">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="footer-title">
                SkillBridge
              </Typography>
              <Typography variant="body2" className="footer-description">
                Bridging the gap between learning and success
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <Typography variant="subtitle1" className="footer-subtitle">
                    Platform
                  </Typography>
                  <Typography variant="body2">Features</Typography>
                  <Typography variant="body2">Projects</Typography>
                  <Typography variant="body2">Mentors</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="subtitle1" className="footer-subtitle">
                    Resources
                  </Typography>
                  <Typography variant="body2">Blog</Typography>
                  <Typography variant="body2">Guides</Typography>
                  <Typography variant="body2">FAQ</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box className="footer-bottom">
            <Typography variant="body2">
              © 2025 SkillBridge. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
