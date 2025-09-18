import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, BookOpen, Globe, Users, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "Emergency Contacts",
      icon: Phone,
      color: "text-destructive",
      items: [
        {
          title: "Emergency Services",
          description: "For life-threatening emergencies",
          contact: "911",
          type: "emergency"
        },
        {
          title: "Poison Control Center",
          description: "24/7 poison emergency helpline",
          contact: "1-800-222-1222",
          type: "urgent"
        },
        {
          title: "Medicare Drug Plan Helpline",
          description: "Medicare prescription drug benefit questions",
          contact: "1-800-MEDICARE",
          type: "support"
        }
      ]
    },
    {
      category: "Educational Resources",
      icon: BookOpen,
      color: "text-primary",
      items: [
        {
          title: "National Institute on Aging",
          description: "Comprehensive health information for older adults",
          link: "https://www.nia.nih.gov",
          type: "website"
        },
        {
          title: "FDA Drug Safety Communications",
          description: "Latest safety information about medications",
          link: "https://www.fda.gov/drugs/drug-safety-and-availability",
          type: "website"
        },
        {
          title: "Medication Safety Guide",
          description: "Downloadable PDF guide for safe medication use",
          type: "download"
        }
      ]
    },
    {
      category: "Support Organizations",
      icon: Users,
      color: "text-secondary",
      items: [
        {
          title: "AARP Health Resources",
          description: "Health tools and information for seniors",
          link: "https://www.aarp.org/health",
          type: "website"
        },
        {
          title: "National Council on Aging",
          description: "Benefits and resources for older adults",
          link: "https://www.ncoa.org",
          type: "website"
        },
        {
          title: "Local Area Agency on Aging",
          description: "Find local services and support in your community",
          type: "local"
        }
      ]
    }
  ];

  const medicationTips = [
    {
      title: "Keep a Medication List",
      description: "Maintain an up-to-date list of all medications, including dosages and prescribing doctors",
      priority: "high"
    },
    {
      title: "Use a Pill Organizer",
      description: "Weekly pill organizers help ensure you don't miss doses or take extra medications",
      priority: "high"
    },
    {
      title: "Set Reminders",
      description: "Use phone alarms, apps, or ask family members to help remind you about medication times",
      priority: "medium"
    },
    {
      title: "Regular Medication Reviews",
      description: "Schedule annual reviews with your doctor or pharmacist to assess all medications",
      priority: "high"
    },
    {
      title: "Store Medications Properly",
      description: "Keep medications in original containers, away from heat and moisture",
      priority: "medium"
    },
    {
      title: "Know Your Pharmacist",
      description: "Build a relationship with your pharmacist - they're a valuable resource for medication questions",
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-accent text-accent-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getItemTypeIcon = (type: string) => {
    switch (type) {
      case "emergency": return <Phone className="w-4 h-4 text-destructive" />;
      case "website": return <Globe className="w-4 h-4 text-primary" />;
      case "download": return <Download className="w-4 h-4 text-secondary" />;
      default: return <BookOpen className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Resources & Support
            </h1>
            <p className="text-lg text-muted-foreground">
              Essential contacts, educational materials, and helpful organizations for medication safety
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Resources */}
          <div className="lg:col-span-2 space-y-8">
            {resources.map((category, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-4 p-4 rounded-lg border hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 mt-1">
                          {getItemTypeIcon(item.type)}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                          
                          {item.contact && (
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-primary" />
                              <span className="font-mono text-lg font-semibold text-primary">
                                {item.contact}
                              </span>
                            </div>
                          )}
                          
                          {item.link && (
                            <Button variant="outline" size="sm" className="mt-2">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Website
                            </Button>
                          )}
                          
                          {item.type === "download" && (
                            <Button variant="outline" size="sm" className="mt-2">
                              <Download className="w-4 h-4 mr-2" />
                              Download Guide
                            </Button>
                          )}
                          
                          {item.type === "local" && (
                            <Button variant="outline" size="sm" className="mt-2">
                              <Globe className="w-4 h-4 mr-2" />
                              Find Local Services
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar - Quick Tips */}
          <div className="space-y-6">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-xl">Medication Safety Tips</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {medicationTips.map((tip, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm leading-tight">{tip.title}</h4>
                        <Badge className={`${getPriorityColor(tip.priority)} text-xs ml-2`}>
                          {tip.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Card */}
            <Card className="medical-card border-destructive/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-destructive flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>In Case of Emergency</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="alert-warning">
                  <p className="text-sm font-medium">
                    If you suspect a medication overdose or serious adverse reaction:
                  </p>
                  <ul className="mt-2 text-xs space-y-1">
                    <li>• Call 911 for emergencies</li>
                    <li>• Contact Poison Control: 1-800-222-1222</li>
                    <li>• Bring all medication bottles to the hospital</li>
                  </ul>
                </div>
                
                <Button className="w-full btn-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;