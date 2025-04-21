// src/pages/Home.tsx

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-900 text-white py-6 px-4 md:px-12">
        <h1 className="text-3xl font-bold">
          Inspira - Digital Creative Agency
        </h1>
        <p className="text-sm mt-2 max-w-xl">
          Inspiring your brand with strategic creativity and digital excellence.
        </p>
      </header>

      <main className="p-4 md:p-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Crafting Digital Experiences</h2>
          <p className="max-w-2xl mx-auto">
            We help brands grow by designing meaningful websites, compelling
            campaigns, and memorable experiences.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Work with us
          </button>
        </section>

        {/* Services Preview */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Brand Strategy", "UI/UX Design", "Content Marketing"].map(
              (service, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 shadow hover:shadow-md transition"
                >
                  <h4 className="text-xl font-semibold mb-2">{service}</h4>
                  <p>
                    We provide tailored {service.toLowerCase()} services that
                    align with your brand goals and drive engagement.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">What Our Clients Say</h3>
          <blockquote className="italic border-l-4 border-blue-600 pl-4">
            “Inspira transformed our online presence and delivered measurable
            results. Their creativity and commitment is unmatched.”
          </blockquote>
          <p className="mt-2 text-right">— Alex, Marketing Lead at Zephyr</p>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Inspira. All rights reserved.</p>
      </footer>
    </div>
  );
}
