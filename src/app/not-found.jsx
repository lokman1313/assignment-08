import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-extrabold tracking-widest text-red-500">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="text-gray-300 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 transition font-semibold"
          >
            Go Home
          </Link>

          <Link
            href="/allTiles"
            className="px-6 py-3 rounded-2xl border border-gray-500 hover:bg-gray-800 transition font-semibold"
          >
            Browse Tiles
          </Link>
        </div>

        <div className="pt-10 text-sm text-gray-500">
          If you think this is a mistake, try refreshing or check the URL.
        </div>
      </div>
    </div>
  );
}
