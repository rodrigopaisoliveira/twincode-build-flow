import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Building2, Wrench, Truck, HardHat } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construção e Remodelações",
    description: "Do projeto à entrega, gerimos toda a obra com qualidade e transparência.",
    benefits: [
      "Projetos personalizados",
      "Materiais de qualidade certificada",
      "Gestão completa da obra",
      "Garantia de acabamentos",
    ],
  },
  {
    icon: Wrench,
    title: "Gestão e Coordenação de Obra",
    description: "Uma equipa, um contacto. Coordenamos todos os profissionais necessários.",
    benefits: [
      "Ponto único de contacto",
      "Coordenação de especialidades",
      "Controlo de prazos e custos",
      "Comunicação transparente",
    ],
  },
  {
    icon: Truck,
    title: "Transporte e Logística de Materiais",
    description: "Entrega simples e pontual de materiais de construção.",
    benefits: [
      "Entregas pontuais",
      "Materiais protegidos",
      "Flexibilidade de horários",
      "Cobertura nacional",
    ],
  },
  {
    icon: HardHat,
    title: "Instalação Especializada",
    description: "Técnico certo, primeira vez. Instalações com garantia.",
    benefits: [
      "Profissionais certificados",
      "Equipamento moderno",
      "Trabalho garantido",
      "Manutenção incluída",
    ],
  },
];

const Servicos = () => {
  return (
    <>
      <SEOHead
        title="Serviços de Construção e Logística | TwinCode"
        description="Construção, remodelações, gestão de obra e transporte."
        path="/servicos"
      />
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Os Nossos Serviços
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluções completas para construção e logística. Do planeamento à entrega.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="bg-primary text-primary-foreground w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={28} />
                    </div>
                    <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-cta"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
              <p className="text-muted-foreground mb-6">
                Conte-nos o seu projeto e enviaremos uma proposta personalizada
              </p>
              <Button
                asChild
                size="lg"
                className="bg-cta hover:bg-cta-hover text-cta-foreground"
              >
                <Link to="/orcamento">Quero Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Servicos;
