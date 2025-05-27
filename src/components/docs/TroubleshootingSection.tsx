
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { HelpCircle, AlertTriangle, RefreshCw, Brain, Zap, CheckCircle, ExternalLink } from "lucide-react";

const TroubleshootingSection = () => {
  const commonIssues = [
    {
      title: "Character Not Responding",
      icon: AlertTriangle,
      solutions: [
        "Verify your bot token is valid and hasn't expired",
        "Check that required Discord intents are enabled",
        "Restart the character bot through the management panel",
        "Ensure the bot has proper permissions in the channel"
      ]
    },
    {
      title: "Memory Issues",
      icon: Brain,
      solutions: [
        "Run a memory health check to identify problems",
        "Consolidate memories to improve performance", 
        "Clear old or corrupted data if necessary",
        "Contact support if issues persist"
      ]
    },
    {
      title: "Character Behavior Problems",
      icon: RefreshCw,
      solutions: [
        "Review and update the character description if needed",
        "Check world information for conflicting details",
        "Clear and rebuild character memories if behavior is inconsistent",
        "Adjust response style settings if responses don't match expectations"
      ]
    },
    {
      title: "Performance Issues",
      icon: Zap,
      solutions: [
        "Limit the number of active bots in a single channel",
        "Consolidate memories regularly to maintain efficiency",
        "Clear unnecessary world information entries",
        "Monitor memory usage through statistics"
      ]
    }
  ];

  const bestPractices = [
    "Provide detailed character descriptions for better roleplay",
    "Regularly interact with characters to develop relationships",
    "Use world information to create rich, immersive environments",
    "Monitor memory usage and perform maintenance as needed",
    "Experiment with different response styles to find your preference",
    "Create dedicated threads for different roleplay scenarios"
  ];

  const supportResources = [
    "Use the /info command to access support resources",
    "Visit the NarrativAI website for additional documentation", 
    "Contact the development team through official support channels",
    "Check community forums for user-shared solutions"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">Troubleshooting</h1>
        <p className="text-xl text-muted-foreground">
          Solutions to common issues and best practices for optimal NarrativAI experience.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Common Issues and Solutions</h2>
        <div className="space-y-6">
          {commonIssues.map((issue, index) => {
            const Icon = issue.icon;
            return (
              <Card key={index} className="border-l-4 border-l-red-500 bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
                    <Icon className="h-5 w-5 text-red-400" />
                    <span>{issue.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {issue.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Getting Help</h2>
        <Card className="border-l-4 border-l-blue-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <HelpCircle className="h-5 w-5 text-blue-400" />
              <span>Support Resources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you encounter issues not covered in this guide:
            </p>
            <ul className="space-y-2">
              {supportResources.map((resource, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">{resource}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Best Practices</h2>
        <Card className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Optimal NarrativAI Usage</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              To get the most out of NarrativAI:
            </p>
            <div className="grid gap-3">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-200">{practice}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <AlertTriangle className="h-4 w-4 text-accent" />
        <AlertDescription className="text-foreground">
          <strong className="text-accent">Quick Troubleshooting Tip:</strong> Many issues can be resolved by restarting your character bot 
          through the management panel. This refreshes the bot's systems and often resolves temporary glitches.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-purple-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-purple-400 font-serif">Diagnostic Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 text-white rounded-full text-xs flex items-center justify-center mt-0.5">1</span>
                <span className="text-purple-300">Check bot status and permissions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 text-white rounded-full text-xs flex items-center justify-center mt-0.5">2</span>
                <span className="text-purple-300">Verify Discord intents are enabled</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 text-white rounded-full text-xs flex items-center justify-center mt-0.5">3</span>
                <span className="text-purple-300">Run memory health checks</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 text-white rounded-full text-xs flex items-center justify-center mt-0.5">4</span>
                <span className="text-purple-300">Review character configuration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 text-white rounded-full text-xs flex items-center justify-center mt-0.5">5</span>
                <span className="text-purple-300">Contact support if needed</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-orange-400 font-serif">Prevention Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-orange-300">Regular memory maintenance</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-orange-300">Monitor system performance</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-orange-300">Keep bot tokens secure</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-orange-300">Update character descriptions as needed</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-orange-300">Use appropriate response styles</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-500/30 rounded-lg p-6">
        <h3 className="font-semibold text-slate-300 mb-2 font-serif">Platform Evolution</h3>
        <p className="text-slate-400">
          NarrativAI continues to evolve with new features and improvements. This troubleshooting guide covers 
          the core functionality, but check for updates regularly to discover new capabilities and solutions 
          to emerging challenges.
        </p>
      </div>
    </div>
  );
};

export default TroubleshootingSection;
