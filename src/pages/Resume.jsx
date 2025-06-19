// src/pages/Resume.jsx
export default function Resume() {
  // works as "/" during local dev and "/Portfolio/" in production
  const pdfPath = `${import.meta.env.BASE_URL}Eshan_Agarwal_Resume.pdf`;

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">My Resume</h2>
        <p className="text-lg mb-6">
          View or download my resume below.
        </p>

        {/* Download button */}
        <a
          href={pdfPath}
          download="Eshan_Agarwal_Resume.pdf"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition mb-6"
        >
          ⬇️ Download&nbsp;Resume
        </a>

        {/* Embedded PDF preview */}
        <div className="w-full h-[80vh] border shadow-md">
          <embed
            src={pdfPath}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
}
