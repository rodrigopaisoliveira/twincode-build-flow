import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/ui/seo-head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Em quanto tempo respondem aos pedidos?",
    answer: "Normalmente respondemos no mesmo dia útil. Pedidos enviados após as 18h serão respondidos na manhã seguinte.",
  },
  {
    question: "Fazem visitas ao local antes do orçamento?",
    answer: "Sim, sempre que necessário para garantir a precisão do orçamento. Visitas gratuitas e sem compromisso.",
  },
  {
    question: "Trabalham fora do concelho?",
    answer: "Sim, trabalhamos em todo o país. Avaliamos cada projeto individualmente para garantir que conseguimos prestar um serviço de qualidade.",
  },
  {
    question: "Os orçamentos são gratuitos?",
    answer: "Sim, todos os orçamentos são gratuitos e sem compromisso. Apenas pagará se decidir avançar com o projeto.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento é feito por fases, conforme definido no contrato. Normalmente: sinal inicial, pagamento intercalar durante a obra, e pagamento final após conclusão.",
  },
  {
    question: "Quem será o meu contacto durante o projeto?",
    answer: "Rodrigo Oliveira (932 132 036) ou Leonardo Luz (926 318 581) serão os seus contactos diretos. Uma única pessoa gere todo o projeto.",
  },
  {
    question: "Que garantias oferecem?",
    answer: "Todos os trabalhos incluem garantia legal. A duração específica depende do tipo de trabalho e será detalhada no contrato.",
  },
  {
    question: "Fornecem os materiais ou posso escolher os meus?",
    answer: "Podemos fornecer materiais ou trabalhar com materiais à sua escolha. Aconselhamos sempre as melhores opções para cada projeto.",
  },
];

const FAQ = () => {
  return (
    <>
      <SEOHead
        title="FAQ | TwinCode"
        description="Perguntas frequentes sobre orçamento, prazos e âmbito."
        path="/faq"
      />
      <Navbar />
      
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Perguntas Frequentes
              </h1>
              <p className="text-xl text-muted-foreground">
                Respostas às dúvidas mais comuns sobre os nossos serviços.
              </p>
            </div>

            <Accordion type="single" collapsible className="mb-16">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center bg-secondary/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
              <p className="text-muted-foreground mb-6">
                Envie-nos o seu pedido de orçamento com as suas questões. Respondemos rapidamente.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-cta hover:bg-cta-hover text-cta-foreground"
              >
                <Link to="/orcamento">Tirar Dúvidas no Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;
