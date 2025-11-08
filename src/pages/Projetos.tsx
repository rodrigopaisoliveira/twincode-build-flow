import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "MF Gil Construções",
    url: "https://mfgilconstrucoes.pt",
    description: "Projeto completo de construção civil, incluindo gestão de obra e coordenação de todas as especialidades.",
  },
  {
    name: "Tank-18",
    url: "https://tank-18.pt",
    description: "Implementação de soluções logísticas e transporte especializado para materiais de construção.",
  },
  {
    name: "CGL Transportes",
    url: "https://cgltransportes.pt",
    description: "Sistema de gestão de frota e otimização de rotas para transporte de materiais.",
  },
  {
    name: "Churrasqueira Alto São João",
    url: "https://churrasqueiraltosaojoao.pt",
    description: "Remodelação completa e instalação de equipamentos especializados para restauração.",
  },
];

const Projetos = () => {
  return (
    <>
      <SEOHead
        title="Projetos e Parcerias | TwinCode"
        description="Conheça trabalhos com MF Gil, Tank-18, CGL, Churrasqueira Alto São João."
        path="/projetos"
      />
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Projetos e Parcerias
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça alguns dos trabalhos que desenvolvemos e as empresas que confiam em nós.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {projects.map((project) => (
                <Card key={project.name} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-cta transition-colors"
                      aria-label={`Visitar ${project.name}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-cta transition-colors inline-flex items-center gap-1"
                  >
                    Visitar website
                    <ExternalLink size={14} />
                  </a>
                </Card>
              ))}
            </div>

            <div className="text-center bg-secondary/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">O seu projeto pode ser o próximo</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Seja construção, remodelação ou logística, temos a experiência e a equipa certa para tornar o seu projeto realidade.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-cta hover:bg-cta-hover text-cta-foreground"
              >
                <Link to="/orcamento">Falar sobre o meu projeto</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Projetos;
