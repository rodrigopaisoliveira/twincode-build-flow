export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  link?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "mfgil",
    title: "MFGil Construções",
    description: "Website institucional para empresa de construção civil",
    fullDescription:
      "Website institucional desenvolvido para a MF Gil Construções, com foco em clareza, confiança e facilidade de contacto. O design valoriza os projetos da empresa e transmite solidez e profissionalismo.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    features: [
      "Design responsivo adaptado a todos os dispositivos",
      "Conteúdo otimizado para SEO e desempenho",
      "Integração com Google Maps e formulário de contacto",
      "Gestão simples de textos e imagens",
      "Visual moderno e alinhado à identidade da marca",
    ],
    link: "https://mfgilconstrucoes.pt",
    category: "Website Institucional",
  },
  {
    id: "tank18",
    title: "Tank-18",
    description: "Plataforma para o setor de transporte e logística",
    fullDescription:
      "Desenvolvimento de uma presença digital para a Tank-18, com um design profissional e estrutura clara. Preparado para futuras integrações com sistemas de gestão e APIs externas.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&h=800&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: [
      "Layout responsivo e leve",
      "Estrutura preparada para crescimento e novas integrações",
      "Interface intuitiva voltada a profissionais do setor",
      "Organização visual limpa e funcional",
      "Foco na comunicação eficaz dos serviços da empresa",
    ],
    link: "https://tank-18.pt",
    category: "Plataforma Web",
  },
  {
    id: "cgl",
    title: "CGL Transportes",
    description: "Website corporativo para empresa de transportes",
    fullDescription:
      "Site desenvolvido para a CGL Transportes, apresentando serviços, frota e contactos de forma organizada. Construído com performance e facilidade de atualização em mente.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    features: [
      "Design responsivo e adaptado a transportadoras",
      "Apresentação clara dos serviços e contactos",
      "Integração com Google Maps para localização",
      "Navegação simples e direta",
      "Estrutura pronta para futuras expansões",
    ],
    link: "https://cgltransportes.pt",
    category: "Sistema Web",
  },
  {
    id: "churrasqueira",
    title: "Churrasqueira Alto São João",
    description: "Website moderno para restaurante",
    fullDescription:
      "Website criado para o restaurante Churrasqueira Alto São João, com um design apelativo e visual gastronómico. Traz facilidade de navegação e destaque para o menu e localização.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=800&fit=crop",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Design moderno e visual apelativo",
      "Menu digital facilmente editável",
      "Integração com localização via Google Maps",
      "Layout otimizado para dispositivos móveis",
      "Navegação fluida e intuitiva",
    ],
    link: "https://churrasqueiraltosaojoao.pt",
    category: "Website Comercial",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};
