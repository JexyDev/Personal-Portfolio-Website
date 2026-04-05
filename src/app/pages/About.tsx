import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileText, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: 'Intro', icon: BookOpen },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'career', label: 'Career', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen text-white p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">About</h1>
          <p className="text-gray-400">
            An insightful glimpse into who I am – because every detail adds depth to the canvas of life.
          </p>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
        >
          {activeTab === 'intro' && (
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-white">Hi! Thanks for visiting my personal website.</h2>
              
              <p className="text-gray-300 mb-4">
                My name is <strong>Jeremy Darrell Andreas</strong>. I have been in web development for over 2 years, 
                working on the coding that you see on the screen (frontend), the stuff that happens behind the scenes (backend), 
                and everything in between!
              </p>

              <p className="text-gray-300 mb-4">
                I know how to manage projects using methods like <strong>Waterfall and Agile</strong>. However, what really excites 
                me is creating websites and applications that are <strong>easy for everyone to use</strong> and also look good 
                including security!
              </p>

              <p className="text-gray-300 mb-4">
                I am very passionate about <strong>JavaScript and PHP</strong>, which are the languages used to build websites. 
                I am also familiar with many frameworks and libraries that make building websites easier, such as{' '}
                <strong>React, Vue, Next, Express, Node.js, and PHP frameworks like Filament, Livewire, and Laravel</strong>. 
                I enjoy learning new web tools and features.
              </p>

              <p className="text-gray-300 mb-4">
                I believe that <strong>good communication is essential in any job</strong>.
              </p>

              <p className="text-gray-300 mb-4">
                My experiences have taught me how to problem solve and communicate in a team, but I also enjoy working 
                with others to get things done. I love the opportunity to collaborate and build cool stuff!
              </p>

              <p className="text-gray-300 mb-6">
                I look forward to working with you!
              </p>

              <p className="text-gray-300">
                <strong>Best Regards,</strong>
              </p>
              <div className="mt-4">
                <img 
                  src="data:image/svg+xml,%3Csvg width='150' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='35' font-family='cursive' font-size='24' fill='%23ef4444'%3EJeremy Darrell%3C/text%3E%3C/svg%3E" 
                  alt="Signature"
                  className="opacity-70"
                />
              </div>
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Skills & Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">Frontend Development</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• React.js, Vue.js, Next.js</li>
                      <li>• HTML5, CSS3, JavaScript (ES6+)</li>
                      <li>• Tailwind CSS, Bootstrap</li>
                      <li>• Responsive Design</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">Backend Development</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Laravel, PHP</li>
                      <li>• Node.js, Express.js</li>
                      <li>• RESTful API Design</li>
                      <li>• MySQL, MongoDB</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">Tools & Technologies</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Git, GitHub</li>
                      <li>• VS Code, WebStorm</li>
                      <li>• Figma, Adobe XD</li>
                      <li>• Postman, Insomnia</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-400 mb-2">Other Skills</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Agile/Scrum Methodology</li>
                      <li>• UI/UX Design Principles</li>
                      <li>• Problem Solving</li>
                      <li>• Team Collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'career' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Work Experience</h3>
              
              <div className="relative pl-8 border-l-2 border-gray-700 space-y-8">
                <div>
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-cyan-500"></div>
                  <div className="text-sm text-gray-500 mb-1">2024 - Present</div>
                  <h4 className="text-lg font-semibold text-white">Freelance Fullstack Developer</h4>
                  <p className="text-cyan-400 text-sm mb-2">Self-employed</p>
                  <p className="text-gray-300 text-sm">
                    Building custom web applications for various clients. Specializing in React, Laravel, and modern 
                    web technologies. Delivered multiple projects including e-commerce platforms, booking systems, 
                    and company profile websites.
                  </p>
                </div>

                <div>
                  <div className="absolute left-0 w-4 h-4 -translate-x-[9px] rounded-full bg-purple-500"></div>
                  <div className="text-sm text-gray-500 mb-1">2023 - 2024</div>
                  <h4 className="text-lg font-semibold text-white">Web Developer Intern</h4>
                  <p className="text-purple-400 text-sm mb-2">Local Tech Company</p>
                  <p className="text-gray-300 text-sm">
                    Assisted in developing and maintaining web applications. Learned best practices in coding, 
                    version control, and team collaboration. Gained hands-on experience with React and Laravel.
                  </p>
                </div>

                <div>
                  <div className="absolute left-0 w-4 h-4 -translate-x-[9px] rounded-full bg-green-500"></div>
                  <div className="text-sm text-gray-500 mb-1">2022 - 2023</div>
                  <h4 className="text-lg font-semibold text-white">Student Projects</h4>
                  <p className="text-green-400 text-sm mb-2">SMK WIKRAMA BOGOR</p>
                  <p className="text-gray-300 text-sm">
                    Developed various school projects including web applications and mobile apps. Participated in 
                    programming competitions and workshops to enhance technical skills.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Education Background</h3>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">SMK WIKRAMA BOGOR</h4>
                    <p className="text-cyan-400 text-sm">Software Engineering (PPLG - Pengembangan Perangkat Lunak dan Gim)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">2022 - Present</div>
                    <div className="text-sm font-semibold text-white">Grade 11</div>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    Currently studying at SMK WIKRAMA BOGOR, majoring in Software and Game Development (PPLG). 
                    Learning comprehensive web development, mobile app development, and software engineering principles.
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2">Key Courses:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>Web Programming (HTML, CSS, JavaScript, PHP)</li>
                      <li>Database Management (MySQL, MongoDB)</li>
                      <li>Object-Oriented Programming</li>
                      <li>Mobile Application Development</li>
                      <li>UI/UX Design</li>
                      <li>Software Project Management</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-white mb-2">Achievements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      <li>Participated in Web Development Competition</li>
                      <li>Completed multiple client projects</li>
                      <li>Active member of Programming Club</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Continuous Learning</h4>
                <p className="text-gray-300 text-sm">
                  Beyond formal education, I actively learn through online courses, documentation, and hands-on projects. 
                  I believe in staying updated with the latest technologies and best practices in web development.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
