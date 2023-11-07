import ClientButton from "./ClientButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="mb-6 text-2xl font-bold text-center">
          Welcome to FOSSCU Ticketing System
        </p>

        <div className="mt-8 text-center">
          <h2 className="mb-4 text-lg">
            Get your tickets for the upcoming events now!
          </h2>
          <ClientButton />
        </div>
      </div>

      <div className="mt-24 grid text-center lg:max-w-5xl lg:w-full lg:text-left">
        {/* You can update these sections to provide more details about FOSSCU and the events */}
        <div className="p-5">
          <h2 className="mb-3 text-2xl font-semibold">
            About FOSSCU
          </h2>
          <p className="text-sm opacity-70">
            Detailed information about FOSSCU and its objectives.
          </p>
        </div>

        <div className="p-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Events
          </h2>
          <p className="text-sm opacity-70">
            Learn about our upcoming and past events.
          </p>
        </div>

        <div className="p-5">
          <h2 className="mb-3 text-2xl font-semibold">
            FAQ
          </h2>
          <p className="text-sm opacity-70">
            Common questions about ticketing and the events.
          </p>
        </div>

        <div className="p-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Contact Us
          </h2>
          <p className="text-sm opacity-70">
            Have questions? Reach out to us directly.
          </p>
        </div>
      </div>
    </main>
  )
}
