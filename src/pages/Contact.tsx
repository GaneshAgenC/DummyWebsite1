// src/pages/Contact.tsx

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-12 max-w-2xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p>
          Have a project in mind or just want to say hello? We'd love to hear
          from you.
        </p>
      </header>

      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className="w-full border p-2 rounded"
            rows={5}
            placeholder="How can we help you?"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
