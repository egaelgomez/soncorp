import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import ServicioDetalle from "./pages/ServicioDetalle";
import CustomerExperiencePage from "./pages/CustomerExperiencePage";
import ConsultoriaDeNegociosPage from "./pages/ConsultoriaDeNegociosPage";
import ConsultoriaTIPage from "./pages/ConsultoriaTIPage";
import MarketingAutomatizacionPage from "./pages/MarketingAutomatizacionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/customer-experience" element={<CustomerExperiencePage />} />
            <Route path="/servicios/consultoria-de-negocios" element={<ConsultoriaDeNegociosPage />} />
            <Route path="/servicios/negocio-finanzas-inversion" element={<Navigate to="/servicios/consultoria-de-negocios" replace />} />
            <Route path="/servicios/consultoria-soluciones-ti" element={<ConsultoriaTIPage />} />
            <Route path="/servicios/mesa-ingenieria-ti-por-tickets" element={<Navigate to="/servicios/consultoria-soluciones-ti" replace />} />
            <Route path="/servicios/marketing-automatizacion" element={<MarketingAutomatizacionPage />} />
            <Route path="/servicios/:slug" element={<ServicioDetalle />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
