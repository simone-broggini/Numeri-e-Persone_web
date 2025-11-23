import React from 'react';
import PopulationPyramid from './charts/PopulationPyramid';
import ActivePieChart from './charts/ActivePieChart';
import SectorBarChart from './charts/SectorBarChart';
import EducationBarChart from './charts/EducationBarChart';
import EducationPyramid from './charts/EducationPyramid';
import MovementChart from './charts/MovementChart';
import TrendChart from './charts/TrendChart';

const CHART_MAP: Record<string, React.FC<any>> = {
  "population_pyramid": PopulationPyramid,
  "active_vs_non_active": ActivePieChart,
  "active_by_sector": SectorBarChart,
  "education_level": EducationBarChart,
  "education_pyramid": EducationPyramid,
  "demographic_movement": MovementChart,
  "population_trend": TrendChart
};

interface Section {
  title: string;
  content: string;
  charts: string[];
}

interface ChapterData {
  chapter: number;
  year: number;
  title: string;
  sections: Section[];
  charts: Record<string, any>;
}

export default function ChapterRenderer({ data }: { data: ChapterData }) {
  return (
    <article className="prose prose-lg prose-stone max-w-none">
      <h1 className="text-4xl font-serif font-bold text-primary mb-2">Capitolo {data.chapter}</h1>
      <h2 className="text-2xl font-serif text-gray-600 mb-10 border-b pb-4">{data.title}</h2>

      {data.sections.map((section, idx) => (
        <section key={idx} className="mb-12">
          {/* Only render title if it's not the "Intro" dummy title */}
          {section.title !== "Intro" && (
            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">{section.title}</h3>
          )}
          
          {/* Render Text Content with paragraphs */}
          <div className="text-gray-700 leading-relaxed mb-8">
            {section.content.split('\n\n').map((para, pIdx) => (
              <p key={pIdx} className="mb-4">{para}</p>
            ))}
          </div>

          {/* Render Charts for this section */}
          <div className="space-y-8">
            {section.charts.map((chartKey) => {
              const ChartComponent = CHART_MAP[chartKey];
              const chartData = data.charts[chartKey];
              
              if (!ChartComponent || !chartData) return null;
              
              return <ChartComponent key={chartKey} data={chartData} />;
            })}
          </div>
        </section>
      ))}
    </article>
  );
}
