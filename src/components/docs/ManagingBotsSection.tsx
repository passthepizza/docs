

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Settings, Bot, Play, Square, Edit, Download, Trash2, Info, Terminal } from "lucide-react";

const ManagingBotsSection = () => {
  const managementOptions = [
    {
      title: "My Bots",
      description: "View a complete list of all your active character bots, including their IDs and brief character descriptions.",
      icon: Bot,
      useCase: "Keep track of all your created characters"
    },
    {
      title: "Bot Information", 
      description: "Get detailed information about any specific bot, including character description, response style settings, and current configuration.",
      icon: Info,
      useCase: "Review your character's setup"
    },
    {
      title: "Restart Bot",
      description: "Restart a specific character bot if it becomes unresponsive or you want to refresh its systems.",
      icon: Play,
      useCase: "Fix unresponsive bots"
    },
    {
      title: "Stop Bot",
      description: "Temporarily stop a character bot. The bot will go offline but can be restarted later.",
      icon: Square,
      useCase: "Temporary maintenance or pausing"
    },
    {
      title: "Edit Bot Settings",
      description: "Modify your character's configuration, including response style, character description updates, and bot status.",
      icon: Edit,
      useCase: "Update character behavior"
    },
    {
      title: "Get Configuration",
      description: "Download your character's complete configuration file, including the full character description.",
      icon: Download,
      useCase: "Backup and review detailed profile"
    },
    {
      title: "Delete Bot",
      description: "Permanently remove a character bot. This action cannot be undone and will delete all associated data.",
      icon: Trash2,
      useCase: "Complete removal (irreversible)"
    }
  ];

  const editableSettings = [
    "Response style (switching between short and detailed responses)",
    "Character description updates", 
    "Bot status and activity display"
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white font-serif">Managing Your Bots</h1>
        <p className="text-xl text-white/80">
          Comprehensive tools for managing and configuring your AI character bots.
        </p>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <Terminal className="h-4 w-4 text-accent" />
        <AlertDescription className="text-white">
          Use the <code className="bg-slate-700 px-2 py-1 rounded text-sm text-accent">/menu</code> command in any channel 
          to open the NarrativAI control panel. This provides access to all bot management features through an intuitive interface.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white font-serif">Bot Management Options</h2>
        <div className="grid gap-6">
          {managementOptions.map((option, index) => {
            const Icon = option.icon;
            const isDestructive = option.title === "Delete Bot";
            
            return (
              <Card key={index} className={`border-l-4 ${isDestructive ? 'border-l-red-500' : 'border-l-primary'} bg-slate-800/30 border-slate-700/50`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon className={`h-8 w-8 flex-shrink-0 ${isDestructive ? 'text-red-400' : 'text-primary'}`} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-white font-title">{option.title}</h3>
                        {isDestructive && (
                          <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-300 border-red-500/30">
                            Irreversible
                          </Badge>
                        )}
                      </div>
                      <p className="text-white/80 mb-3">{option.description}</p>
                      <Badge variant="outline" className={`${isDestructive ? 'text-red-300 border-red-500/30 bg-red-500/10' : 'text-primary border-primary/30 bg-primary/10'}`}>
                        {option.useCase}
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
        <h2 className="text-2xl font-semibold text-white font-serif">Edit Bot Settings</h2>
        <Card className="border-l-4 border-l-green-500 bg-slate-800/30 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white font-title">
              <Settings className="h-5 w-5 text-green-400" />
              <span>Configurable Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 mb-4">
              When editing your bot settings, you can modify:
            </p>
            <ul className="space-y-2">
              {editableSettings.map((setting, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span className="text-white/90">{setting}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-slate-800/50 border-slate-700/50">
        <Trash2 className="h-4 w-4 text-red-400" />
        <AlertDescription className="text-white">
          <strong className="text-red-400">Warning:</strong> Deleting a bot permanently removes all associated data, memories, and configurations. 
          This action cannot be undone. Consider using "Stop Bot" for temporary deactivation instead.
        </AlertDescription>
      </Alert>

      <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-6">
        <h3 className="font-semibold text-primary mb-2 font-title">Best Practices for Bot Management</h3>
        <ul className="text-white/90 space-y-1">
          <li>• Regularly check bot information to ensure configurations are up to date</li>
          <li>• Use the restart function if you notice any performance issues</li>
          <li>• Download configuration backups before making major changes</li>
          <li>• Stop bots temporarily during server maintenance or updates</li>
        </ul>
      </div>
    </div>
  );
};

export default ManagingBotsSection;

