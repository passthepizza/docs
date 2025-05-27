
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageCircle, Users, RefreshCw, User, Terminal } from "lucide-react";

const InteractingSection = () => {
  const responseFactors = [
    "Their established personality and traits",
    "Memory of previous conversations with you",
    "Current emotional state and relationship dynamics", 
    "Relevant world information and background context",
    "Other participants in the conversation"
  ];

  const multiCharacterFeatures = [
    "Respond to each other's messages",
    "Develop relationships and dynamics",
    "Reference shared experiences and memories",
    "Maintain consistent personalities in group settings"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">Interacting with Characters</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to communicate with your AI characters and create engaging conversations.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Basic Conversation</h2>
        <Card className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <MessageCircle className="h-8 w-8 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-serif">Natural Communication</h3>
                <p className="text-muted-foreground">
                  Simply send messages in any channel where your character bot is present. The character will 
                  respond based on their personality, memory of previous interactions, and the current context 
                  of the conversation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Character Responses</h2>
        <p className="text-muted-foreground mb-4">
          Characters provide contextually appropriate responses that reflect:
        </p>
        
        <div className="grid gap-3">
          {responseFactors.map((factor, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-200">{factor}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Multi-Character Interactions</h2>
        <Card className="border-l-4 border-l-purple-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Users className="h-5 w-5 text-purple-400" />
              <span>Group Conversations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              When multiple character bots are present in the same channel or thread, they can interact 
              with each other autonomously. This creates dynamic group conversations where characters:
            </p>
            <ul className="space-y-2">
              {multiCharacterFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Response Regeneration</h2>
        <Card className="border-l-4 border-l-orange-500 bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <RefreshCw className="h-8 w-8 text-orange-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-serif">Alternative Responses</h3>
                <p className="text-muted-foreground mb-3">
                  If you're not satisfied with a character's response, you can use the regenerate button 
                  that appears after each message to get an alternative response.
                </p>
                <Badge variant="outline" className="text-orange-300 border-orange-500/30 bg-orange-500/10">
                  Explore different conversation directions
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Setting Your Persona</h2>
        <Alert className="bg-slate-800/50 border-slate-700/50">
          <Terminal className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground">
            Use the <code className="bg-slate-700 px-2 py-1 rounded text-sm text-accent">/setpersona</code> command to establish 
            how you want characters to perceive and refer to you in a specific channel. This helps characters understand 
            your role in the roleplay scenario and respond appropriately.
          </AlertDescription>
        </Alert>
        
        <Card className="border-l-4 border-l-indigo-500 bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <User className="h-8 w-8 text-indigo-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-serif">Channel-Specific Identity</h3>
                <p className="text-muted-foreground">
                  Your persona can be different in each channel, allowing you to play different roles or 
                  characters across various roleplay scenarios. Characters will remember and reference 
                  your established persona in their responses.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6">
        <h3 className="font-semibold text-green-400 mb-2 font-serif">Tips for Great Interactions</h3>
        <ul className="text-green-300 space-y-1">
          <li>• Be descriptive in your messages to encourage detailed responses</li>
          <li>• Reference past conversations to see character memory in action</li>
          <li>• Try different conversation styles to explore character personality</li>
          <li>• Use emotes and actions (*does something*) for immersive roleplay</li>
          <li>• Ask characters about their thoughts and feelings for deeper interactions</li>
        </ul>
      </div>
    </div>
  );
};

export default InteractingSection;
