import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fitness Tracker App",
      description: "A comprehensive fitness tracking application with workout plans and progress monitoring.",
      technologies: ["Kotlin", "MVVM", "Room Database"],
      github: "https://github.com",
      live: "https://playstore.com",
    },
    {
      title: "Weather App",
      description: "Real-time weather updates with location-based forecasts and notifications.",
      technologies: ["Jetpack Compose", "Retrofit", "Location Services"],
      github: "https://github.com",
      live: "https://playstore.com",
    },
    {
      title: "Task Manager",
      description: "Productivity app with task organization and reminder features.",
      technologies: ["Kotlin", "Clean Architecture", "WorkManager"],
      github: "https://github.com",
      live: "https://playstore.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-framer-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-framer-primary to-framer-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group p-8 rounded-xl border border-framer-muted/20 bg-gradient-to-b from-framer-bg/50 to-framer-bg hover:border-framer-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-framer-text mb-4 group-hover:text-framer-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-framer-secondary mb-6 min-h-[80px]">
                {project.description}
              </p>
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-framer-primary/10 text-framer-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-framer-secondary hover:text-framer-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-framer-secondary hover:text-framer-primary transition-colors"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;