export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Full Stack Developer – Freelance</h3>
          <p className="text-sm text-gray-500">Jan 2024 – Present</p>
          <p>Built and deployed full-stack applications using Next.js, MongoDB, and Express. Worked on payment integration and backend APIs.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Backend Developer Intern</h3>
          <p className="text-sm text-gray-500">Aug 2023 – Dec 2023</p>
          <p>Created RESTful APIs and admin dashboards using Node.js, SQL, and AWS. Implemented authentication and system design best practices.</p>
        </div>
      </div>
    </div>
  );
}