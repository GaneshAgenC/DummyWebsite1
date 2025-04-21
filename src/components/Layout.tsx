// src/components/Layout.tsx

import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">
            <Link to={"/"}>Inspira</Link>
          </h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <Link to="/blog" className="hover:underline">
              Blog
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Inspira. All rights reserved.</p>
      </footer>
    </div>
  );
}
