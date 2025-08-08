'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  MessageCircle, 
  Download, 
  MapPin, 
  Home, 
  Car, 
  Shield, 
  Waves, 
  TreePine, 
  Dumbbell,
  Calendar,
  Star,
  Check,
  Mail,
  Clock
} from 'lucide-react';

// Project data
const projectData = {
  "id": "trident-panipat",
  "name": "Trident Panipat",
  "slug": "trident-panipat",
  "location": "Sector 19A, Panipat, Haryana",
  "priceRange": "₹2 Cr+",
  "status": "Pre-Launch Soon",
  "statusColor": "orange",
  "type": "Residential Plots & Apartments",
  "bhk": "Residential Plots",
  "image": "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
  "description": "Trident Panipat is a newly planned residential township in Sector 19A, Panipat, offering premium residential plots in a secured gated environment. It's close to NH-44, providing excellent connectivity and a peaceful lifestyle surrounded by green landscapes.",
  "overview": "Spread across approx. 150 acres, Trident Panipat is being developed by Trident Realty with a focus on eco-friendly living, wide roads, and top-class infrastructure. Currently in pre-launch, this township is becoming a top choice for investors and end-users due to its location and planned facilities.",
  "features": [
    "Premium Residential Plots",
    "NH-44 Highway Proximity", 
    "Secure Gated Community",
    "Modern Clubhouse with Amenities",
    "Sustainable Layout & Infrastructure"
  ],
  "possession": "NA",
  "unitSizes": [
    {
      "type": "Residential Plot",
      "size": "270 to 1000 sq. yds",
      "price": "Price on Request"
    }
  ],
  "amenities": [
    "Modern Clubhouse",
    "Swimming Pool",
    "Fully Equipped Gym", 
    "Children's Park",
    "Landscaped Gardens",
    "Jogging & Cycling Paths",
    "Sports Facilities (Indoor/Outdoor)",
    "24x7 CCTV & Security",
    "Yoga & Meditation Zones",
    "Senior Citizen Areas",
    "Underground Cabling",
    "Rainwater Harvesting",
    "Sewage Treatment",
    "Wide Internal Roads"
  ],
  "locationHighlights": [
    "Located in Sector 19A, Panipat",
    "Easy access to NH-44 (GT Road)",
    "Approx. 2.8 km from Panipat Railway Station",
    "Close to schools, hospitals, malls",
    "Upcoming rapid transit/metro plan nearby",
    "Well connected to industrial zones"
  ],
  "gallery": {
    "images": [
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
      "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg",
      "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg"
    ],
    "videos": []
  },
  "faqs": [
    {
      "question": "What is Trident Panipat?",
      "answer": "It's a residential plotted township coming up in Sector 19A, Panipat by Trident Realty."
    },
    {
      "question": "What property options are available?", 
      "answer": "Residential plots between 270 and 1000 sq. yds."
    },
    {
      "question": "Is it RERA approved?",
      "answer": "Currently under process, approval expected soon."
    },
    {
      "question": "What facilities are included?",
      "answer": "Clubhouse, sports zones, swimming pool, parks, kids' area, security, and more."
    },
    {
      "question": "When will the project be ready?",
      "answer": "Timeline not disclosed yet, project is in pre-launch phase."
    },
    {
      "question": "Who to contact for booking?",
      "answer": "Call or WhatsApp at +91 9138331357."
    }
  ],
  "reviews": [],
  "contactInfo": {
    "address": "Sector 19A, Panipat, Haryana",
    "phone": "+91 9138331357",
    "email": "NA",
    "officeHours": "NA"
  }
};

interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  leadType: string;
}

