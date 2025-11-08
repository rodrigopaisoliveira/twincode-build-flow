import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Portfólio", path: "/portfolio" },
  { label: "Sobre Nós", path: "/sobre" },
  { label: "Contacto", path: "/Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 👇 Função utilitária para navegar e fazer scroll suave ao topo
  const handleNavigation = (path: string) => {
    setIsOpen(false); // fecha o menu mobile se estiver aberto
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <Code2 className="text-primary" size={32} />
            <span className="gradient-text">TwinCode</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  location.pathname === item.path
                    ? "text-primary after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavigation("/Contacto")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento
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
          <div className="md:hidden py-4 border-t border-border fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg text-left",
                    location.pathname === item.path
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavigation("/Contacto")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity mx-4"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
