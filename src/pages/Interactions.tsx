import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, AlertTriangle, Pill, Apple, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";

const Interactions = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const interactionTypes = {
    "drug-drug": {
      title: "Drug-Drug Interactions",
      icon: Pill,
      description: "When two or more medications affect each other",
      interactions: [
        {
          medications: ["Warfarin", "Aspirin"],
          riskLevel: "high",
          effect: "Significantly increased bleeding risk",
          symptoms: ["Easy bruising", "Nosebleeds", "Blood in urine or stool"],
          action: "Requires immediate medical supervision and dose adjustment"
        },
        {
          medications: ["Lisinopril", "Potassium supplements"],
          riskLevel: "moderate",
          effect: "High potassium levels (hyperkalemia)",
          symptoms: ["Muscle weakness", "Irregular heartbeat", "Nausea"],
          action: "Regular blood tests needed to monitor potassium levels"
        },
        {
          medications: ["Digoxin", "Furosemide"],
          riskLevel: "moderate",
          effect: "Increased digoxin toxicity risk",
          symptoms: ["Nausea", "Vision changes", "Confusion"],
          action: "Monitor digoxin levels closely, may need dose adjustment"
        }
      ]
    },
    "drug-food": {
      title: "Drug-Food Interactions",
      icon: Apple,
      description: "How certain foods can affect medication effectiveness",
      interactions: [
        {
          medication: "Warfarin",
          food: "Leafy green vegetables (high in Vitamin K)",
          riskLevel: "moderate",
          effect: "Reduced effectiveness of blood thinner",
          symptoms: ["Increased clotting risk"],
          action: "Maintain consistent intake of leafy greens, don't avoid completely"
        },
        {
          medication: "Calcium channel blockers",
          food: "Grapefruit juice",
          riskLevel: "high",
          effect: "Increased medication levels in blood",
          symptoms: ["Dizziness", "Low blood pressure", "Swelling"],
          action: "Avoid grapefruit juice completely while taking these medications"
        },
        {
          medication: "Levothyroxine",
          food: "Calcium-rich foods, coffee",
          riskLevel: "moderate",
          effect: "Reduced absorption of thyroid medication",
          symptoms: ["Fatigue", "Weight gain", "Cold sensitivity"],
          action: "Take medication on empty stomach, wait 1 hour before eating"
        }
      ]
    },
    "timing": {
      title: "Timing Considerations", 
      icon: Clock,
      description: "When and how to take medications for best results",
      interactions: [
        {
          medication: "Statins (cholesterol medications)",
          timing: "Evening",
          reason: "Cholesterol production is highest at night",
          effect: "Maximum effectiveness in lowering cholesterol",
          tips: ["Take with dinner or at bedtime", "Avoid grapefruit juice"]
        },
        {
          medication: "Blood pressure medications",
          timing: "Morning vs Evening",
          reason: "Blood pressure naturally varies throughout the day",
          effect: "Better control of blood pressure spikes",
          tips: ["Discuss optimal timing with doctor", "Consider taking at bedtime for better overnight control"]
        },
        {
          medication: "Diuretics (water pills)",
          timing: "Morning",
          reason: "Prevents nighttime bathroom trips",
          effect: "Better sleep quality and medication compliance",
          tips: ["Take early in the day", "Stay hydrated but not before bedtime"]
        }
      ]
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "moderate": return "bg-accent text-accent-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const preventionTips = [
    {
      title: "Keep a Complete Medication List",
      description: "Include all prescription medications, over-the-counter drugs, vitamins, and supplements",
      importance: "critical"
    },
    {
      title: "Use One Pharmacy",
      description: "Having all prescriptions filled at one pharmacy helps pharmacists catch potential interactions",
      importance: "high"
    },
    {
      title: "Ask Before Adding New Medications",
      description: "Always tell doctors and pharmacists about all medications you're currently taking",
      importance: "critical"
    },
    {
      title: "Read All Labels and Instructions",
      description: "Pay attention to timing, food restrictions, and other special instructions",
      importance: "high"
    },
    {
      title: "Regular Medication Reviews",
      description: "Schedule periodic reviews with your doctor or pharmacist to assess all medications",
      importance: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Drug Interactions Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding how medications, foods, and timing can affect each other
            </p>
            
            <div className="alert-warning max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  Always consult with your healthcare provider or pharmacist before making any changes to your medications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for medication interactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        {/* Interaction Types */}
        <Tabs defaultValue="drug-drug" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.entries(interactionTypes).map(([key, type]) => (
              <TabsTrigger key={key} value={key} className="flex items-center space-x-2">
                <type.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{type.title}</span>
                <span className="sm:hidden">{type.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(interactionTypes).map(([key, type]) => (
            <TabsContent key={key} value={key}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{type.title}</h2>
                <p className="text-muted-foreground">{type.description}</p>
              </div>

              <div className="grid gap-6">
                {type.interactions.map((interaction, index) => (
                  <Card key={index} className="medical-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {interaction.medications ? 
                              interaction.medications.join(" + ") : 
                              `${interaction.medication} + ${interaction.food || interaction.timing}`
                            }
                          </CardTitle>
                          {interaction.riskLevel && (
                            <Badge className={`${getRiskColor(interaction.riskLevel)} mt-2`}>
                              {interaction.riskLevel.charAt(0).toUpperCase() + interaction.riskLevel.slice(1)} Risk
                            </Badge>
                          )}
                        </div>
                        <AlertTriangle className={`w-6 h-6 ${
                          interaction.riskLevel === "high" ? "text-destructive" : 
                          interaction.riskLevel === "moderate" ? "text-accent" : "text-secondary"
                        }`} />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Effect:</h4>
                          <p className="text-muted-foreground">{interaction.effect}</p>
                          {interaction.reason && (
                            <p className="text-muted-foreground text-sm mt-1">
                              <strong>Why:</strong> {interaction.reason}
                            </p>
                          )}
                        </div>

                        {interaction.symptoms && (
                          <div>
                            <h4 className="font-semibold mb-2">Warning Signs:</h4>
                            <ul className="space-y-1">
                              {interaction.symptoms.map((symptom, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{symptom}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold mb-2">What to Do:</h4>
                          <p className="text-muted-foreground text-sm">
                            {interaction.action}
                          </p>
                          {interaction.tips && (
                            <ul className="mt-2 space-y-1">
                              {interaction.tips.map((tip, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Prevention Tips */}
        <Card className="medical-card mt-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Prevention & Safety Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {preventionTips.map((tip, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold">{tip.title}</h4>
                    <Badge variant={tip.importance === "critical" ? "destructive" : "secondary"} className="text-xs ml-2">
                      {tip.importance}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Interactions;