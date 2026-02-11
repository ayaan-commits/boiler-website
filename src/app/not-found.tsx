import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-grey">
      <div className="text-center max-w-lg mx-auto px-4">
        <p className="text-8xl font-heading font-bold text-accent mb-4">404</p>
        <h1 className="text-3xl font-heading font-bold text-primary mb-3">Page Not Found</h1>
        <p className="text-text-secondary mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
