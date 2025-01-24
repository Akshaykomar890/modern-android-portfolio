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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-android-blue text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-android-blue mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-android-green/10 text-android-green px-3 py-1 rounded-full text-sm"
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
                  className="text-android-blue hover:text-android-green transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-android-blue hover:text-android-green transition-colors"
                >
                  <ExternalLink size={20} />
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