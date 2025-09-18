import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Heart, Brain, Bone, Eye, Pill } from "lucide-react";

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const medicineCategories = [
    {
      id: "heart",
      icon: Heart,
      name: "Heart & Blood Pressure",
      description: "Medications for cardiovascular health",
      medicines: [
        {
          name: "Lisinopril",
          purpose: "Blood pressure control",
          commonDosage: "5-40mg daily",
          keyPoints: ["Take at the same time each day", "Monitor blood pressure regularly"],
          sideEffects: ["Dry cough", "Dizziness", "Fatigue"]
        },
        {
          name: "Metoprolol",
          purpose: "Heart rate and blood pressure",
          commonDosage: "25-200mg twice daily",
          keyPoints: ["Don't stop suddenly", "Take with meals"],
          sideEffects: ["Slow heart rate", "Cold hands/feet", "Fatigue"]
        }
      ]
    },
    {
      id: "brain",
      icon: Brain,
      name: "Memory & Cognition",
      description: "Medications for brain health and memory",
      medicines: [
        {
          name: "Donepezil",
          purpose: "Alzheimer's disease treatment",
          commonDosage: "5-10mg daily",
          keyPoints: ["Take in the evening", "May take weeks to show effect"],
          sideEffects: ["Nausea", "Diarrhea", "Sleep problems"]
        },
        {
          name: "Memantine",
          purpose: "Moderate to severe dementia",
          commonDosage: "5-20mg daily",
          keyPoints: ["Start with low dose", "Take with or without food"],
          sideEffects: ["Headache", "Confusion", "Constipation"]
        }
      ]
    },
    {
      id: "bone",
      icon: Bone,
      name: "Bone Health",
      description: "Medications for osteoporosis and joint health",
      medicines: [
        {
          name: "Alendronate",
          purpose: "Osteoporosis prevention/treatment",
          commonDosage: "70mg weekly",
          keyPoints: ["Take on empty stomach", "Stay upright for 30 minutes after"],
          sideEffects: ["Heartburn", "Stomach upset", "Jaw problems (rare)"]
        }
      ]
    }
  ];

  const filteredCategories = medicineCategories.map(category => ({
    ...category,
    medicines: category.medicines.filter(medicine =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.purpose.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.medicines.length > 0 || searchTerm === "");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Medicine Guide for Seniors
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Find information about common medications, proper usage, and what to expect
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search medications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="grid gap-8">
          {filteredCategories.map((category) => (
            <Card key={category.id} className="medical-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{category.name}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid gap-6">
                  {category.medicines.map((medicine, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{medicine.name}</h3>
                            <Badge variant="secondary">{medicine.purpose}</Badge>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <h4 className="font-medium text-primary mb-2">Typical Dosage</h4>
                              <p className="text-muted-foreground">{medicine.commonDosage}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-primary mb-2">Important Points</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {medicine.keyPoints.map((point, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="lg:w-64">
                          <h4 className="font-medium text-accent mb-2">Common Side Effects</h4>
                          <div className="flex flex-wrap gap-2">
                            {medicine.sideEffects.map((effect, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {effect}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t">
                        <div className="alert-info">
                          <p className="text-sm">
                            <strong>Remember:</strong> Always follow your doctor's instructions. 
                            This information is for educational purposes only and should not replace medical advice.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {searchTerm && filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Pill className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No medications found</h3>
            <p className="text-muted-foreground mb-4">
              Try a different search term or browse our categories above
            </p>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Medicines;