export default function TridentPanipatPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const [leadForm, setLeadForm] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    leadType: 'general'
  });

  const handleCall = () => {
    window.open(`tel:${projectData.contactInfo.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${projectData.contactInfo.phone.replace(/[^\d]/g, '')}?text=Hi, I'm interested in Trident Panipat. Please share more details.`, '_blank');
  };

  const submitLead = async (formData: LeadFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      const response = await fetch('/api/example-lead-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project: projectData.name,
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });
      
      // For demo purposes, we'll just log to console
      console.log('Lead submitted:', {
        project: projectData.name,
        ...formData,
        timestamp: new Date().toISOString(),
      });
      
      // Reset form
      setLeadForm({
        name: '',
        phone: '',
        email: '',
        message: '',
        leadType: 'general'
      });
      
      alert('Thank you! We will contact you shortly.');
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('Something went wrong. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent, leadType: string) => {
    e.preventDefault();
    submitLead({ ...leadForm, leadType });
  };

  const LeadCaptureDialog = ({ 
    trigger, 
    title, 
    description, 
    leadType 
  }: { 
    trigger: React.ReactNode;
    title: string;
    description: string;
    leadType: string;
  }) => (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => handleLeadSubmit(e, leadType)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={leadForm.name}
              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={leadForm.phone}
              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={leadForm.email}
              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={leadForm.message}
              onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
              placeholder="Tell us about your requirements..."
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Home className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">{projectData.name}</h1>
                <p className="text-xs md:text-sm text-gray-600 hidden sm:block">{projectData.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <Button 
                onClick={handleCall}
                size="sm" 
                className="bg-green-600 hover:bg-green-700 text-white px-3 md:px-4"
              >
                <Phone className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Call Now</span>
              </Button>
              <Button 
                onClick={handleWhatsApp}
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white px-3 md:px-4"
              >
                <MessageCircle className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 relative z-10">
              <div className="space-y-4 lg:space-y-6">
                <Badge 
                  variant="outline" 
                  className="text-orange-600 border-orange-600 bg-orange-50 px-4 py-2 text-sm font-semibold animate-bounce"
                >
                  {projectData.status}
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {projectData.name}
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {projectData.description}
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center text-gray-700 text-sm lg:text-base">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  {projectData.location}
                </div>
                <div className="flex items-center text-gray-700 text-sm lg:text-base">
                  <Home className="h-5 w-5 mr-3 text-blue-600" />
                  {projectData.type}
                </div>
                <div className="flex items-center text-gray-700 text-sm lg:text-base">
                  <Star className="h-5 w-5 mr-3 text-yellow-500" />
                  Starting from {projectData.priceRange}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 pt-6">
                <LeadCaptureDialog
                  trigger={
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Download className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Brochure</span>
                      <span className="sm:hidden">PDF</span>
                    </Button>
                  }
                  title="Download Brochure"
                  description="Get detailed project brochure with floor plans and pricing."
                  leadType="brochure"
                />
                
                <LeadCaptureDialog
                  trigger={
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Phone className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Get Price</span>
                      <span className="sm:hidden">Price</span>
                    </Button>
                  }
                  title="Get Latest Pricing"
                  description="Receive current pricing and available offers."
                  leadType="pricing"
                />

                <LeadCaptureDialog
                  trigger={
                    <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Site Visit</span>
                      <span className="sm:hidden">Visit</span>
                    </Button>
                  }
                  title="Schedule Site Visit"
                  description="Book a free site visit with our experts."
                  leadType="site-visit"
                />

                <LeadCaptureDialog
                  trigger={
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Callback</span>
                      <span className="sm:hidden">Call</span>
                    </Button>
                  }
                  title="Request Callback"
                  description="Get a call back from our property consultant."
                  leadType="callback"
                />
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={projectData.image}
                  alt={projectData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-4 lg:p-6 rounded-xl shadow-lg border">
                <div className="text-xs lg:text-sm text-gray-600">Starting from</div>
                <div className="text-xl lg:text-2xl font-bold text-green-600">{projectData.priceRange}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Trident Panipat?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {projectData.overview}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectData.features.map((feature, index) => {
              const icons = [Home, Car, Shield, TreePine, Waves];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 shadow-md">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg lg:text-xl">{feature}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unit Sizes & Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unit Sizes & Pricing
            </h2>
          </div>

          <div className="max-w-2xl mx-auto px-4">
            {projectData.unitSizes.map((unit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                    <div>
                      <CardTitle className="text-2xl text-blue-600">{unit.type}</CardTitle>
                      <CardDescription className="text-lg mt-2">{unit.size}</CardDescription>
                    </div>
                    <div className="sm:text-right">
                      <div className="text-2xl font-bold text-green-600">{unit.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <LeadCaptureDialog
                    trigger={
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Get Detailed Pricing
                      </Button>
                    }
                    title="Get Detailed Pricing"
                    description="Receive current pricing and payment plans for this unit type."
                    leadType="unit-pricing"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Experience luxury living with premium facilities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {projectData.amenities.map((amenity, index) => {
              const icons = [Home, Waves, Dumbbell, TreePine, Car, Shield];
              const Icon = icons[index % icons.length];
              
              return (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Icon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm lg:text-base">{amenity}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prime Location Advantages
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projectData.locationHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Check className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-sm lg:text-base">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projectData.gallery.images.map((image, index) => (
              <div 
                key={index}
                className="aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image}
                  alt={`${projectData.name} Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <img 
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto px-4">
            <Accordion type="single" collapsible className="w-full">
              {projectData.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg lg:text-xl opacity-90">
              Ready to make Trident Panipat your new home?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="opacity-90 text-sm lg:text-base">{projectData.contactInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="opacity-90 text-sm lg:text-base">{projectData.contactInfo.address}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <Button 
                  onClick={handleCall}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Call Now: {projectData.contactInfo.phone}
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm text-gray-900 shadow-2xl">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleLeadSubmit(e, 'contact')} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone">Phone *</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      value={leadForm.message}
                      onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Home className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">{projectData.name}</h3>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your dream home awaits at Trident Panipat - where modern living meets natural beauty in the heart of Haryana.
            </p>
            <div className="flex items-center justify-center space-x-6 pt-4">
              <Button 
                onClick={handleCall}
                variant="ghost" 
                size="sm"
                className="text-blue-400 hover:text-blue-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="ghost" 
                size="sm"
                className="text-green-400 hover:text-green-300"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {projectData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 space-y-3">
        <Button
          onClick={handleWhatsApp}
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
        <Button
          onClick={handleCall}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <Phone className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>
    </div>
  );
}