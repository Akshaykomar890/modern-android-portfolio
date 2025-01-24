const Skills = () => {
  const skills = [
    { category: "Languages", items: ["Kotlin", "Java", "XML"] },
    { category: "Development Tools", items: ["Android Studio", "Git", "Gradle"] },
    { category: "Libraries", items: ["Jetpack Compose", "Room", "Retrofit"] },
    { category: "Architecture", items: ["MVVM", "Clean Architecture", "Repository Pattern"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-android-blue text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-android-green mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">
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