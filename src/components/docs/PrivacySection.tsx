
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Database, Trash2, Download, Lock, Eye } from "lucide-react";

const PrivacySection = () => {
  const dataTypes = [
    "Conversation Memories: Records of interactions with characters",
    "User Profiles: Character perceptions and relationship data",
    "World Information: Contextual background information",
    "Character Configurations: Bot settings and personality data"
  ];

  const privacyControls = [
    "Selective Deletion: Choose specific data types to remove",
    "Complete Removal: Delete all associated data from the system",
    "Data Export: Download your data before deletion",
    "Granular Control: Manage data on a per-channel basis"
  ];

  const clearingOptions = [
    {
      title: "Clear Memories",
      description: "Remove conversation history while preserving other data",
      icon: Database,
      type: "partial"
    },
    {
      title: "Clear Personas", 
      description: "Reset how characters perceive you",
      icon: Eye,
      type: "partial"
    },
    {
      title: "Clear World Info",
      description: "Remove background context information", 
      icon: Trash2,
      type: "partial"
    },
    {
      title: "Clear Everything",
      description: "Complete data removal for fresh starts",
      icon: Trash2,
      type: "complete"
    }
  ];

  const securityMeasures = [
    "Secure Token Handling: Bot tokens are never stored in chat history",
    "Encrypted Storage: Sensitive data is protected with encryption",
    "Access Controls: Only you can manage your character bots and data",
    "Regular Cleanup: Inactive data is automatically archived"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-serif">Privacy & Data Management</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive privacy controls and data management tools to keep your information secure.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Data Types and Storage</h2>
        <Card className="border-l-4 border-l-blue-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Database className="h-5 w-5 text-blue-400" />
              <span>What Data We Store</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              NarrativAI stores several types of data to provide personalized experiences:
            </p>
            <div className="space-y-3">
              {dataTypes.map((dataType, index) => {
                const [title, description] = dataType.split(': ');
                return (
                  <div key={index} className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-1 font-serif">{title}</h4>
                    <p className="text-blue-300 text-sm">{description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Privacy Controls</h2>
        <Card className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Shield className="h-5 w-5 text-green-400" />
              <span>Complete Data Control</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              You have complete control over your data:
            </p>
            <div className="space-y-3">
              {privacyControls.map((control, index) => {
                const [title, description] = control.split(': ');
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
        <h2 className="text-2xl font-semibold text-foreground font-serif">Data Clearing Options</h2>
        <p className="text-muted-foreground mb-4">
          Access data management through the clear data options:
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {clearingOptions.map((option, index) => {
            const Icon = option.icon;
            const isComplete = option.type === "complete";
            
            return (
              <Card key={index} className={`border-l-4 ${isComplete ? 'border-l-red-500' : 'border-l-orange-500'} bg-slate-800/30 border-slate-700/50`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon className={`h-8 w-8 flex-shrink-0 ${isComplete ? 'text-red-400' : 'text-orange-400'}`} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 font-serif">{option.title}</h3>
                      <p className="text-muted-foreground">{option.description}</p>
                      {isComplete && (
                        <div className="mt-2">
                          <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded border border-red-500/30">
                            Irreversible
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground font-serif">Security Measures</h2>
        <Card className="border-l-4 border-l-purple-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground font-serif">
              <Lock className="h-5 w-5 text-purple-400" />
              <span>Robust Security Practices</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              NarrativAI implements robust security practices:
            </p>
            <div className="space-y-3">
              {securityMeasures.map((measure, index) => {
                const [title, description] = measure.split(': ');
                return (
                  <div key={index} className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-400 mb-1 font-serif">{title}</h4>
                    <p className="text-purple-300 text-sm">{description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <Download className="h-4 w-4 text-accent" />
        <AlertDescription className="text-foreground">
          <strong className="text-accent">Data Export:</strong> Before clearing any data, you can export your information for backup purposes. 
          This ensures you never lose important character configurations or conversation histories.
        </AlertDescription>
      </Alert>

      <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg p-6">
        <h3 className="font-semibold text-red-400 mb-2 font-serif">Important Privacy Notes</h3>
        <ul className="text-red-300 space-y-1">
          <li>• All data clearing operations are immediate and cannot be undone</li>
          <li>• Bot tokens are handled securely and never exposed in chat history</li>
          <li>• You maintain full ownership and control of all your data</li>
          <li>• Data is stored securely and only accessible to you</li>
          <li>• Regular security audits ensure continued protection</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-lg p-6">
        <h3 className="font-semibold text-blue-400 mb-2 font-serif">Data Management Best Practices</h3>
        <ul className="text-blue-300 space-y-1">
          <li>• Regularly review what data is stored about you</li>
          <li>• Export important configurations before making major changes</li>
          <li>• Use selective clearing to remove only unwanted data</li>
          <li>• Consider the impact on character relationships before clearing memories</li>
          <li>• Take advantage of granular controls for precise data management</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacySection;
