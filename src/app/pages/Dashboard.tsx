import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function Dashboard() {
  const languages = [
    { name: 'Dart', percentage: 68, color: 'bg-gradient-to-r from-red-500 to-orange-500' },
    { name: 'JavaScript', percentage: 21, color: 'bg-yellow-500' },
    { name: 'Markdown', percentage: 11, color: 'bg-red-400' },
  ];

  const categories = [
    { name: 'Coding', percentage: 61, color: 'bg-blue-500' },
    { name: 'AI Coding', percentage: 30, color: 'bg-purple-500' },
    { name: 'Writing', percentage: 9, color: 'bg-pink-500' },
    { name: 'Docs', percentage: 0, color: 'bg-gray-500' },
  ];

  // Generate GitHub-like contribution grid
  const generateContributions = () => {
    const weeks = 52;
    const days = 7;
    const contributions = [];
    
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        const level = Math.floor(Math.random() * 5); // 0-4 contribution levels
        contributions.push({ week, day, level });
      }
    }
    return contributions;
  };

  const contributions = generateContributions();
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

  return (
    <div className="min-h-screen text-white p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-cyan-400">
            This is my personal dashboard, built with Next.js API routes deployed as serverless functions.
          </p>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Weekly Statistics */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <h2 className="text-xl font-bold">Weekly Statistics</h2>
            </div>
            <p className="text-sm text-gray-500">Last update: 14 hours ago</p>
          </div>
          <p className="text-gray-400 mb-6">My WakaTime last 7 days stats.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Start Date</p>
              <p className="text-white font-semibold">March 26, 2026</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">End Date</p>
              <p className="text-white font-semibold">April 01, 2026</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Daily Coding Average</p>
              <p className="text-white font-semibold">2 hrs 29 mins</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">This Week Coding Time</p>
              <p className="text-white font-semibold">17 hrs 27 mins</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Best Day Coding Time</p>
              <p className="text-white font-semibold">March 30, 2026 (5 hrs 23 mins)</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">All Time Since Today</p>
              <p className="text-white font-semibold">1,531 hrs 9 mins</p>
            </div>
          </div>

          {/* Languages & Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Languages */}
            <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="font-bold mb-4 text-yellow-400">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">{lang.name}</span>
                      <span className="text-sm font-semibold text-white">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${lang.color}`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-6">
              <h3 className="font-bold mb-4 text-purple-400">Categories</h3>
              <div className="space-y-4">
                {categories.map((cat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">{cat.name}</span>
                      <span className="text-sm font-semibold text-white">{cat.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${cat.color}`}
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Contributions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="white">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <h2 className="text-xl font-bold">Contributions</h2>
            </div>
            <p className="text-sm text-gray-500">@JeremyDarrellAndreas</p>
          </div>
          <p className="text-gray-400 mb-6">My contributions from last year on github.</p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">1306</p>
                <p className="text-sm text-gray-400">Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">28</p>
                <p className="text-sm text-gray-400">This Week</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">43</p>
                <p className="text-sm text-gray-400">Best Day</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">3 / day</p>
                <p className="text-sm text-gray-400">Average</p>
              </div>
            </div>

            {/* Contribution Grid */}
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                {/* Month labels */}
                <div className="flex mb-2 ml-8">
                  {months.map((month, i) => (
                    <div key={i} className="text-xs text-gray-500" style={{ width: '80px' }}>
                      {month}
                    </div>
                  ))}
                </div>
                
                {/* Grid */}
                <div className="flex">
                  {/* Day labels */}
                  <div className="flex flex-col justify-around mr-2 text-xs text-gray-500">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>
                  
                  {/* Contribution squares */}
                  <div className="flex gap-1">
                    {Array.from({ length: 52 }).map((_, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {Array.from({ length: 7 }).map((_, dayIndex) => {
                          const contrib = contributions[weekIndex * 7 + dayIndex];
                          const colors = [
                            'bg-gray-800',
                            'bg-green-900',
                            'bg-green-700',
                            'bg-green-500',
                            'bg-green-400'
                          ];
                          return (
                            <div
                              key={dayIndex}
                              className={`w-3 h-3 rounded-sm ${colors[contrib.level]}`}
                              title={`${contrib.level} contributions`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-gray-800 rounded-sm" />
                    <div className="w-3 h-3 bg-green-900 rounded-sm" />
                    <div className="w-3 h-3 bg-green-700 rounded-sm" />
                    <div className="w-3 h-3 bg-green-500 rounded-sm" />
                    <div className="w-3 h-3 bg-green-400 rounded-sm" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
