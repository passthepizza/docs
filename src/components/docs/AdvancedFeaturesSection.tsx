

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Zap, Brain, RefreshCw, BarChart3, Database, Bot, Terminal } from "lucide-react";

const AdvancedFeaturesSection = () => {
  const memoryStats = [
    "Total stored memories and conversations",
    "Memory system health and performance",
    "Storage utilization and efficiency metrics"
  ];

  const consolidationBenefits = [
    "Organize and structure stored information",
    "Improve memory retrieval efficiency", 
    "Maintain long-term memory coherence"
  ];

  const dataManagementOptions = [
    "Selective Clearing: Remove specific types of data while preserving others",
    "Complete Reset: Start fresh with clean character memories",
    "Backup Creation: Export important data before making changes"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">Advanced Features</h1>
        <p className="text-xl text-muted-foreground">
          Powerful tools for memory management, system optimization, and advanced character control.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Memory Management</h2>
        <Alert className="bg-slate-800/50 border-slate-700/50">
          <Terminal className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground">
            Access memory system controls through the <code className="bg-slate-700 px-2 py-1 rounded text-sm text-accent">/memory</code> command 
            for comprehensive memory system management and optimization.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6">
          <Card className="border-l-4 border-l-blue-500 bg-slate-800/30 border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground font-title">
                <BarChart3 className="h-5 w-5 text-blue-400" />
                <span>Memory Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                View detailed information about character memory usage, including:
              </p>
              <ul className="space-y-2">
                {memoryStats.map((stat, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">{stat}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground font-title">
                <Brain className="h-5 w-5 text-green-400" />
                <span>Memory Consolidation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Trigger memory optimization processes that:
              </p>
              <ul className="space-y-2">
                {consolidationBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 bg-slate-800/30 border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <RefreshCw className="h-8 w-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2 font-title">Health Checks</h3>
                  <p className="text-muted-foreground">
                    Verify memory system integrity and performance to ensure optimal character functionality. 
                    Regular health checks help maintain consistent character behavior and response quality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Character Detection</h2>
        <Alert className="bg-slate-800/50 border-slate-700/50">
          <Terminal className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground">
            Use the <code className="bg-slate-700 px-2 py-1 rounded text-sm text-accent">/refreshbots</code> command to update 
            the system's awareness of all character bots in your server. This ensures proper multi-character 
            interactions and relationship tracking.
          </AlertDescription>
        </Alert>

        <Card className="border-l-4 border-l-orange-500 bg-slate-800/30 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Bot className="h-8 w-8 text-orange-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 font-title">System Synchronization</h3>
                <p className="text-muted-foreground">
                  The refresh command updates NarrativAI's internal registry of all character bots present 
                  in your server. This is particularly useful after adding new bots or when characters 
                  aren't properly recognizing each other in group conversations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Data Management</h2>
        <Card className="border-l-4 border-l-red-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-title">
              <Database className="h-5 w-5 text-red-400" />
              <span>Comprehensive Data Control</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Control your data through comprehensive management options:
            </p>
            <div className="space-y-3">
              {dataManagementOptions.map((option, index) => {
                const [title, description] = option.split(': ');
                return (
                  <div key={index} className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2 font-title">{title}</h4>
                    <p className="text-red-300 text-sm">{description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvancedFeaturesSection;

