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
    title: "MF Gil Construções",
    description: "Website institucional para empresa de construção civil",
    fullDescription: "Desenvolvimento completo de website institucional para a MF Gil Construções, incluindo galeria de projetos, sistema de orçamentos online e área administrativa para gestão de conteúdo.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    features: [
      "Design responsivo e moderno",
      "Galeria de projetos interativa",
      "Formulário de orçamento integrado",
      "Sistema de gestão de conteúdo",
      "Otimização SEO completa",
    ],
    link: "https://mfgilconstrucoes.pt",
    category: "Website Institucional",
  },
  {
    id: "tank18",
    title: "Tank-18",
    description: "Plataforma de logística e transporte",
    fullDescription: "Plataforma web completa para gestão de logística e transporte, com sistema de rastreamento em tempo real, gestão de rotas e dashboard analítico.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&h=800&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    features: [
      "Rastreamento em tempo real",
      "Dashboard analítico",
      "Gestão de rotas otimizada",
      "Sistema de notificações",
      "Integração com GPS",
    ],
    link: "https://tank-18.pt",
    category: "Plataforma Web",
  },
  {
    id: "cgl",
    title: "CGL Transportes",
    description: "Sistema de gestão de frota",
    fullDescription: "Sistema web completo para gestão de frota de transportes, incluindo controlo de veículos, manutenções, motoristas e documentação.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    features: [
      "Gestão completa de veículos",
      "Controlo de manutenções",
      "Sistema de documentação",
      "Relatórios personalizados",
      "Interface intuitiva",
    ],
    link: "https://cgltransportes.pt",
    category: "Sistema Web",
  },
  {
    id: "churrasqueira",
    title: "Churrasqueira Alto São João",
    description: "Website para restaurante com sistema de reservas",
    fullDescription: "Website moderno para restaurante especializado em churrasco, com sistema de reservas online, menu digital e galeria de pratos.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=800&fit=crop",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    features: [
      "Sistema de reservas online",
      "Menu digital interativo",
      "Galeria de fotos",
      "Integração com redes sociais",
      "Design apetitoso e moderno",
    ],
    link: "https://churrasqueiraltosaojoao.pt",
    category: "Website Comercial",
  },
  {
    id: "ecommerce",
    title: "Loja Online Premium",
    description: "E-commerce completo com checkout integrado",
    fullDescription: "Desenvolvimento de loja online completa com carrinho de compras, checkout seguro, painel administrativo e integração com sistemas de pagamento.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    features: [
      "Carrinho de compras avançado",
      "Checkout seguro",
      "Painel administrativo",
      "Gestão de inventário",
      "Múltiplos métodos de pagamento",
    ],
    category: "E-commerce",
  },
  {
    id: "landing",
    title: "Landing Page Tech Startup",
    description: "Landing page de alta conversão",
    fullDescription: "Landing page otimizada para conversão, desenvolvida para startup de tecnologia com foco em captação de leads e apresentação de produto.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    technologies: ["React", "Framer Motion", "TypeScript", "Analytics"],
    features: [
      "Design de alta conversão",
      "Animações suaves",
      "Formulários otimizados",
      "A/B testing integrado",
      "Analytics completo",
    ],
    category: "Landing Page",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};
