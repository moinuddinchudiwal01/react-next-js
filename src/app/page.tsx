import GreetingCard from "@/components/GreetingCard";

export default function Home() {
  return (
    <div className='bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6'>
      {/* Hero Section */}
      <section className='text-center max-w-3xl'>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-900'>
          Welcome to <span className='text-blue-600'>MyWebsite</span>
        </h1>
        <p className='mt-4 text-lg text-gray-600'>
          A modern Next.js + TailwindCSS starter template to kickstart your
          project.
        </p>

        <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition'>
            Get Started
          </button>
          <button className='bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition'>
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className='mt-16 grid gap-8 md:grid-cols-3 max-w-5xl w-full'>
        <div className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
          <h3 className='text-xl font-semibold text-gray-800'>⚡ Fast</h3>
          <p className='mt-2 text-gray-600'>
            Built with Next.js and TailwindCSS for high performance.
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
          <h3 className='text-xl font-semibold text-gray-800'>🎨 Modern</h3>
          <p className='mt-2 text-gray-600'>
            Clean, responsive design with minimal boilerplate.
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
          <h3 className='text-xl font-semibold text-gray-800'>
            🚀 Ready to Use
          </h3>
          <p className='mt-2 text-gray-600'>
            Comes with Navbar, Footer, and basic setup so you can focus on
            building.
          </p>
        </div>
      </section>
    </div>
  );
}
