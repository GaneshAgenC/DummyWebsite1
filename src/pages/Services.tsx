// src/pages/Services.tsx

export default function Services() {
  const services = [
    {
      title: "Brand Strategy",
      description:
        "We help you define a compelling brand narrative, identify market opportunities, and position your brand for long-term success.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our designers create intuitive user experiences and stunning interfaces that drive engagement and conversion.",
    },
    {
      title: "Content Marketing",
      description:
        "From blogs to social media, we develop a content strategy that attracts, educates, and converts your target audience.",
    },
    {
      title: "SEO Optimization",
      description:
        "Our SEO experts optimize your site to rank higher in search engines, improving visibility and driving organic traffic.",
    },
    {
      title: "Web Development",
      description:
        "We build fast, responsive, and scalable websites that bring your ideas to life and support your business goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-12">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-2">Our Services</h1>
        <p className="max-w-2xl mx-auto">
          Inspira offers a range of digital services tailored to elevate your
          brand and connect you with your audience.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
