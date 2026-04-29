import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6">
      <div className="text-center max-w-xl">

        {/* 404 Title */}
        <h1 className="text-8xl font-extrabold text-green-600 drop-shadow-md">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600">
          Looks like the page you're searching for doesn't exist or has been moved.
          Maybe the cow ran away 🐄💨
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link href="/">
            <button className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 transition duration-300">
              Go Back Home
            </button>
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-10 text-6xl opacity-30">
          🐄 🐐 🐑
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
