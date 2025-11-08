import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Linkedin, Code2 } from "lucide-react";

const team = [
  {
    name: "Leonardo Luz",
    role: "CEO & Developer",
    bio: "Especialista em desenvolvimento full-stack com mais de 8 anos de experiência. Apaixonado por criar soluções web inovadoras que fazem a diferença.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rodrigo Oliveira",
    role: "CEO & Developer",
    bio: "Expert em UI/UX e desenvolvimento frontend. Dedicado a transformar ideias complexas em interfaces intuitivas e elegantes.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    linkedin: "https://linkedin.com",
  },
];

const values = [
  {
    title: "Qualidade",
    description: "Comprometidos em entregar soluções web de excelência, que superam expectativas.",
  },
  {
    title: "Inovação",
    description: "Sempre utilizando as tecnologias mais recentes e melhores práticas do mercado.",
  },
  {
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes para garantir o sucesso de cada projeto.",
  },
  {
    title: "Transparência",
    description: "Comunicação clara e honesta em todas as etapas do desenvolvimento.",
  },
];

const Sobre = () => {
  return (
    <>
      <SEOHead
        title="Sobre Nós | Twin Code - Quem Somos"
        description="Conheça a Twin Code e a equipe por trás dos projetos. Leonardo Luz e Rodrigo Oliveira, CEOs e Developers."
        path="/sobre"
      />
      <Navbar />
      
      <main className="pt-20">
        {/* About Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sobre a <span className="gradient-text">Twin Code</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Somos uma empresa especializada em criação e desenvolvimento de websites sob medida. 
                Nossa missão é transformar ideias em experiências digitais memoráveis, combinando 
                design excepcional com tecnologia de ponta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <Card className="p-8 border-2">
                <Code2 className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como referência em desenvolvimento web em Portugal, 
                  criando soluções que não apenas atendem, mas superam as expectativas dos nossos clientes.
                </p>
              </Card>

              <Card className="p-8 border-2">
                <Code2 className="text-accent mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolver websites e aplicações web de alta qualidade que impulsionam 
                  o crescimento dos negócios dos nossos clientes através de soluções personalizadas.
                </p>
              </Card>
            </div>

            {/* Values */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="p-6 text-center hover:shadow-glow transition-all duration-300 hover-scale border-2"
                  >
                    <h3 className="text-lg font-semibold mb-3 text-primary">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa Equipa
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça os fundadores e desenvolvedores por trás da Twin Code
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-glow transition-all duration-300 hover-scale border-2 fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-12 text-center bg-gradient-dark text-white border-0 shadow-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Estamos prontos para transformar suas ideias em realidade. 
                Entre em contato e vamos criar algo incrível.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:opacity-90 transition-opacity"
              >
                <Link to="/contato">Entrar em Contato</Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Sobre;
