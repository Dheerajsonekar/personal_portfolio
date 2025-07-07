'use client';
import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project: any) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </div>
  );
}
