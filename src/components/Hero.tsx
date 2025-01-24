import { Github, Linkedin, Code } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-framer-bg text-framer-text relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-framer-primary/20 via-framer-accent/20 to-framer-primary/20 opacity-30 animate-gradient bg-[length:200%_200%]" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-framer-primary to-framer-accent bg-clip-text text-transparent">
            Android Developer
          </h1>
          <p className="text-xl md:text-2xl text-framer-secondary mb-12 max-w-2xl mx-auto">
            Crafting beautiful and performant mobile experiences with modern Android development
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-framer-text hover:text-framer-primary transition-colors duration-300"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-framer-text hover:text-framer-primary transition-colors duration-300"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="#projects"
              className="text-framer-text hover:text-framer-primary transition-colors duration-300"
            >
              <Code size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;