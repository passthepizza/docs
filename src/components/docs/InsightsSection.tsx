
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Brain, User, Heart, Search, TrendingUp, Terminal } from "lucide-react";

const InsightsSection = () => {
  const memoryFeatures = [
    "Remember specific conversations and interactions",
    "Develop detailed profiles of users they interact with",
    "Form emotional connections and relationship dynamics", 
    "Learn and adapt based on ongoing experiences"
  ];

  const profileElements = [
    "Personality Traits: How characters perceive your personality",
    "Interests: Topics and activities you enjoy discussing",
    "Communication Style: How you prefer to interact",
    "Emotional Patterns: Your typical emotional responses and moods", 
    "Relationship History: The development of your relationship with the character"
  ];

  const characterReflections = [
    "Recent Thoughts: What the character has been thinking about lately",
    "Relationship Analysis: How the character views their relationships", 
    "Emotional State: The character's current feelings and mood",
    "Memory Highlights: Important moments the character remembers"
  ];

  const searchCapabilities = [
    "Locate past interactions on specific subjects",
    "Review relationship development over time",
    "Find references to particular events or people",
    "Understand how memories influence current behavior"
  ];

  const relationshipInsights = [
    "Relationship strength and development",
    "Emotional connections and bonds",
    "Shared experiences and memories",
    "Interaction patterns and preferences"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">Character Insights & Memory</h1>
        <p className="text-xl text-muted-foreground">
          Explore advanced memory systems and gain insights into character development and relationships.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Advanced Memory Systems</h2>
        <Card className="border-l-4 border-l-blue-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Brain className="h-5 w-5 text-blue-400" />
              <span>Sophisticated Memory Architecture</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              NarrativAI employs sophisticated memory systems that allow characters to:
            </p>
            <ul className="space-y-2">
              {memoryFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">User Profile Development</h2>
        <p className="text-muted-foreground mb-4">
          Characters automatically build detailed profiles of users that include:
        </p>
        
        <div className="space-y-3">
          {profileElements.map((element, index) => {
            const [title, description] = element.split(': ');
            return (
              <Card key={index} className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground font-serif">{title}</h4>
                      <p className="text-muted-foreground text-sm">{description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Viewing Your Profile</h2>
        <Alert className="bg-slate-800/50 border-slate-700/50">
          <Terminal className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground">
            Use the <code className="bg-slate-700 px-2 py-1 rounded text-sm text-accent">/insights</code> command and select 
            "My Profile" to see how characters perceive you. This provides fascinating insights into how your 
            interactions shape character understanding and relationship development.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Character Thoughts and Reflections</h2>
        <Card className="border-l-4 border-l-purple-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Brain className="h-5 w-5 text-purple-400" />
              <span>Access Character Reflections</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Access character reflections to understand:
            </p>
            <div className="grid gap-3">
              {characterReflections.map((reflection, index) => {
                const [title, description] = reflection.split(': ');
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div>
                      <span className="font-medium text-purple-400">{title}:</span>
                      <span className="text-purple-300 ml-1">{description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Memory Search</h2>
        <Card className="border-l-4 border-l-orange-500 bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Search className="h-8 w-8 text-orange-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-serif">Powerful Search Capabilities</h3>
                <p className="text-muted-foreground mb-4">
                  Search through character memories to find specific conversations, events, or topics. 
                  This powerful feature allows you to:
                </p>
                <ul className="space-y-2">
                  {searchCapabilities.map((capability, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Relationship Status</h2>
        <Card className="border-l-4 border-l-pink-500 bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-pink-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-serif">Relationship Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  View detailed relationship dynamics between characters and users, including:
                </p>
                <div className="grid gap-3">
                  {relationshipInsights.map((insight, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-pink-500/20 border border-pink-500/30 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-pink-400 flex-shrink-0" />
                      <span className="text-pink-300">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-lg p-6">
        <h3 className="font-semibold text-blue-400 mb-2 font-serif">Understanding Character Development</h3>
        <p className="text-blue-300 mb-3">
          The insights system provides unprecedented visibility into how AI characters think, feel, and grow. 
          By understanding these patterns, you can:
        </p>
        <ul className="text-blue-300 space-y-1">
          <li>• Tailor your interactions to deepen relationships</li>
          <li>• Understand character motivations and reactions</li>
          <li>• Track emotional development over time</li>
          <li>• Optimize roleplay scenarios based on character preferences</li>
        </ul>
      </div>
    </div>
  );
};

export default InsightsSection;
