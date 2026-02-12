'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  yearsOfExperience: number;
  projects: number;
}

interface SkillComparisonChartProps {
  skills: Skill[];
}

export default function SkillComparisonChart({ skills }: SkillComparisonChartProps) {
  const barChartData = skills.map(skill => ({
    name: skill.name,
    proficiency: skill.proficiency,
    experience: skill.yearsOfExperience * 10,
    projects: skill.projects * 5,
  }));

  const radarChartData = skills.slice(0, 8).map(skill => ({
    skill: skill.name,
    proficiency: skill.proficiency,
  }));

  return (
    <div className="space-y-8">
      <div className="bg-card rounded-xl shadow-card p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Proficiency Comparison</h3>
        <div className="w-full h-96" aria-label="Skills Proficiency Bar Chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={100}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px'
                }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Bar dataKey="proficiency" fill="#1e3a8a" name="Proficiency %" radius={[8, 8, 0, 0]} />
              <Bar dataKey="experience" fill="#0ea5e9" name="Experience (scaled)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="projects" fill="#059669" name="Projects (scaled)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-card p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Skills Radar</h3>
        <div className="w-full h-96" aria-label="Skills Proficiency Radar Chart">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarChartData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <Radar 
                name="Proficiency" 
                dataKey="proficiency" 
                stroke="#1e3a8a" 
                fill="#1e3a8a" 
                fillOpacity={0.6} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl shadow-card p-6">
          <h4 className="text-lg font-semibold text-text-primary mb-4">Average Proficiency</h4>
          <p className="text-4xl font-bold text-primary">
            {(skills.reduce((sum, skill) => sum + skill.proficiency, 0) / skills.length).toFixed(1)}%
          </p>
          <p className="text-sm text-text-secondary mt-2">Across {skills.length} skills</p>
        </div>

        <div className="bg-card rounded-xl shadow-card p-6">
          <h4 className="text-lg font-semibold text-text-primary mb-4">Total Experience</h4>
          <p className="text-4xl font-bold text-accent">
            {skills.reduce((sum, skill) => sum + skill.yearsOfExperience, 0).toFixed(1)} years
          </p>
          <p className="text-sm text-text-secondary mt-2">Combined across all skills</p>
        </div>

        <div className="bg-card rounded-xl shadow-card p-6">
          <h4 className="text-lg font-semibold text-text-primary mb-4">Total Projects</h4>
          <p className="text-4xl font-bold text-trust">
            {skills.reduce((sum, skill) => sum + skill.projects, 0)}
          </p>
          <p className="text-sm text-text-secondary mt-2">Completed successfully</p>
        </div>
      </div>
    </div>
  );
}