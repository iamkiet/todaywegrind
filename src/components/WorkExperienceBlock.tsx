import React from "react";

export interface WorkExperienceBlockProps {
  company: string;
  role: string;
  period: string;
  project: string;
  architecture: string;
  techStack: string;
  position: string;
  achievements: string[];
}

const WorkExperienceBlock: React.FC<WorkExperienceBlockProps> = ({
  company,
  role,
  period,
  project,
  architecture,
  techStack,
  position,
  achievements,
}) => (
  <div className="my-6">
    <div className="mb-3">
      <h3 className="text-base font-bold text-black">{company}</h3>
      <p className="text-gray-700 font-medium text-sm">
        {role} | {period}
      </p>
    </div>
    <div className="mb-4 text-sm space-y-1">
      <p>
        <span className="font-semibold">Project:</span> {project}
      </p>
      <p>
        <span className="font-semibold">Architecture:</span> {architecture}
      </p>
      <p>
        <span className="font-semibold">Tech-stack:</span> {techStack}
      </p>
      <p>
        <span className="font-semibold">Role:</span> {position}
      </p>
    </div>
    <div className="text-sm space-y-1 text-gray-700">
      {achievements.map((item, idx) => (
        <div className="flex items-start" key={idx}>
          <div className="flex-shrink-0 w-4">
            <p className="text-gray-500 mr-2">-</p>
          </div>
          <div className="flex-1">
            <p>{item}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WorkExperienceBlock;
