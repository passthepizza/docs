

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Users, Zap } from "lucide-react";

const IntroductionSection = () => {
  const features = [
    {
      icon: Bot,
      title: "Autonomous Character Bots",
      description: "Each character runs as its own Discord bot with unique personality and memory"
    },
    {
      icon: Brain,
      title: "Advanced Memory Systems", 
      description: "Characters remember conversations, develop relationships, and evolve over time"
    },
    {
      icon: Users,
      title: "Multi-Character Interactions",
      description: "Characters can interact with each other in group conversations"
    },
    {
      icon: Zap,
      title: "Flexible Response Styles",
      description: "Choose between short conversational responses or detailed narrative prose"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-4xl font-bold text-gradient font-serif">Introduction</h1>
          <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary border-primary/30">v1.0</Badge>
        </div>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          NarrativAI is a powerful Discord bot platform that allows you to create and interact with AI-powered roleplay characters.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-muted-foreground leading-relaxed">
          Each character you create becomes a fully autonomous Discord bot with advanced memory systems, 
          personality development, and contextual awareness. Whether you're interested in creative writing, 
          character development, or immersive roleplay experiences, NarrativAI provides the tools to bring 
          your characters to life.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="feature-card border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 font-title">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="glassmorphism border border-primary/30 p-6">
        <h3 className="font-semibold text-primary mb-2 font-title">What makes NarrativAI special?</h3>
        <p className="text-muted-foreground">
          Unlike traditional chatbots, NarrativAI characters develop genuine personalities, 
          form lasting memories, and create meaningful relationships with users. Each interaction 
          contributes to the character's growth and understanding, making every conversation unique and personal.
        </p>
      </div>
    </div>
  );
};

export default IntroductionSection;

