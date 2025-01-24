const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-android-blue text-center mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            I'm a passionate Android developer with a strong focus on creating intuitive and performant mobile applications. With expertise in Kotlin and Java, I bring ideas to life through clean code and material design principles.
          </p>
          <p className="text-lg text-gray-600">
            My goal is to develop applications that not only meet technical requirements but also provide an exceptional user experience. I stay up-to-date with the latest Android development trends and best practices to ensure my work is always cutting-edge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;