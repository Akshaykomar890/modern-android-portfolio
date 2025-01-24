const Footer = () => {
  return (
    <footer className="bg-android-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-2">© {new Date().getFullYear()} Android Developer Portfolio</p>
          <p className="text-sm text-gray-400">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;