
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Gamepad2, Play, MessageSquare, Users, Layers, Terminal } from "lucide-react";

const RoleplayToolsSection = () => {
  const scenarioFeatures = [
    "Scenario Prompts: Create specific situations or events for characters to respond to",
    "Setting Establishment: Define the current scene, location, or circumstances",
    "Mood Setting: Establish the emotional tone or atmosphere for interactions"
  ];

  const threadBenefits = [
    "Named Threads: Create threads with specific titles for organized roleplay",
    "Private Spaces: Establish separate conversation areas for different scenarios", 
    "Focused Interactions: Maintain distinct storylines and character developments"
  ];

  const threadFeatures = [
    "Characters maintain separate memory contexts",
    "Different storylines can develop simultaneously",
    "Specific scenarios can unfold without interference",
    "Group dynamics can be carefully managed"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">Roleplay Tools</h1>
        <p className="text-xl text-muted-foreground">
          Specialized tools for creating engaging roleplay scenarios and managing immersive experiences.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Starting Scenarios</h2>
        <Alert className="bg-slate-800/50 border-slate-700/50">
          <Terminal className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground">
            Use the <code className="bg-slate-700 px-2 py-1 rounded text-sm text-accent">/roleplay</code> command to access 
            scenario tools that help initiate engaging roleplay situations.
          </AlertDescription>
        </Alert>

        <Card className="border-l-4 border-l-blue-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Play className="h-5 w-5 text-blue-400" />
              <span>Scenario Creation Tools</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scenarioFeatures.map((feature, index) => {
                const [title, description] = feature.split(': ');
                return (
                  <div key={index} className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2 font-serif">{title}</h4>
                    <p className="text-blue-300 text-sm">{description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Creating RP Threads</h2>
        <Card className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <MessageSquare className="h-5 w-5 text-green-400" />
              <span>Dedicated Roleplay Spaces</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Generate dedicated roleplay threads for focused interactions:
            </p>
            <div className="space-y-3">
              {threadBenefits.map((benefit, index) => {
                const [title, description] = benefit.split(': ');
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-foreground">{title}:</span>
                      <span className="text-muted-foreground ml-1">{description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Thread Management</h2>
        <Card className="border-l-4 border-l-purple-500 bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Layers className="h-8 w-8 text-purple-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-serif">Isolated Environments</h3>
                <p className="text-muted-foreground mb-4">
                  Roleplay threads provide isolated environments where:
                </p>
                <div className="grid gap-3">
                  {threadFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                      <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-orange-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Gamepad2 className="h-5 w-5 text-orange-400" />
              <span>Scenario Examples</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Tavern meeting between adventurers</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Diplomatic negotiations</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Mystery investigation</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Combat encounters</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Social gatherings</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-indigo-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Users className="h-5 w-5 text-indigo-400" />
              <span>Thread Benefits</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Organized storyline management</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Reduced conversation clutter</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Character context isolation</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Easy scene transitions</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                <span className="text-muted-foreground">Parallel story development</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg p-6">
        <h3 className="font-semibold text-amber-400 mb-2 font-serif">Roleplay Best Practices</h3>
        <ul className="text-amber-300 space-y-1">
          <li>• Start scenarios with clear context and setting descriptions</li>
          <li>• Use threads to separate different storylines and scenes</li>
          <li>• Establish mood and tone at the beginning of scenarios</li>
          <li>• Encourage character interaction through engaging prompts</li>
          <li>• Allow characters time to develop relationships naturally</li>
          <li>• Use descriptive language to enhance immersion</li>
        </ul>
      </div>
    </div>
  );
};

export default RoleplayToolsSection;
