'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '@/components/ProjectCard';
import SocialIcons from '@/components/SocialIcons';

export default function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <div className="scroll-smooth pt-14">
      {/* Hero Section */}
      <section id="hero" className=" w-full text-center  py-32 sm:py-40 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-black">
        <div className="w-full mx-auto space-y-6 animate-slide-in px-4">
          <Image
            src="/my-photo.jpg"
            alt="Dheeraj Sonekar"
            width={280}
            height={280}
            className="mx-auto rounded-full shadow-lg border-4 border-white dark:border-gray-800 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-2xl sm:text-4xl  text-gray-900 dark:text-white">
            Dheeraj Sonekar
          </h1>
          <p className="text-3xl sm:text-5xl font-semibold text-gray-700 dark:text-gray-100 mt-2">
            Full Stack Developer
          </p>

          <SocialIcons />

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white dark:bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer – Freelance</h3>
              <p className="text-sm text-gray-500">Jan 2024 – Present</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Built and deployed full-stack applications using Next.js, MongoDB, and Express. Worked on payment integration and backend APIs.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Backend Developer Intern</h3>
              <p className="text-sm text-gray-500">Aug 2023 – Dec 2023</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Created RESTful APIs and admin dashboards using Node.js, SQL, and AWS. Implemented authentication and system design best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 dark:bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray dark:bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Git', 'REST APIs', 'AWS'].map(skill => (
              <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition text-gray-800 dark:text-white font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white-50 dark:bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Bachelor of Technology in Computer Science</h3>
              <p className="text-sm text-gray-500">2020 – 2024</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Studied Data Structures, Web Development, DBMS, Operating Systems, and Software Engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <section id="resume" className="bg-white dark:bg-gray-900 py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="btn-primary inline-block"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 dark:bg-gray-950 py-20 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Contact Me</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget as HTMLFormElement);
              try {
                await axios.post('http://localhost:5000/api/contact', {
                  name: form.get('name'),
                  email: form.get('email'),
                  message: form.get('message'),
                });
                e.currentTarget.reset();
                alert('Message sent!');
              } catch (err) {
                alert('Failed to send message.');
              }
            }}
            className="space-y-4"
          >
            <input name="name" placeholder="Your Name" className="input w-full" required />
            <input name="email" type="email" placeholder="Your Email" className="input w-full" required />
            <textarea name="message" placeholder="Your Message" className="input w-full h-32" required />
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
