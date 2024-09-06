import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Background from '../components/Background';

function Projects() {
    return (
        <div>
            <NavBar />
            <ProjectShowcase />
            <Footer />
            <Background />
        </div>
    );
}

export default Projects;