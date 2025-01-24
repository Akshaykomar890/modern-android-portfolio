const Skills = () => {
  const skills = [
    { category: "Languages", items: ["Kotlin", "Java", "XML"] },
    { category: "Development Tools", items: ["Android Studio", "Git", "Gradle"] },
    { category: "Libraries", items: ["Jetpack Compose", "Room", "Retrofit"] },
    { category: "Architecture", items: ["MVVM", "Clean Architecture", "Repository Pattern"] },
  ];

  return (
    <section id="skills" className="py-20 bg-framer-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-framer-primary to-framer-accent bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.category} 
              className="group p-8 rounded-xl border border-framer-muted/20 bg-gradient-to-b from-framer-bg/50 to-framer-bg hover:border-framer-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-framer-primary mb-6 group-hover:text-framer-accent transition-colors">
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li 
                    key={item} 
                    className="text-framer-secondary hover:text-framer-text transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;