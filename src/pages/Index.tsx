import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IntroductionSection from "@/components/docs/IntroductionSection";
import GettingStartedSection from "@/components/docs/GettingStartedSection";
import CreateBotSection from "@/components/docs/CreateBotSection";
import ManagingBotsSection from "@/components/docs/ManagingBotsSection";
import InteractingSection from "@/components/docs/InteractingSection";
import WorldBuildingSection from "@/components/docs/WorldBuildingSection";
import InsightsSection from "@/components/docs/InsightsSection";
import RoleplayToolsSection from "@/components/docs/RoleplayToolsSection";
import AdvancedFeaturesSection from "@/components/docs/AdvancedFeaturesSection";
import PrivacySection from "@/components/docs/PrivacySection";
import TroubleshootingSection from "@/components/docs/TroubleshootingSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const navigation = [
    {
      title: "Getting Started",
      items: [
        { id: "introduction", label: "Introduction" },
        { id: "getting-started", label: "Getting Started" },
      ]
    },
    {
      title: "Core Features",
      items: [
        { id: "creating-bot", label: "Creating Your First Bot" },
        { id: "managing-bots", label: "Managing Your Bots" },
        { id: "interacting", label: "Interacting with Characters" },
      ]
    },
    {
      title: "Advanced Usage",
      items: [
        { id: "world-building", label: "World Building & Context" },
        { id: "insights", label: "Character Insights & Memory" },
        { id: "roleplay-tools", label: "Roleplay Tools" },
        { id: "advanced", label: "Advanced Features" },
      ]
    },
    {
      title: "Support",
      items: [
        { id: "privacy", label: "Privacy & Data Management" },
        { id: "troubleshooting", label: "Troubleshooting" },
      ]
    }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "introduction":
        return <IntroductionSection />;
      case "getting-started":
        return <GettingStartedSection />;
      case "creating-bot":
        return <CreateBotSection />;
      case "managing-bots":
        return <ManagingBotsSection />;
      case "interacting":
        return <InteractingSection />;
      case "world-building":
        return <WorldBuildingSection />;
      case "insights":
        return <InsightsSection />;
      case "roleplay-tools":
        return <RoleplayToolsSection />;
      case "advanced":
        return <AdvancedFeaturesSection />;
      case "privacy":
        return <PrivacySection />;
      case "troubleshooting":
        return <TroubleshootingSection />;
      default:
        return <IntroductionSection />;
    }
  };

  const handleNavItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border glassmorphism">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gradient font-serif">NarrativAI Docs</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="glassmorphism hover:bg-white/10">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-sm border-border" align="end">
                {navigation.map((section, index) => (
                  <div key={section.title}>
                    <DropdownMenuLabel className="text-muted-foreground font-serif text-xs uppercase tracking-wider">
                      {section.title}
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      {section.items.map((item) => (
                        <DropdownMenuItem
                          key={item.id}
                          onClick={() => handleNavItemClick(item.id)}
                          className={`cursor-pointer ${
                            activeSection === item.id 
                              ? "bg-primary/20 text-primary" 
                              : ""
                          }`}
                        >
                          {item.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                    {index < navigation.length - 1 && <DropdownMenuSeparator />}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:px-8">
        <div className="max-w-4xl mx-auto">
          {renderActiveSection()}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border glassmorphism py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 NarrativAI. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with <span className="text-accent">❤️</span> for roleplayers, by roleplayers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
