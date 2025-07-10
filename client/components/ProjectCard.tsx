interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  techStack: string[];
  _id?: string;
}

export default function ProjectCard({ title, description, githubUrl, demoUrl, techStack }: ProjectCardProps) {
  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-900">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex gap-2 flex-wrap mb-4">
        {techStack?.map((tech: string) => (
          <span key={tech} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
          GitHub
        </a>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
          Demo
        </a>
      </div>
    </div>
  );
}