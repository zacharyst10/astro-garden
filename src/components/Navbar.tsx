function Navbar() {
  return (
    <nav className=" flex shadow-lg bg-green-50 sticky top-0 z-50">
      <img src="/logo.png" alt="" className="w-16 h-16 ml-5" />
      <div className="flex justify-center container mx-auto px-6 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <a
              className="text-gray-800 text-lg font-bold hover:text-gray-700"
              href="#"
            ></a>
          </div>
          <div className="flex items-center">
            <a
              href="#hero"
              className="text-gray-500 hover:text-green-900 mx-3 cursor-pointer"
            >
              Lifecycle
            </a>
            <a
              href="#features"
              className="text-gray-500 hover:text-green-900 mx-3 cursor-pointer"
            >
              Planner
            </a>
            <a
              href="#poop"
              className="text-gray-500 hover:text-green-900 mx-3 cursor-pointer"
            >
              Almanac
            </a>
            <a
              href="#contact"
              className="text-gray-500 hover:text-green-900 mx-3 cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
