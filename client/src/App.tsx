/** Reel Atlas: standalone Module 5 JavaScript Final Project submission. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ReelAtlas from "./pages/ReelAtlas";

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light" switchable><TooltipProvider><Toaster /><ReelAtlas /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
