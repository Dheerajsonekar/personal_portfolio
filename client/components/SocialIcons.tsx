import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  {
    href: 'https://github.com/Dheerajsonekar',
    icon: <FaGithub className="hover:text-white" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/dheeraj-sonekar-64b941201',
    icon: <FaLinkedin className="hover:text-blue-500" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://leetcode.com/dheerajsonekar2/',
    icon: <SiLeetcode className="hover:text-orange-500 w-6 h-6" />,
    label: 'LeetCode',
  }
  

  
];

export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-6 text-2xl text-blue-600 dark:text-white">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="transition-transform duration-200 hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
