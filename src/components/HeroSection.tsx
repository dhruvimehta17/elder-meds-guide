import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Safe Medication Use",
      description: "Learn about proper dosages and timing for your medications"
    },
    {
      icon: Shield,
      title: "Side Effect Awareness",
      description: "Understand what to watch for and when to contact your doctor"
    },
    {
      icon: Users,
      title: "Age-Appropriate Care",
      description: "Information specifically tailored for older adults"
    },
    {
      icon: BookOpen,
      title: "Easy-to-Understand",
      description: "Clear, simple explanations without medical jargon"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Safe Medicine Use for 
            <span className="text-primary block">Older Adults</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get reliable, easy-to-understand information about medications, 
            side effects, and drug interactions specifically designed for seniors and their caregivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/medicines">
              <Button size="lg" className="btn-primary min-w-48">
                Explore Medicine Guide
              </Button>
            </Link>
            
            <Link to="/side-effects">
              <Button size="lg" variant="outline" className="min-w-48">
                Learn About Side Effects
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="medical-card text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Notice */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="alert-warning">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-accent-foreground mb-1">
                  Important Medical Emergency Notice
                </h4>
                <p className="text-sm text-accent-foreground/80">
                  If you're experiencing a medical emergency, call 911 immediately. 
                  This website is for educational purposes only and should not replace professional medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;