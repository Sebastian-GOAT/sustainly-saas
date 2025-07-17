import Link from 'next/link';
import sustainlyMascot404 from '@/assets/mascot/404.png';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">

          {/* Sustainly icon */}

          <img
            src={sustainlyMascot404.src}
            alt="Icon of Sustainly"
            className="w-52"
          />

        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="py-2 px-4 max-w-48 mx-auto text-lg font-bold bg-[var(--sustainly-purple)] flex justify-center outline-none rounded-full"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
