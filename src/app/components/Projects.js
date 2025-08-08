import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: 'School Template for Chenab Group of Schools',
            description: 'Created a full-stack school website using React, Node.js, Express, and MongoDB. The site includes a secure admin panel, dynamic student data management, and a responsive, user-friendly design for seamless access across devices.',
            image: '/Chenab.png', // Replace with the actual image path
            link: 'https://school-template-timi.vercel.app/', // Link to the project
        },
        {
            title: 'SkillMatch.Tech: A Complete Clone',
            description: 'Built a full-stack eCommerce shoe store using React, Node.js, Express, and MongoDB. Implemented secure auth, dynamic product views, and real-time cart features with toast alerts and live total updates via RESTful APIs.',
            image: '/Skill.png', // Replace with the actual image path
            link: 'https://www.skillmatch.tech/', // Link to the project
        },
        {
            title: 'StepHub: A Shoe Store Template',
            description: 'Developed a full-stack Shoes Store application with secure user authentication, dynamic product display, and real-time cart management. Integrated toast notifications and total price calculation, with all data handled via a backend API connected to MongoDB.',
            image: '/Store.png', // Replace with the actual image path
            link: 'https://step-hub-hafg.vercel.app/', // Link to the project
        },
        {
            title: 'Timer App: A Simple Timer Application',
            description: 'Created a simple timer application using React. The app allows users to set timers, start, pause, and reset them, providing a clean and intuitive interface for time management in HH MM SS format with complete validation.',
            image: '/Timer.png', // Replace with the actual image path
            link: 'https://timer-app-iota-three.vercel.app/', // Link to the project
        },
        {
            title: 'Quiz App: A Simple Quiz Application',
            description: 'Created a simple quiz application using React. The app allows users to take quizzes, view results, and track progress, providing an engaging and interactive learning experience with a user-friendly interface.',
            image: '/Quiz.png', // Replace with the actual image path
            link: 'https://quiz-app-ldtj.vercel.app/', // Link to the project
        },
    ];

    return (
        <section id="projects" className="py-5">
            <div className="container position-relative">
                <h2
                    className="text-center"
                    style={{
                        fontSize: "3rem", // Match the Hero section heading size
                        fontWeight: "600", // Match the boldness of the Hero section heading
                        letterSpacing: "1.5px", // Subtle letter spacing for consistency
                        marginBottom: "20px", // Space below heading
                        position: "relative",
                    }}
                >
                    My Projects
                </h2>
                <p className="text-center position-relative">
                    Here are some of the projects I’ve worked on recently.
                </p>
                <div className="row">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}