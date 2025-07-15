'use client';
import Image from 'next/image';

import axios from 'axios';
import ProjectCard from '@/components/ProjectCard';
import SocialIcons from '@/components/SocialIcons';



type Project = {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  techStack: string[];
  _id?: string;
};

export default function HomePage() {
  const projects: Project[] = [
    {
      title: "Fresh Store",
      description: "A full-stack app with vendor & customer dashboards, payment, and live updates.",
      githubUrl: "https://github.com/Dheerajsonekar/milk-delivery-platform",
      demoUrl: "",
      techStack: ["Next.js", "MongoDB", "PostgreSQL", "Express", "Tailwind", "TypeScript"]
    },
    {
      title: "Food delivery platform",
      description: "Food delivery platform for resturant with client panel .",
      githubUrl: "https://github.com/Dheerajsonekar/food-delivery-website",
      demoUrl: "",
      techStack: ["React.js", "Express", " NoSql", "javaScript", "Bootstrap"]
    },
    {
      title: "Expense Tracker",
      description: "Track daily expenses with authentication and analytics dashboard.",
      githubUrl: "https://github.com/Dheerajsonekar/full-stack-expense-app",
      demoUrl: "",
      techStack: ["Node.js", "Sql", "javascript", "JWT", "CSS"]
    },
    {
      title: "Charity donation Website",
      description: "Charity donation platform with user authentication and admin panel",
      githubUrl: "https://github.com/Dheerajsonekar/charity_donation_platform",
      demoUrl: "",
      techStack: ["nodejs", "Express", "Mysql", "javascript", "html/css"]
    },

    {
      title: "Ecommerce Website",
      description: "Ecommerce webstie using EJS and Node js",
      githubUrl: "https://github.com/Dheerajsonekar/ecommerce-website",
      demoUrl: "",
      techStack: ["Nodejs", "sql", "ejs", "javascript", "css"]
    }
  ];


  return (
    <div className="scroll-smooth pt-14">
      {/* Hero Section */}
      <section id="hero" className="relative w-full text-center py-32 sm:py-40 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-black overflow-hidden">

        {/* Bouncing balls background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {/* Ball 1 */}
          <div className="absolute w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full left-[10%] animate-ball-bounce-1"></div>

          {/* Ball 2 */}
          <div className="absolute w-30 h-30 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full left-[20%] animate-ball-bounce-2"></div>

          {/* Ball 3 */}
          <div className="absolute w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full left-[30%] animate-ball-bounce-3"></div>

          {/* Ball 4 */}
          <div className="absolute w-[80px] h-[80px] bg-gradient-to-br from-amber-400 to-amber-600 rounded-full left-[50%] animate-ball-bounce-4"></div>

          {/* Ball 5 */}
          <div className="absolute w-[66px] h-[66px] bg-gradient-to-br from-red-400 to-red-600 rounded-full left-[70%] animate-ball-bounce-5"></div>

          {/* Ball 6 */}
          <div className="absolute w-32 h-32 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full left-[80%] animate-ball-bounce-6"></div>

          {/* Ball 7 */}
          <div className="absolute w-[30px] h-[30px] bg-gradient-to-br from-pink-400 to-pink-600 rounded-full left-[90%] animate-ball-bounce-7"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full mx-auto space-y-6 animate-slide-in px-4">
          <Image
            src="/profile.jpeg"
            alt="Dheeraj Sonekar"
            width={280}
            height={280}
            className="mx-auto rounded-full shadow-lg border-4 border-white dark:border-gray-800 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-2xl sm:text-4xl text-gray-900 dark:text-white animate-name-slide ">
            Dheeraj Sonekar
          </h1>
          <p className="text-3xl sm:text-5xl font-semibold gradient-text mt-2">
            Full Stack Developer
          </p>

          <SocialIcons />
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 px-6">
        {/* Background animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-300 to-pink-300 opacity-20 blur-3xl top-10 left-[-100px] animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 opacity-20 blur-3xl bottom-[-80px] right-[-120px] animate-float" />
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white reveal">Experience</h2>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition reveal">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Full Stack Developer – Intern
              </h3>
              <p className="text-sm text-gray-500">HashedBit Innovations – Jan 2024 - June 2024</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Built full-stack applications using React, SQL, and Express. Worked on integration and backend APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section id="services" className="relative overflow-hidden bg-white dark:bg-gray-950 py-20 px-6">
        {/* Background animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-300 to-pink-300 opacity-20 blur-3xl top-10 left-[-100px] animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 opacity-20 blur-3xl bottom-[-80px] right-[-120px] animate-float" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">My Services</h2>

          {/* Freelancing Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm sm:text-base">
            <a href="https://www.fiverr.com" target="_blank" className="text-blue-600 hover:underline">Fiverr</a>
            <a href="https://www.freelancer.com" target="_blank" className="text-blue-600 hover:underline">Freelancer</a>
            <a href="https://www.upwork.com" target="_blank" className="text-blue-600 hover:underline">Upwork</a>
            <a href="https://www.peopleperhour.com" target="_blank" className="text-blue-600 hover:underline">PeoplePerHour</a>
            <a href="https://www.truelancer.com" target="_blank" className="text-blue-600 hover:underline">Truelancer</a>
            <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">Email for Custom Project</a>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Web Development</h3>
              <p className="text-sm text-gray-500">React / Next.js / APIs</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Mobile-Ready Dashboards</h3>
              <p className="text-sm text-gray-500">Admin panels & client portals</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">E-commerce Solutions</h3>
              <p className="text-sm text-gray-500">Cart / Payment / Delivery system</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Digital Platform Setup</h3>
              <p className="text-sm text-gray-500">Convert offline to online</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">AI Integrations</h3>
              <p className="text-sm text-gray-500">Chatbot / GPT tools / Automation</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Game UI / Interactive Apps</h3>
              <p className="text-sm text-gray-500">Mini-games / Engaging UIs</p>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="dark:bg-gray-900 dark:bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: Project) => (
              <ProjectCard key={project._id || project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray dark:bg-gray-950 py-20 px-6">
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
      <section id="education" className="bg-white dark:bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Education
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  B.Tech in Computer Science
                </h3>
                <p className="text-sm text-blue-500 dark:text-blue-300 mt-1">
                  Cluster Innovation Centre – University of Delhi
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-0 sm:text-right">
                <p>2020 – 2024</p>
                <p>CGPA: <span className="font-medium text-gray-800 dark:text-white">8.34</span></p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Core subjects included Data Structures & Algorithms, Web Development, DBMS, Operating Systems, Software Engineering, and Cloud Technologies. Project-based learning was emphasized with real-world applications.
            </p>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="bg-gray-50 dark:bg-gray-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Certifications
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Full stack developement Bootcamp – Udemy
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Covered React, Node.js, Express, MongoDB, SQL, Auth, Payment Integration, REST APIs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Next.js & TypeScript Crash Course – [Platform]
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built scalable full-stack projects with SSR and API routing using Next.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Testimonials
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 dark:text-gray-300 italic">
                &quot;Dheeraj delivered our web app with high-quality code and impressive attention to detail. His backend logic and API integration were solid!&quot;
              </p>
              <p className="text-sm text-blue-500 mt-2 text-right">– Client, Freelance Project</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 dark:text-gray-300 italic">
                &quot;Always reliable and quick to communicate. His ability to handle full-stack requirements made our startup MVP possible.&quot;
              </p>
              <p className="text-sm text-blue-500 mt-2 text-right">– Intern Manager, HashedBit Innovations</p>
            </div>
          </div>
        </div>
      </section>


      {/* Resume Download */}
      <section id="resume" className="bg-white dark:bg-gray-950 py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Resume</h2>
        <a
          href="/resume_dheeraj_sonekar.pdf"
          download
          className="btn-primary inline-block"
        >
          Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-20 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Contact Me</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget as HTMLFormElement);
              try {
                await axios.post('https://portfolio-backend1-q6cx.onrender.com/api/contact', {
                  name: form.get('name'),
                  email: form.get('email'),
                  message: form.get('message'),
                });
                e.currentTarget.reset();
                alert('Message sent!');
              } catch (error) {
                console.error('Failed to send message:', error);
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