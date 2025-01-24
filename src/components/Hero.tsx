import { Github, Linkedin, Code } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-android-green/10 to-android-blue/10">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-android-blue mb-6">
            Android Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Crafting beautiful and performant mobile experiences
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-android-blue hover:text-android-green transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-android-blue hover:text-android-green transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="#projects"
              className="text-android-blue hover:text-android-green transition-colors"
            >
              <Code size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;