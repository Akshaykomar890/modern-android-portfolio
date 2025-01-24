const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-android-blue text-center mb-12">
          Get In Touch
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-android-blue mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-android-green"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-android-blue mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-android-green"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-android-blue mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-android-green"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-android-green text-white py-3 rounded-lg hover:bg-android-green/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;