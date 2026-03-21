export interface SkillCategory {
  title: string;
  icon?: "code" | "database" | "tool";
  skills: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["C", "C++", "Python", "TypeScript", "JavaScript", "Assembly"]
  },
  {
    title: "Basic Knowledge",
    icon: "database",
    skills: ["Salesforce Core", "API Life Cycle", "Apex", "LWC", "Agentforce"]
  },
  {
    title: "Software Tools",
    icon: "tool",
    skills: ["Kicad", "Fusion 360", "Excel", "Word", "Powerpoint"]
  }
];

export const professionalSkills: string[] = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Continuous Learning",
  "Time Management",
  "Critical Thinking",
  "Good Communication",
  "Good Writing"
];
