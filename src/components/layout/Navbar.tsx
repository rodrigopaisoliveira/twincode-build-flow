import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Serviços", path: "/servicos" },
  { label: "Projetos", path: "/projetos" },
  { label: "Processo", path: "/processo" },
  { label: "Testemunhos", path: "/testemunhos" },
  { label: "FAQ", path: "/faq" },
  { label: "Contactos", path: "/contactos" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-primary">
              TwinCode
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-cta hover:bg-cta-hover text-cta-foreground">
                <Link to="/orcamento">Pedir Orçamento</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary px-4 py-2",
                      location.pathname === item.path
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-cta hover:bg-cta-hover text-cta-foreground mx-4"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/orcamento">Pedir Orçamento</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Button
          asChild
          size="lg"
          className="bg-cta hover:bg-cta-hover text-cta-foreground shadow-lg"
        >
          <Link to="/orcamento">Pedir Orçamento</Link>
        </Button>
      </div>
    </>
  );
};
