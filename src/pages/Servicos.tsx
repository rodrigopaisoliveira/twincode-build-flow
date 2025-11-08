import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { Globe, ShoppingCart, Rocket, Search, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Criação de Websites",
    description: "Desenvolvemos websites institucionais modernos e responsivos, perfeitamente adaptados à identidade da sua marca.",
    features: ["Design personalizado", "Responsivo", "CMS integrado", "Performance otimizada"],
  },
  {
    icon: ShoppingCart,
    title: "Lojas Online",
    description: "E-commerce completo com carrinho de compras, checkout seguro e integração com métodos de pagamento.",
    features: ["Carrinho de compras", "Pagamento seguro", "Gestão de produtos", "Relatórios de vendas"],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em capturar leads e impulsionar suas campanhas de marketing.",
    features: ["Alta conversão", "A/B testing", "Integração com CRM", "Analytics detalhado"],
  },
  {
    icon: Search,
    title: "Otimização SEO",
    description: "Melhore o posicionamento do seu site nos motores de busca e aumente sua visibilidade online.",
    features: ["Análise técnica", "Keywords strategy", "Link building", "Relatórios mensais"],
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Mantenha seu website sempre atualizado, seguro e funcionando perfeitamente.",
    features: ["Updates regulares", "Backups diários", "Suporte técnico", "Monitoramento 24/7"],
  },
];

const Servicos = () => {
  return (
    <>
      <SEOHead
        title="Serviços | Twin Code - Desenvolvimento Web"
        description="Criação de websites, lojas online, landing pages, otimização SEO e manutenção. Soluções web completas."
        path="/servicos"
      />
      <Navbar />
      
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nossos <span className="gradient-text">Serviços</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluções web completas para impulsionar o seu negócio online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-glow transition-all duration-300 hover-scale border-2 fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full border-2 group">
                      <Link to="/contato" className="flex items-center justify-center gap-2">
                        Solicitar Orçamento
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                      </Link>
                    </Button>
                  </Card>
                );
              })}
            </div>

            {/* Process Section */}
            <div className="bg-secondary/30 rounded-3xl p-12 mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Nosso Processo</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Consulta", desc: "Entendemos suas necessidades" },
                  { step: "02", title: "Planejamento", desc: "Criamos a estratégia perfeita" },
                  { step: "03", title: "Desenvolvimento", desc: "Construímos sua solução" },
                  { step: "04", title: "Lançamento", desc: "Seu projeto online e funcionando" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-3">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <Card className="p-12 text-center bg-gradient-dark text-white border-0 shadow-glow">
              <h2 className="text-3xl font-bold mb-4">
                Pronto para começar seu projeto?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e receba um orçamento personalizado para o seu projeto.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:opacity-90 transition-opacity"
              >
                <Link to="/contato">Solicitar Orçamento Grátis</Link>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Servicos;
