import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Menu,
  X,
  Heart,
  Leaf,
  Users,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  TreePine,
  Lightbulb,
  HandHeart,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react'
import './App.css'
import { Helmet } from 'react-helmet-async'; // Add this import

// Import images
import logo from './assets/BEWELLANDGREENNETWORKLOGO.jpg'
import beWellConnect from './assets/BeWellConnect.jpeg'
import treePlanting from './assets/KalimaniPrimarySchoolTreePlantingEvent.jpeg'
import communityDevelopment from './assets/healthykids.jpg'

// Import new pillar images
import environmentalImage from './assets/kidsplanting.jpg'
import mentalHealthImage from './assets/healthykids.jpg'
import agricultureImage from './assets/Agriculture.jpg'
import drugsAddictionImage from './assets/Substanceabuse.jpg'
import genderActionImage from './assets/Naturelovers.jpg'
import tamaraImage from './assets/Tamara.jpg'
import advocacyImage from './assets/Advocacy.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [currentPillarIndex, setCurrentPillarIndex] = useState(0)
  const [isFounderStoryOpen, setIsFounderStoryOpen] = useState(false)

  // Define the five pillars with their images and information
  const pillars = [
    {
      id: 1,
      title: "Environmental Sustainability",
      description: "Protecting our planet through conservation, tree planting, and sustainable practices.",
      image: environmentalImage,
      icon: Leaf
    },
    {
      id: 2,
      title: "Mental Health",
      description: "Supporting community wellbeing through counseling, therapy, and wellness programs.",
      image: mentalHealthImage,
      icon: Heart
    },
    {
      id: 3,
      title: "Agriculture",
      description: "Promoting sustainable farming practices and food security in communities.",
      image: agricultureImage,
      icon: TreePine
    },
    {
      id: 4,
      title: "Drugs and Addiction",
      description: "Providing education, prevention, and rehabilitation services for substance abuse.",
      image: drugsAddictionImage,
      icon: Lightbulb
    },
    {
      id: 5,
      title: "Gender Action",
      description: "Empowering all genders through education, advocacy, and equal opportunities.",
      image: genderActionImage,
      icon: HandHeart
    }
  ]

  // Pillar rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPillarIndex((prevIndex) => (prevIndex + 1) % pillars.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [pillars.length])

  // Handle Google Form redirect
  const handleVolunteerFormRedirect = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf_sDYfr7Z1eV7XQqnbwa5k3K5maUspQ_OySUAmT_eqnBPmGg/viewform', '_blank')
  }

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Our Programs' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' }
  ]

  // Function to get dynamic SEO data based on activeSection
  const getSeoData = (section) => {
    switch (section) {
      case 'home':
        return {
          title: 'Be Well and Green Network - Home',
          description: 'Official website of Be Well and Green Network. Promoting mental wellness, environmental sustainability, and community empowerment in Kenya.',
          keywords: 'mental wellness, environmental sustainability, community empowerment, Kenya, non-profit, health, green living',
          ogUrl: 'https://bewellandgreennetwork.org/',
          ogImage: 'https://bewellandgreennetwork.org/images/og-home.jpg' // Replace with actual image
        };
      case 'about':
        return {
          title: 'About Us - Be Well and Green Network',
          description: 'Learn about the mission, vision, core values, and founder\'s story of Be Well and Green Network.',
          keywords: 'about us, mission, vision, values, founder, Tamara Kahuthia',
          ogUrl: 'https://bewellandgreennetwork.org/about',
          ogImage: 'https://bewellandgreennetwork.org/images/og-about.jpg'
        };
      case 'programs':
        return {
          title: 'Our Programs - Be Well and Green Network',
          description: 'Explore our five pillars: Environmental Sustainability, Mental Health, Agriculture, Drugs and Addiction, and Gender Action.',
          keywords: 'programs, environmental, mental health, agriculture, substance abuse, gender action',
          ogUrl: 'https://bewellandgreennetwork.org/programs',
          ogImage: 'https://bewellandgreennetwork.org/images/og-programs.jpg'
        };
      case 'get-involved':
        return {
          title: 'Get Involved - Be Well and Green Network',
          description: 'Join us! Volunteer, partner, or support our initiatives for a healthier, greener future.',
          keywords: 'get involved, volunteer, donate, partnership, support',
          ogUrl: 'https://bewellandgreennetwork.org/get-involved',
          ogImage: 'https://bewellandgreennetwork.org/images/og-get-involved.jpg'
        };
      case 'contact':
        return {
          title: 'Contact Us - Be Well and Green Network',
          description: 'Reach out to Be Well and Green Network for inquiries, collaborations, or support.',
          keywords: 'contact, email, phone, address, inquiry',
          ogUrl: 'https://bewellandgreennetwork.org/contact',
          ogImage: 'https://bewellandgreennetwork.org/images/og-contact.jpg'
        };
      default:
        return {
          title: 'Be Well and Green Network',
          description: 'Promoting wellness, sustainability, and empowerment.',
          keywords: 'wellness, sustainability, empowerment, non-profit, Kenya',
          ogUrl: 'https://bewellandgreennetwork.org/',
          ogImage: 'https://bewellandgreennetwork.org/images/og-default.jpg'
        };
    }
  };

  const seo = getSeoData(activeSection);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />

        {/* Open Graph / Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.ogUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.ogImage} />

        {/* Twitter Card Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seo.ogUrl} />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={seo.description} />
        <meta property="twitter:image" content={seo.ogImage} />
      </Helmet>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Be Well and Green Network" className="h-10 w-10 rounded-full" />
              <span className="font-bold text-lg text-primary">Be Well and Green Network</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Background and Pillar Showcase */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${mentalHealthImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Promoting Wellness, Sustainability, and Empowerment
              </h1>
              <p className="text-xl mb-8 text-white/90">
                At Be Well and Green Network, we believe that true community transformation begins with the well-being of the mind, body, and planet. We are a youth-led initiative committed to advancing mental wellness, environmental sustainability, and social justice through education, advocacy, and community action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('get-involved')}
                  className="btn-primary px-8 py-3 text-lg"
                >
                  Get Involved <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')}
                  variant="outline" 
                  className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Pillar Showcase with Flicker Effect */}
            <div className="animate-slide-in-right">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">Our Five Pillars</CardTitle>
                  <p className="text-white/80">Transforming communities through focused action</p>
                </CardHeader>
                <CardContent>
                  <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                    <img 
                      src={pillars[currentPillarIndex].image}
                      alt={pillars[currentPillarIndex].title}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                      style={{
                        filter: 'brightness(0.8) contrast(1.1)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center mb-2">
                        {React.createElement(pillars[currentPillarIndex].icon, {
                          className: "h-6 w-6 text-white mr-2"
                        })}
                        <h3 className="text-xl font-bold text-white">
                          {pillars[currentPillarIndex].title}
                        </h3>
                      </div>
                      <p className="text-white/90 text-sm">
                        {pillars[currentPillarIndex].description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Pillar Indicators */}
                  <div className="flex justify-center space-x-2">
                    {pillars.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPillarIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentPillarIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Us</h2>
          </div>

          {/* Mission, Vision, Core Values */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Mission Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower communities through integrated advocacy, education, and action that promote mental well-being, environmental sustainability, and social justice, while fostering youth leadership and intergenerational collaboration for a healthier, greener future.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A thriving, resilient society where individuals and communities live in harmony with themselves, others, and nature, guided by principles of equity, mental wellness, and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Well-being</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Sustainability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Empowerment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Innovation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Founder's Story */}
          <Card className="card-hover mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Meet Our Founder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <img 
                    src={tamaraImage} 
                    alt="Tamara Kahuthia - Founder" 
                    className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">Tamara Kahuthia</h3>
                  <p className="text-muted-foreground mb-4">Founder & Executive Director</p>
                  <Button 
                    onClick={() => setIsFounderStoryOpen(!isFounderStoryOpen)}
                    variant="outline"
                    className="mb-4"
                  >
                    {isFounderStoryOpen ? 'Hide Story' : 'Read Her Story'}
                  </Button>
                </div>
                <div>
                  <p className="text-muted-foreground mb-4">
                    Tamara Kahuthia is a passionate advocate for mental health, environmental sustainability, and social justice. With a background in psychology and community development, she founded Be Well and Green Network to address the interconnected challenges facing young people and communities today.
                  </p>
                  {isFounderStoryOpen && (
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Growing up in Nairobi, Tamara witnessed firsthand the impact of environmental degradation and mental health challenges on her community. She realized that these issues were deeply interconnected and required a holistic approach to create lasting change.
                      </p>
                      <p>
                        After completing her studies in psychology, Tamara worked with various NGOs and community organizations, gaining valuable experience in program development, advocacy, and youth empowerment. She noticed that many initiatives addressed single issues in isolation, missing the opportunity to create comprehensive solutions.
                      </p>
                      <p>
                        In 2023, Tamara founded Be Well and Green Network with the vision of creating an organization that would address mental health, environmental sustainability, and social justice as interconnected pillars of community well-being. Her leadership has been instrumental in developing innovative programs that empower young people to become agents of change in their communities.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work across five interconnected pillars to create comprehensive solutions for community transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={pillar.id} className="card-hover group">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    {React.createElement(pillar.icon, {
                      className: "h-8 w-8 text-white"
                    })}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{pillar.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Program Highlights */}
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-6 w-6 text-primary" />
                  Tree Planting Initiative
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={treePlanting} 
                  alt="Tree Planting Event" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-muted-foreground">
                  Our community tree planting events have resulted in over 1,000 trees planted across Nairobi, contributing to urban reforestation and environmental education.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  BeWell Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={beWellConnect} 
                  alt="BeWell Connect Program" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-muted-foreground">
                  Our mental health support program provides counseling, peer support groups, and wellness workshops to promote emotional well-being in communities.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Community Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={communityDevelopment} 
                  alt="Community Development" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-muted-foreground">
                  We work directly with communities to identify needs, develop solutions, and implement sustainable programs that create lasting positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get Involved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in creating positive change. There are many ways to support our mission and make a difference in your community.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Join our team of dedicated volunteers and contribute your skills to meaningful projects that make a real difference.
                </p>
                <Button 
                  onClick={handleVolunteerFormRedirect}
                  className="w-full"
                >
                  Apply to Volunteer
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Collaborate with us to amplify impact. We welcome partnerships with organizations, schools, and businesses.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Explore Partnership
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Your financial support helps us expand our programs and reach more communities in need.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Learn How to Support
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join our community of changemakers and help us build a healthier, greener future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleVolunteerFormRedirect}
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to learn more about our work or explore collaboration opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">Bewellandgreennetwork@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+254 700 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-[#1877F2] text-white border-[#1877F2] hover:bg-[#166FE5] hover:border-[#166FE5] flex items-center gap-2"
                    onClick={() => window.open('https://www.facebook.com/profile.php?id=61566606018809&mibextid=ZbWKwL', '_blank')}
                  >
                    <Facebook size={16} />
                    Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-gradient-to-r from-[#E4405F] to-[#F56040] text-white border-transparent hover:from-[#D73652] hover:to-[#E55A3C] flex items-center gap-2"
                    onClick={() => window.open('https://www.instagram.com/bewellandgreennetwork?igsh=MWhsNTVtNmxscDdjZA%3D%3D&utm_source=qr', '_blank')}
                  >
                    <Instagram size={16} />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-[#0A66C2] text-white border-[#0A66C2] hover:bg-[#004182] hover:border-[#004182] flex items-center gap-2"
                    onClick={() => window.open('https://www.linkedin.com/company/bewellandgreennetwork/', '_blank')}
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-black text-white border-black hover:bg-gray-800 hover:border-gray-800 flex items-center gap-2"
                    onClick={() => window.open('http://www.tiktok.com/@bewellandgreennetwork', '_blank')}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    TikTok
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is this about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message <ArrowRight className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Be Well and Green Network</h4>
            <p className="text-sm text-white/80">
              Dedicated to fostering mental wellness, environmental sustainability, and social justice.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Our Programs</button></li>
              <li><button onClick={() => scrollToSection('get-involved')} className="hover:text-primary transition-colors">Get Involved</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div>Bewellandgreennetwork@gmail.com</div>
              <div>+254 700 123 456</div>
              <div>Nairobi, Kenya</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; 2025 Be Well and Green Network. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
