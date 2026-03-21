export interface Award {
  id: string;
  year: string;
  title: string;
  event: string;
  description: string;
  link?: string;
}

export const awards: Award[] = [
  {
    id: "1",
    year: "2023",
    title: "10th Place",
    event: "23rd National Congress of Scientific Initiation (CONIC - SEMESP)",
    description: "Presentation of the project titled “MoreLife”.",
    link: "https://www.semesp.org.br/conic/resultados/?edicao=2023"
  },
  {
    id: "2",
    year: "2023",
    title: "1st Place – Engineering Projects",
    event: "15th Brazilian Congress of Scientific Initiation (COBRIC)",
    description: "Presentation of the project titled “MoreLife”."
  },
  {
    id: "3",
    year: "2024",
    title: "Publication",
    event: "CREA São Paulo Magazine – January Edition – March 11",
    description: "Publication about the project titled “MoreLife”.",
    link: "https://www.creasp.org.br/novo_site/wp-content/uploads/2024/03/231110-CREA-revista-ed11-AF-digital.pdf"
  }
];
