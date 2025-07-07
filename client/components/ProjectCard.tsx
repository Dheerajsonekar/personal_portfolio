export default function ProjectCard({ title, description, githubUrl, demoUrl, techStack }: any) {
  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 my-2">{description}</p>
      <div className="flex gap-2 flex-wrap mb-2">
        {techStack?.map((tech: string) => (
          <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={githubUrl} target="_blank" className="text-blue-600 hover:underline">GitHub</a>
        <a href={demoUrl} target="_blank" className="text-blue-600 hover:underline">Demo</a>
      </div>
    </div>
  );
}
