import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, AlertTriangle, Clock, Heart, Brain, Zap, Shield, Pill } from "lucide-react";

const Emergency = () => {
  const emergencyScenarios = [
    {
      title: "Severe Allergic Reaction (Anaphylaxis)",
      icon: AlertTriangle,
      severity: "critical",
      symptoms: [
        "Difficulty breathing or wheezing",
        "Swelling of face, lips, tongue, or throat", 
        "Rapid, weak pulse",
        "Skin rash, hives, or severe itching",
        "Nausea, vomiting, or diarrhea",
        "Dizziness or fainting"
      ],
      immediateActions: [
        "Call 911 immediately",
        "Use EpiPen if prescribed (inject into outer thigh)",
        "Keep person lying flat with legs elevated",
        "Loosen tight clothing",
        "Stay with person until help arrives",
        "Be prepared to perform CPR if needed"
      ],
      medications: "Stop taking the suspected medication immediately"
    },
    {
      title: "Medication Overdose",
      icon: Pill,
      severity: "critical", 
      symptoms: [
        "Confusion or altered mental state",
        "Difficulty breathing",
        "Extreme drowsiness or loss of consciousness",
        "Nausea and vomiting",
        "Seizures",
        "Irregular heartbeat"
      ],
      immediateActions: [
        "Call 911 immediately",
        "Call Poison Control: 1-800-222-1222",
        "Gather all medication bottles",
        "Do NOT induce vomiting unless instructed",
        "Keep person awake if possible",
        "Monitor breathing and pulse"
      ],
      medications: "Bring all medication containers to the hospital"
    },
    {
      title: "Severe Side Effects",
      icon: Heart,
      severity: "urgent",
      symptoms: [
        "Chest pain or pressure",
        "Severe dizziness or fainting",
        "Difficulty breathing",
        "Severe stomach pain",
        "Blood in vomit or stool",
        "Severe skin reaction or rash"
      ],
      immediateActions: [
        "Call 911 for chest pain or breathing problems",
        "Call doctor immediately for other severe symptoms",
        "Stop taking the medication",
        "Record time of last dose",
        "Note all symptoms and timing",
        "Prepare medication list for medical team"
      ],
      medications: "Document which medication may be causing the reaction"
    }
  ];

  const emergencyContacts = [
    {
      service: "Emergency Services",
      number: "911",
      when: "Life-threatening emergencies",
      icon: Phone,
      color: "text-destructive"
    },
    {
      service: "Poison Control Center",
      number: "1-800-222-1222",
      when: "Medication overdose or poisoning",
      icon: Shield,
      color: "text-accent"
    },
    {
      service: "Your Doctor",
      number: "Keep this handy",
      when: "Urgent medication concerns",
      icon: Heart,
      color: "text-primary"
    },
    {
      service: "Your Pharmacy",
      number: "Keep this handy",
      when: "Medication questions or concerns",
      icon: Pill,
      color: "text-secondary"
    }
  ];

  const preparationChecklist = [
    {
      item: "Current Medication List",
      description: "Keep an updated list of all medications with dosages",
      status: "essential"
    },
    {
      item: "Emergency Contact Information",
      description: "Doctor, pharmacy, emergency contact, and insurance info",
      status: "essential"
    },
    {
      item: "Allergy Information",
      description: "List all known drug allergies and previous reactions",
      status: "essential"
    },
    {
      item: "Medical History Summary",
      description: "Key medical conditions and recent hospitalizations",
      status: "important"
    },
    {
      item: "Insurance Cards",
      description: "Health insurance and Medicare cards",
      status: "important"
    },
    {
      item: "EpiPen (if prescribed)",
      description: "Always carry if you have severe allergies",
      status: "critical"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "border-destructive bg-destructive/5";
      case "urgent": return "border-accent bg-accent/5";
      default: return "border-secondary bg-secondary/5";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-destructive text-destructive-foreground";
      case "essential": return "bg-accent text-accent-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Emergency Header */}
      <div className="bg-gradient-to-r from-destructive/20 to-accent/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="w-10 h-10 text-destructive" />
              <h1 className="text-4xl font-bold text-foreground">
                Medical Emergency Guide
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Quick reference for medication-related emergencies and when to seek immediate help
            </p>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground h-16">
                <Phone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold text-lg">Call 911</div>
                  <div className="text-sm opacity-90">Emergency Services</div>
                </div>
              </Button>
              
              <Button size="lg" variant="outline" className="h-16 border-accent text-accent hover:bg-accent/10">
                <Shield className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="font-bold text-lg">1-800-222-1222</div>
                  <div className="text-sm opacity-90">Poison Control</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Emergency Scenarios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Emergency Scenarios</h2>
          
          <div className="grid gap-8">
            {emergencyScenarios.map((scenario, index) => (
              <Card key={index} className={`medical-card ${getSeverityColor(scenario.severity)}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-3">
                      <scenario.icon className={`w-8 h-8 ${
                        scenario.severity === "critical" ? "text-destructive" : "text-accent"
                      }`} />
                      <span className="text-xl">{scenario.title}</span>
                    </CardTitle>
                    <Badge className={scenario.severity === "critical" ? 
                      "bg-destructive text-destructive-foreground" : 
                      "bg-accent text-accent-foreground"
                    }>
                      {scenario.severity.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Symptoms */}
                    <div>
                      <h4 className="font-semibold text-destructive mb-3 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Warning Signs
                      </h4>
                      <ul className="space-y-2">
                        {scenario.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Immediate Actions
                      </h4>
                      <ol className="space-y-2">
                        {scenario.immediateActions.map((action, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-sm">{action}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  {/* Medication Note */}
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">About Medications:</h4>
                    <p className="text-sm text-accent/80">{scenario.medications}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>Emergency Contacts</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border">
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                    <div className="flex-1">
                      <h4 className="font-semibold">{contact.service}</h4>
                      <p className="text-2xl font-mono font-bold text-primary">{contact.number}</p>
                      <p className="text-sm text-muted-foreground">{contact.when}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Preparation Checklist */}
          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Emergency Preparedness</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Keep these items easily accessible for medical emergencies:
              </p>
              
              <div className="space-y-3">
                {preparationChecklist.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Badge className={`${getStatusColor(item.status)} text-xs mt-1`}>
                      {item.status}
                    </Badge>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.item}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Emergency;