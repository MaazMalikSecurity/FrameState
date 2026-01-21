import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 1. Import Analytics
import { Analytics } from "@vercel/analytics/react"; 
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import FreeTrial from "./pages/FreeTrial";
import NotFound from "./pages/NotFound";
import { DarkModeProvider } from "./context/DarkModeContext";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <DarkModeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* 2. Add the Component here */}
        <Analytics />
        
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </DarkModeProvider>
);

export default App;