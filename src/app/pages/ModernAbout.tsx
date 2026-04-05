import { motion } from 'motion/react';
import { User, FileText, Briefcase, GraduationCap, Award, Code, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Progress } from '../components/ui/progress';

export default function ModernAbout() {
  const skills = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'], level: 90 },
    { category: 'Backend', items: ['Laravel', 'Node.js', 'Express.js', 'REST API', 'GraphQL'], level: 85 },
    { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma'], level: 80 },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman'], level: 85 }
  ];

  const timeline = [
    {
      year: '2024 - Present',
      title: 'Freelance Fullstack Developer',
      company: 'Self-employed',
      description: 'Building custom web applications for various clients. Delivered 10+ projects including e-commerce platforms, booking systems, and institutional websites.',
      achievements: ['15+ projects completed', '12+ happy clients', 'Full-stack expertise']
    },
    {
      year: '2023 - 2024',
      title: 'Web Developer Intern',
      company: 'Local Tech Company',
      description: 'Learned industry best practices, worked on real-world projects, and collaborated with experienced developers.',
      achievements: ['Team collaboration', 'Code review process', 'Agile methodology']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-8 py-12 lg:px-16 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-8 h-8" />
            <h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Getting to know the person behind the code
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="intro" className="space-y-8">
          <TabsList>
            <TabsTrigger value="intro" className="gap-2">
              <Heart className="w-4 h-4" />
              Intro
            </TabsTrigger>
            <TabsTrigger value="skills" className="gap-2">
              <Code className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience" className="gap-2">
              <Briefcase className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
          </TabsList>

          {/* Intro Tab */}
          <TabsContent value="intro">
            <Card>
              <CardContent className="p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="prose prose-lg dark:prose-invert max-w-none"
                >
                  <h2 className="text-3xl font-bold mb-6">Hi! Thanks for visiting 👋</h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    My name is <strong className="text-black dark:text-white">Jeremy Darrell Andreas</strong>. 
                    I'm a 17-year-old student at SMK WIKRAMA BOGOR, majoring in Software and Game Development (PPLG XI). 
                    I've been passionately building web applications for over 2 years.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    What drives me is the ability to transform ideas into functional, beautiful digital experiences. 
                    I specialize in <strong className="text-black dark:text-white">fullstack development</strong>, 
                    working comfortably with both frontend interfaces and backend systems.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    I'm proficient in modern web technologies like{' '}
                    <strong className="text-black dark:text-white">React, Next.js, Laravel, and Node.js</strong>. 
                    I follow <strong className="text-black dark:text-white">Agile methodologies</strong> and 
                    believe in writing clean, maintainable code that scales.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Beyond technical skills, I value <strong className="text-black dark:text-white">clear communication</strong> and 
                    <strong className="text-black dark:text-white"> collaborative problem-solving</strong>. 
                    I believe the best solutions come from understanding user needs and working together as a team.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    I'm currently <strong className="text-black dark:text-white">open to freelance opportunities</strong> and 
                    excited to work on challenging projects that push my skills further.
                  </p>

                  <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Best regards,</p>
                    <p className="text-2xl font-bold">Jeremy Darrell Andreas</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{skill.category}</span>
                        <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={skill.level} className="mb-4 h-2" />
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <Badge key={i} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <Badge variant="outline" className="mb-3">{item.year}</Badge>
                          <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <Separator className="my-4" />
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} className="gap-1">
                            <Award className="w-3 h-3" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card>
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-black dark:bg-white flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white dark:text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">SMK WIKRAMA BOGOR</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                          Software & Game Development (PPLG)
                        </p>
                        <Badge>Class XI • 2022 - Present</Badge>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Key Courses
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Web Programming',
                            'Database Management',
                            'Object-Oriented Programming',
                            'Mobile Development',
                            'UI/UX Design',
                            'Software Project Management'
                          ].map((course, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Achievements
                        </h4>
                        <div className="space-y-2">
                          {[
                            'Completed 15+ client projects',
                            'Active member of Programming Club',
                            'Participated in Web Development Competition'
                          ].map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}