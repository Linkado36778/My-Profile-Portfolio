export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string
}

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Universidade Santa Cecília - Unisanta",
    period: "2022 - Now",
    description: "Computer Engineering - 9th Semester"
  },
  {
    id: "2",
    degree: "CAE CERTIFICATE - C1 Advanced - Cambridge",
    institution: "Cultura Inglesa",
    period: "2017 - 2024",
    description: "English Language course - C1 Advanced (IPTA LEVEL)"
  }
];
