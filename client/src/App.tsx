/** Reel Atlas: standalone Module 5 JavaScript Final Project submission. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ReelAtlas from "./pages/ReelAtlas";

function Router() {
  return <Switch><Route path="/" component={ReelAtlas} /><Route path="/reel-atlas" component={ReelAtlas} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light" switchable><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
