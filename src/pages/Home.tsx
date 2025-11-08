import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Palette, Zap, TrendingUp, ArrowRight, Code2, Sparkles } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Design Moderno",
    description: "Interfaces elegantes e intuitivas que encantam seus usuários",
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Sites rápidos e responsivos em qualquer dispositivo",
  },
  {
    icon: TrendingUp,
    title: "SEO Otimizado",
    description: "Melhore sua visibilidade nos motores de busca",
  },
];

const featuredProjects = [
  {
    id: "mfgil",
    title: "MF Gil Construções",
    description: "Website institucional para empresa de construção civil",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: "tank18",
    title: "Tank-18",
    description: "Plataforma de logística e transporte",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop",
  },
  {
    id: "cgl",
    title: "CGL Transportes",
    description: "Sistema de gestão de frota",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop",
  },
];

const Home = () => {
  return (
    <>
      <SEOHead
        title="Twin Code | Desenvolvimento de Websites Profissionais"
        description="Transformamos ideias em sites incríveis. Criação de websites personalizados, lojas online e landing pages."
        path="/"
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
          <div className="container mx-auto text-center relative z-10 max-w-5xl fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles size={16} />
              Desenvolvimento Web Personalizado
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transformamos ideias em{" "}
              <span className="gradient-text">sites incríveis</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Na Twin Code criamos websites únicos e sob medida, adaptados às necessidades de cada cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-glow"
              >
                <Link to="/contato">
                  Pedir Orçamento
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                <Link to="/portfolio">Ver Portfólio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Porquê escolher a Twin Code?
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Combinamos criatividade, tecnologia e estratégia para entregar soluções web que fazem a diferença.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-glow transition-all duration-300 hover-scale border-2"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projetos em Destaque
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça alguns dos websites que desenvolvemos para os nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/portfolio/${project.id}`}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 hover-scale border-2">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm">
                        Ver Detalhes
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-2">
                <Link to="/portfolio">Ver Todos os Projetos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-12 text-center bg-gradient-dark text-white border-0 shadow-glow">
              <Code2 className="mx-auto mb-6 text-accent" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para começar o seu projeto?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e solicite um orçamento personalizado. Vamos transformar sua ideia em realidade.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
