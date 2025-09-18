import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Phone, Clock, Eye, Heart, Brain } from "lucide-react";
import Header from "@/components/Header";

const SideEffects = () => {
  const [activeCategory, setActiveCategory] = useState("common");

  const sideEffectCategories = {
    common: {
      title: "Common Side Effects",
      description: "Usually mild and may improve over time",
      icon: Clock,
      color: "text-secondary",
      effects: [
        {
          name: "Nausea",
          description: "Feeling sick to your stomach",
          causes: ["Blood pressure medications", "Antibiotics", "Pain medications"],
          whatToDo: [
            "Take medication with food",
            "Eat small, frequent meals",
            "Stay hydrated with clear fluids",
            "Contact doctor if severe or persistent"
          ],
          severity: "mild"
        },
        {
          name: "Dizziness",
          description: "Feeling lightheaded or unsteady",
          causes: ["Blood pressure medications", "Diuretics", "Sleep aids"],
          whatToDo: [
            "Stand up slowly",
            "Sit or lie down if feeling dizzy",
            "Stay hydrated",
            "Avoid sudden movements"
          ],
          severity: "mild"
        },
        {
          name: "Dry Mouth",
          description: "Reduced saliva production",
          causes: ["Antihistamines", "Antidepressants", "Diuretics"],
          whatToDo: [
            "Drink plenty of water",
            "Chew sugar-free gum",
            "Use artificial saliva products",
            "Practice good oral hygiene"
          ],
          severity: "mild"
        }
      ]
    },
    serious: {
      title: "Serious Side Effects",
      description: "Require immediate medical attention",
      icon: AlertTriangle,
      color: "text-destructive",
      effects: [
        {
          name: "Severe Allergic Reaction",
          description: "Life-threatening immune response",
          symptoms: ["Difficulty breathing", "Swelling of face/throat", "Severe rash", "Rapid pulse"],
          whatToDo: [
            "Call 911 immediately",
            "Stop taking the medication",
            "Use EpiPen if prescribed",
            "Stay calm and sit upright"
          ],
          severity: "emergency"
        },
        {
          name: "Chest Pain",
          description: "Pain or pressure in the chest area",
          symptoms: ["Tightness in chest", "Pain radiating to arm", "Shortness of breath"],
          whatToDo: [
            "Call 911 immediately",
            "Stop all activity",
            "Take prescribed nitroglycerin if available",
            "Chew aspirin if not allergic"
          ],
          severity: "emergency"
        },
        {
          name: "Severe Dizziness/Fainting",
          description: "Loss of consciousness or severe lightheadedness",
          symptoms: ["Nearly fainting", "Room spinning", "Confusion", "Weakness"],
          whatToDo: [
            "Sit or lie down immediately",
            "Call doctor right away",
            "Don't drive or operate machinery",
            "Have someone stay with you"
          ],
          severity: "urgent"
        }
      ]
    },
    interactions: {
      title: "Drug Interactions",
      description: "When medications affect each other",
      icon: Brain,
      color: "text-accent",
      effects: [
        {
          name: "Blood Thinner Interactions",
          description: "Increased bleeding risk",
          causes: ["Warfarin + Aspirin", "Multiple blood thinners", "Certain antibiotics"],
          symptoms: ["Easy bruising", "Nosebleeds", "Blood in urine/stool"],
          whatToDo: [
            "Monitor for unusual bleeding",
            "Regular blood tests as ordered",
            "Tell all doctors about blood thinners",
            "Avoid certain over-the-counter medications"
          ],
          severity: "moderate"
        },
        {
          name: "Sedation from Multiple Medications",
          description: "Excessive drowsiness from combined effects",
          causes: ["Sleep aids + muscle relaxers", "Multiple psychiatric medications"],
          symptoms: ["Extreme drowsiness", "Confusion", "Balance problems"],
          whatToDo: [
            "Review all medications with doctor",
            "Don't drive if drowsy",
            "Use fall prevention measures",
            "Consider medication timing adjustments"
          ],
          severity: "moderate"
        }
      ]
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "emergency": return "bg-destructive text-destructive-foreground";
      case "urgent": return "bg-accent text-accent-foreground";
      case "moderate": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/10 to-destructive/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Understanding Side Effects
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Learn what to watch for and when to seek help
            </p>
            
            {/* Emergency Banner */}
            <div className="alert-warning max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <p className="font-semibold">
                  For medical emergencies, call 108 immediately
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {Object.entries(sideEffectCategories).map(([key, category]) => (
              <TabsTrigger key={key} value={key} className="flex items-center space-x-2">
                <category.icon className={`w-4 h-4 ${category.color}`} />
                <span>{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(sideEffectCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid gap-6">
                {category.effects.map((effect, index) => (
                  <Card key={index} className="medical-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{effect.name}</CardTitle>
                          <p className="text-muted-foreground mt-1">{effect.description}</p>
                        </div>
                        {effect.severity && (
                          <Badge className={getSeverityColor(effect.severity)}>
                            {effect.severity.charAt(0).toUpperCase() + effect.severity.slice(1)}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Causes/Symptoms */}
                        <div>
                          <h4 className="font-semibold mb-3">
                            {effect.causes ? "Common Causes:" : "Warning Signs:"}
                          </h4>
                          <ul className="space-y-2">
                            {(effect.causes || effect.symptoms || []).map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What to Do */}
                        <div>
                          <h4 className="font-semibold mb-3">What to Do:</h4>
                          <ul className="space-y-2">
                            {effect.whatToDo.map((action, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                                <span className="text-muted-foreground">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Emergency Actions */}
                      {effect.severity === "emergency" && (
                        <div className="mt-6 p-4 border-2 border-destructive rounded-lg bg-destructive/5">
                          <div className="flex items-center space-x-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-destructive" />
                            <span className="font-semibold text-destructive">Emergency Action Required</span>
                          </div>
                          <p className="text-sm text-destructive/80">
                            This is a medical emergency. Call 911 immediately and do not wait to see if symptoms improve.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Reference Card */}
        <Card className="medical-card mt-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>Quick Reference: When to Call</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="font-semibold text-destructive mb-2">Call 108</h3>
                <p className="text-sm text-muted-foreground">
                  Difficulty breathing, chest pain, loss of consciousness, severe allergic reactions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-accent mb-2">Call Doctor Today</h3>
                <p className="text-sm text-muted-foreground">
                  Persistent nausea, severe dizziness, unusual bleeding, new symptoms
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-secondary mb-2">Monitor & Document</h3>
                <p className="text-sm text-muted-foreground">
                  Mild side effects, keep a record and discuss at next appointment
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SideEffects;
