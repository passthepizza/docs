
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Map, Plus, List, Trash2, Edit, Terminal } from "lucide-react";

const WorldBuildingSection = () => {
  const worldInfoFeatures = [
    "Locations feel real and detailed",
    "Historical events influence character behavior", 
    "Cultural elements shape character interactions",
    "Consistent lore maintains narrative coherence"
  ];

  const managementOptions = [
    {
      title: "List Entries",
      description: "View all world information entries for the current channel",
      icon: List
    },
    {
      title: "Remove Entries", 
      description: "Delete specific world information by keyword",
      icon: Trash2
    },
    {
      title: "Update Content",
      description: "Modify existing entries to expand or refine world details", 
      icon: Edit
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">World Building & Context</h1>
        <p className="text-xl text-muted-foreground">
          Create rich, immersive environments for your roleplay scenarios with contextual world information.
        </p>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <Terminal className="h-4 w-4 text-accent" />
        <AlertDescription className="text-foreground">
          Access world building tools through the <code className="bg-slate-700 px-2 py-1 rounded text-sm text-accent">/worldinfo</code> command 
          to create rich, contextual backgrounds for your roleplay scenarios.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">World Information System</h2>
        <Card className="border-l-4 border-l-blue-500 bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Map className="h-8 w-8 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-serif">Dynamic Context Integration</h3>
                <p className="text-muted-foreground">
                  The world information system allows you to create detailed backgrounds that characters 
                  automatically reference during conversations. This creates immersive, consistent environments 
                  that enhance roleplay experiences.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Adding World Information</h2>
        <Card className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Plus className="h-5 w-5 text-green-400" />
              <span>Creating Entries</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Create world information entries that characters can reference during conversations:
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2 font-serif">Keywords</h4>
                <p className="text-green-300 text-sm">
                  Specify trigger words that activate this information. When these words appear in conversations, 
                  characters will automatically access the associated content.
                </p>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2 font-serif">Content</h4>
                <p className="text-blue-300 text-sm">
                  Provide detailed descriptions of locations, events, lore, or background information. 
                  The more detailed your content, the richer character responses will be.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Managing World Information</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {managementOptions.map((option, index) => {
            const Icon = option.icon;
            const isDestructive = option.title === "Remove Entries";
            
            return (
              <Card key={index} className={`border-l-4 ${isDestructive ? 'border-l-red-500' : 'border-l-purple-500'} bg-slate-800/30 border-slate-700/50`}>
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <Icon className={`h-8 w-8 mx-auto ${isDestructive ? 'text-red-400' : 'text-purple-400'}`} />
                    <h3 className="font-semibold text-foreground font-serif">{option.title}</h3>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Contextual Integration</h2>
        <p className="text-muted-foreground mb-4">
          Characters seamlessly integrate world information into their responses, creating immersive experiences where:
        </p>
        
        <div className="grid gap-3">
          {worldInfoFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-amber-200">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6">
        <h3 className="font-semibold text-purple-400 mb-2 font-serif">World Building Best Practices</h3>
        <ul className="text-purple-300 space-y-1">
          <li>• Use specific, memorable keywords that naturally come up in conversation</li>
          <li>• Include sensory details (sights, sounds, smells) in location descriptions</li>
          <li>• Create consistent timelines and historical connections</li>
          <li>• Define cultural norms and social structures that affect character behavior</li>
          <li>• Keep entries organized by theme or location for easy management</li>
        </ul>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <Map className="h-4 w-4 text-accent" />
        <AlertDescription className="text-foreground">
          <strong className="text-accent">Pro Tip:</strong> Start with broad concepts and gradually add specific details. 
          This creates a rich foundation that can be expanded over time as your roleplay scenarios develop.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default WorldBuildingSection;
