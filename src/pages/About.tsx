export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">About Us</h1>
        <p className="max-w-2xl mx-auto">
          Inspira is a team of designers, strategists, and technologists
          committed to building brands that make an impact.
        </p>
      </header>

      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            To empower businesses with innovative digital solutions that elevate
            their brand presence and connect them to their audiences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {["Rachel", "Marcus", "Anika"].map((name) => (
              <div key={name} className="border rounded-lg p-4 shadow">
                <div className="h-32 bg-gray-200 mb-4 rounded" />
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm">
                  {name} is a core part of our team bringing creativity and
                  energy to every project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
