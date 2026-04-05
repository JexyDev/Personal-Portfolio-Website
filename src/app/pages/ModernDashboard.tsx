import { motion } from 'motion/react';
import { Activity, Code2, Zap, Database, TrendingUp, Calendar, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function ModernDashboard() {
  const codingStats = {
    daily: '2h 29m',
    weekly: '17h 27m',
    total: '1,531h 9m',
    bestDay: 'March 30 (5h 23m)'
  };

  const languages = [
    { name: 'TypeScript', percentage: 45, hours: '7h 52m', color: 'bg-blue-600' },
    { name: 'JavaScript', percentage: 28, hours: '4h 54m', color: 'bg-yellow-500' },
    { name: 'PHP', percentage: 18, hours: '3h 9m', color: 'bg-purple-600' },
    { name: 'CSS', percentage: 9, hours: '1h 34m', color: 'bg-pink-500' }
  ];

  const projects = [
    { name: 'EVOConnect', hours: '8h 12m', percentage: 47 },
    { name: 'Jurnalku', hours: '5h 45m', percentage: 33 },
    { name: 'Portfolio Website', hours: '3h 30m', percentage: 20 }
  ];

  const editors = [
    { name: 'VS Code', percentage: 78, icon: Code2 },
    { name: 'WebStorm', percentage: 22, icon: Code2 }
  ];

  // GitHub contributions
  const generateContributions = () => {
    const weeks = 52;
    const days = 7;
    const contributions = [];
    
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        const level = Math.floor(Math.random() * 5);
        contributions.push({ week, day, level });
      }
    }
    return contributions;
  };

  const contributions = generateContributions();
  const contributionColors = [
    'bg-gray-200 dark:bg-gray-900',
    'bg-gray-400 dark:bg-gray-700',
    'bg-gray-600 dark:bg-gray-500',
    'bg-gray-800 dark:bg-gray-300',
    'bg-black dark:bg-white'
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
            <Activity className="w-8 h-8" />
            <h1 className="text-4xl lg:text-5xl font-bold">Dashboard</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Real-time insights into my coding activity and contributions
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Daily Average</p>
              </div>
              <p className="text-3xl font-bold">{codingStats.daily}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">This Week</p>
              </div>
              <p className="text-3xl font-bold">{codingStats.weekly}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Best Day</p>
              </div>
              <p className="text-xl font-bold">{codingStats.bestDay}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">All Time</p>
              </div>
              <p className="text-3xl font-bold">{codingStats.total}</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Coding Activity Tabs */}
        <Tabs defaultValue="languages" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="editors">Editors</TabsTrigger>
          </TabsList>

          <TabsContent value="languages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Language Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${lang.color}`} />
                          <span className="font-medium">{lang.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{lang.hours}</span>
                          <span className="font-semibold w-12 text-right">{lang.percentage}%</span>
                        </div>
                      </div>
                      <Progress value={lang.percentage} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{project.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{project.hours}</span>
                          <span className="font-semibold w-12 text-right">{project.percentage}%</span>
                        </div>
                      </div>
                      <Progress value={project.percentage} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="editors">
            <Card>
              <CardHeader>
                <CardTitle>Editor Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {editors.map((editor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <editor.icon className="w-4 h-4" />
                          <span className="font-medium">{editor.name}</span>
                        </div>
                        <span className="font-semibold">{editor.percentage}%</span>
                      </div>
                      <Progress value={editor.percentage} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator className="my-12" />

        {/* GitHub Contributions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub Contributions
            </CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              1,306 contributions in the last year
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto pb-4">
              <div className="inline-block min-w-full">
                <div className="flex gap-1">
                  {Array.from({ length: 52 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const contrib = contributions[weekIndex * 7 + dayIndex];
                        return (
                          <motion.div
                            key={dayIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                            whileHover={{ scale: 1.3 }}
                            className={`w-3 h-3 rounded-sm ${contributionColors[contrib.level]} cursor-pointer`}
                            title={`${contrib.level} contributions`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-600 dark:text-gray-400">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {contributionColors.map((color, i) => (
                      <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
