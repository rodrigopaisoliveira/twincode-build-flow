import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import { FileText, Calculator, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Brief Rápido",
    description: "Preencha o formulário com as suas necessidades. Quanto mais detalhe, melhor conseguimos ajudar. Resposta garantida no mesmo dia útil.",
  },
  {
    number: 2,
    icon: Calculator,
    title: "Orçamento Claro",
    description: "Enviamos uma proposta transparente com custos discriminados, prazos realistas e condições de pagamento. Sem surpresas nem letras pequenas.",
  },
  {
    number: 3,
    icon: Hammer,
    title: "Execução",
    description: "A nossa equipa coordena tudo: materiais, especialistas e cronograma. Mantemos contacto regular e atualizações sobre o progresso da obra.",
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: "Entrega & Garantia",
    description: "Vistoria final em conjunto, documentação completa e garantia de todos os trabalhos. O seu projeto concluído, pronto a usar.",
  },
];

const Processo = () => {
  return (
    <>
      <SEOHead
        title="Como Trabalhamos | TwinCode"
        description="4 passos simples, do brief à entrega."
        path="/processo"
      />
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Como Trabalhamos
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Um processo simples e transparente, do primeiro contacto à entrega final.
              </p>
            </div>

            <div className="space-y-12 mb-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="text-cta" size={24} />
                        <h2 className="text-2xl font-semibold">{step.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-border" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center bg-secondary/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Simples, transparente, eficaz</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Não há truques nem complicações. Apenas um processo direto que garante resultados de qualidade dentro do prazo e orçamento acordados.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-cta hover:bg-cta-hover text-cta-foreground"
              >
                <Link to="/orcamento">Começar Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Processo;
