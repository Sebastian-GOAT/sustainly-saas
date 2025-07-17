import { Button } from '@/components/ui/button';
import { ArrowRight, Link as LinkIcon, ChartLine, Share2 } from 'lucide-react';
import mascotBoard from '@/assets/mascot/board-main.png';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="py-20 bg-[var(--sustainly-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Create ESG reports</span>
                <span className="block text-[#D8AFFF] underline">Faster Than Ever</span>
              </h1>
              <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                A non-financial reporting tool that makes it easy for you to meet
                European standards and your customers’ expectations.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Link href='/sign-up'>
                  <Button
                    size="lg"
                    className="text-lg text-[var(--sustainly-blue)] bg-[var(--sustainly-purple)] hover:bg-white font-bold rounded-2xl cursor-pointer"
                  >
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">

              {/* Mascot with board */}

              <img
                src={mascotBoard.src}
                alt="Mascot with board"
                className="w-[480px] max-w-screen"
              />

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[var(--sustainly-light-green)] text-white">
                <LinkIcon className="w-6 h-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium">
                  Connect & Import
                </h2>
                <p className="mt-2 text-base">
                  Easily connect your systems or upload spreadsheets.
                  Sustainly pulls in ESG-related data from internal tools, suppliers, and other sources.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[var(--sustainly-light-green)] text-white">
                <ChartLine className="w-6 h-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium">
                  Analyze & Track
                </h2>
                <p className="mt-2">
                  Get automated insights, risk scores, and gap analysis.
                  Quickly understand where your sustainability performance stands.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[var(--sustainly-light-green)] text-white">
                <Share2 className="w-6 h-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium">
                  Report & Share
                </h2>
                <p className="mt-2">
                  Generate CSRD-ready reports or share dashboards with stakeholders.
                  Compliant, transparent, and up-to-date reporting in just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to elevate your ESG reporting with Sustainly?
              </h2>
              <p className="mt-3 max-w-3xl text-lg">
                Sustainly empowers your business to meet European ESG standards 
                and exceed stakeholder expectations. Our platform streamlines non-
                financial reporting, so you can focus on driving real sustainability 
                impact while we handle the complexity of compliance and transparency.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Link href='/pricing'>
                <Button
                  size="lg"
                  className="text-lg rounded-2xl bg-[var(--sustainly-purple)] hover:bg-white text-[var(--sustainly-blue)] font-bold flex items-center cursor-pointer"
                >
                  View pricing
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
