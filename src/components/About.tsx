const About = () => {
  return (
    <section id="about" className="py-20 bg-framer-bg text-framer-text">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-framer-primary to-framer-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-framer-secondary leading-relaxed">
            I'm a passionate Android developer with a strong focus on creating intuitive and performant mobile applications. With expertise in Kotlin and Java, I bring ideas to life through clean code and material design principles.
          </p>
          <p className="text-xl text-framer-secondary leading-relaxed">
            My goal is to develop applications that not only meet technical requirements but also provide an exceptional user experience. I stay up-to-date with the latest Android development trends and best practices to ensure my work is always cutting-edge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;