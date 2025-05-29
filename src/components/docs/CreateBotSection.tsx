

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageSquare, Link, FileText, Zap, Shield, CheckCircle } from "lucide-react";

const CreateBotSection = () => {
  const responseStyles = [
    {
      type: "Short Responses",
      description: "Concise, conversational responses similar to chat-based AI platforms",
      bestFor: "Quick interactions and casual roleplay",
      icon: MessageSquare
    },
    {
      type: "Detailed Responses", 
      description: "Rich, descriptive responses with detailed narrative elements",
      bestFor: "Immersive storytelling and literary roleplay",
      icon: FileText
    }
  ];

  const profileElements = [
    "Physical appearance and mannerisms",
    "Personality traits and psychological patterns",
    "Background history and relationships", 
    "Skills, abilities, and knowledge areas",
    "Speech patterns and communication style",
    "Motivations, fears, and personal goals",
    "Unique quirks and characteristics"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">Creating Your First RP Bot</h1>
        <p className="text-xl text-muted-foreground">
          Step-by-step guide to creating your first AI roleplay character.
        </p>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <MessageSquare className="h-4 w-4 text-accent" />
        <AlertDescription className="text-foreground">
          To create your first roleplay bot, send a direct message to the NarrativAI bot and mention it in your message. 
          This will trigger the bot creation wizard that guides you through the entire process.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Step 1: Character Information Source</h2>
        <p className="text-muted-foreground mb-4">
          You'll be presented with two options for providing character information:
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground font-title">
                <FileText className="h-5 w-5 text-green-400" />
                <span>Custom Description</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Write your own detailed character description. This gives you complete creative control 
                over your character's personality, background, appearance, and traits.
              </p>
              <Badge variant="outline" className="text-green-300 border-green-500/30 bg-green-500/10">
                Recommended for Original Characters
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 bg-slate-800/30 border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground font-title">
                <Link className="h-5 w-5 text-blue-400" />
                <span>Link</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Provide a URL to a webpage containing character information. NarrativAI will automatically 
                extract and analyze the content to create a comprehensive character profile.
              </p>
              <Badge variant="outline" className="text-blue-300 border-blue-500/30 bg-blue-500/10">
                Great for Existing Characters
              </Badge>
            </CardContent>
          </Card>
        </div>

        <Alert className="bg-slate-800/50 border-slate-700/50">
          <CheckCircle className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground">
            <strong className="text-accent">Pro Tip:</strong> The more detailed your character description, the better your character 
            will be able to roleplay authentically. Include personality quirks, speaking patterns, and backstory details.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Step 2: Response Style Selection</h2>
        <p className="text-muted-foreground mb-4">
          Choose how your character will communicate:
        </p>
        
        <div className="space-y-4">
          {responseStyles.map((style, index) => {
            const Icon = style.icon;
            return (
              <Card key={index} className="border-l-4 border-l-purple-500 bg-slate-800/30 border-slate-700/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon className="h-8 w-8 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 font-title">{style.type}</h3>
                      <p className="text-muted-foreground mb-2">{style.description}</p>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        Best for: {style.bestFor}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Step 3: Secure Token Input</h2>
        <Card className="border-l-4 border-l-red-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-title">
              <Shield className="h-5 w-5 text-red-400" />
              <span>Security First</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              You'll be prompted to securely enter your Discord bot token. The system uses a secure modal 
              interface that ensures your token isn't visible in chat history.
            </p>
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
              <p className="text-red-300 text-sm">
                <strong>Important:</strong> Simply click the secure input button and paste your bot token when prompted. 
                Never share your token in regular chat messages.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Character Profile Generation</h2>
        <p className="text-muted-foreground mb-4">
          NarrativAI uses advanced AI analysis to create comprehensive character profiles that include:
        </p>
        
        <div className="grid gap-3">
          {profileElements.map((element, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span className="text-blue-200">{element}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Bot Deployment</h2>
        <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Zap className="h-8 w-8 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-400 mb-2 font-title">Automatic Deployment</h3>
                <p className="text-green-300">
                  Once your character information is processed and your token is validated, NarrativAI will 
                  automatically deploy your character bot. The deployment process typically takes a few moments, 
                  and your character will appear online in your Discord server shortly after creation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateBotSection;

