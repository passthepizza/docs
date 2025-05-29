

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

const GettingStartedSection = () => {
  const prerequisites = [
    "A Discord account",
    "A Discord bot token from the Discord Developer Portal", 
    "Basic understanding of Discord server management"
  ];

  const intents = [
    "Presence Intent",
    "Server Members Intent",
    "Message Content Intent"
  ];

  const steps = [
    {
      step: 1,
      title: "Visit the Discord Developer Portal",
      description: "Go to the Discord Developer Portal and create a new application.",
      link: "https://discord.com/developers/applications"
    },
    {
      step: 2,
      title: "Create Your Bot",
      description: "Navigate to the 'Bot' section and click 'Add Bot' to create your bot user."
    },
    {
      step: 3,
      title: "Enable Required Intents",
      description: "Under 'Privileged Gateway Intents,' enable all three required intents."
    },
    {
      step: 4,
      title: "Copy Your Bot Token",
      description: "Copy your bot token and keep it secure. Never share this token with anyone."
    },
    {
      step: 5,
      title: "Invite Your Bot",
      description: "Invite your bot to your Discord server with appropriate permissions."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">Getting Started</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to set up your Discord bot and begin creating AI characters.
        </p>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <AlertCircle className="h-4 w-4 text-accent" />
        <AlertDescription className="text-foreground">
          Before you can create your first character bot, you'll need to set up a Discord bot token. 
          This process is required by Discord's API and ensures your characters can connect to Discord servers.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Prerequisites</h2>
        <Card className="bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-title">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>What You'll Need</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {prerequisites.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Setting Up Your Discord Bot</h2>
        <div className="space-y-4">
          {steps.map((step) => (
            <Card key={step.step} className="border-l-4 border-l-primary bg-slate-800/30 border-slate-700/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Badge variant="secondary" className="flex-shrink-0 bg-primary/20 text-primary border-primary/30">
                    {step.step}
                  </Badge>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center space-x-2 font-title">
                      <span>{step.title}</span>
                      {step.link && (
                        <a 
                          href={step.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground font-serif">Required Privileged Gateway Intents</h3>
        <div className="grid gap-3">
          {intents.map((intent, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="font-medium text-green-200">{intent}</span>
            </div>
          ))}
        </div>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <CheckCircle className="h-4 w-4 text-accent" />
        <AlertDescription className="text-foreground">
          <strong className="text-accent">Security Note:</strong> Your bot token is like a password for your Discord bot. 
          Keep it secure and never share it publicly. If you accidentally expose it, regenerate a new token immediately.
        </AlertDescription>
      </Alert>

      <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-6">
        <h3 className="font-semibold text-primary mb-2 font-title">Ready to Create Your First Character?</h3>
        <p className="text-muted-foreground">
          Once you have your bot token ready, you can begin the character creation process by 
          messaging the NarrativAI main bot directly. The process is guided and user-friendly!
        </p>
      </div>
    </div>
  );
};

export default GettingStartedSection;

