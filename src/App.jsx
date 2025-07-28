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
                    <span>Youth empowerment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Equality and justice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Integrity</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Founder's Story Section */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-4">Meet Our Founder</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Discover the inspiring journey of Tamara Kahuthia, whose personal experiences with climate activism and mental health challenges led to the creation of Be Well and Green Network.
                </p>
                <Button 
                  onClick={() => setIsFounderStoryOpen(true)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Read Tamara's Story
                </Button>
              </div>
              <div className="flex-shrink-0">
                <div 
                  className="w-32 h-32 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
                  onClick={() => setIsFounderStoryOpen(true)}
                >
                  <img 
                    src={tamaraImage} 
                    alt="Tamara Kahuthia - Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Mental Health Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing accessible mental health resources, counseling services, and support groups 
                  to strengthen community wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Leaf className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Environmental Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading tree planting initiatives, conservation projects, and sustainable 
                  development programs to protect our environment.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building strong, connected communities through education, advocacy, 
                  and collaborative action for positive change.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Founder's Story Modal */}
          {isFounderStoryOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <div className="relative bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setIsFounderStoryOpen(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                >
                  <X size={24} />
                </button>
                <h2 className="text-3xl font-bold mb-6 text-center text-gradient">Tamara's Story</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={tamaraImage} 
                      alt="Tamara Kahuthia - Founder & Executive Director" 
                      className="w-40 h-40 rounded-full object-cover shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tamara Kahuthia - Founder & Executive Director</h3>
                    <p className="text-muted-foreground mt-2">
                      My activism journey began when I was just 13 years old. Growing up, I witnessed firsthand the devastating impacts of the climate crisis within my community, from failed crops and water shortages to unpredictable weather patterns that affected our livelihoods and daily life. Feeling a deep sense of urgency, I joined movements calling for climate action, driven by the vision of creating a just and liveable future for my generation and those to come.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  However, as my activism grew, so did the weight on my shoulders. The reality of environmental injustices, combined with personal struggles, led me into a period of deep depression and mental health challenges. It was the hardest time in my life, when I couldn’t see myself victorious in my journey or my dreams. There were days I felt my light was gone, where hope felt unreachable, and each sunrise felt heavier than the last.
                </p>
                <p className="text-muted-foreground mb-4">
                  But even in the darkness, I found a small flicker of light that kept me going. I sought support, slowly rebuilt myself, and discovered the power of healing. When I finally saw the end of the tunnel, I vowed never to let my experience go to waste. I promised myself that I would raise awareness about mental health and ensure no one felt alone in their struggles, especially within climate activism spaces where burnout, eco-anxiety, and depression are often hidden.
                </p>
                <p className="text-muted-foreground mb-4">
                  Along the way, I saw the deep and often overlooked connection between mental health and the climate crisis. This inspired me to pursue my studies in counselling psychology, equipping myself with skills to support others while advocating for systems change.
                </p>
                <p className="text-muted-foreground mb-4">
                  Today, I work to integrate environmental sustainability, mental health, reproductive health rights, agriculture, and substance abuse awareness through my organisation. I believe these issues are deeply interconnected – that food security is tied to climate resilience, that mental health cannot be separated from the environments people live in, and that bodily autonomy and freedom from substance dependency are fundamental for thriving communities.
                </p>
                <p className="text-muted-foreground">
                  My journey from a young activist to a founder is rooted in my experiences of pain, healing, hope, and purpose. I share this because even in the darkest times, there is light – and it is from this light that I continue to build spaces of care, dignity, and justice for all.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Programs Section */}
      <section id="programs" className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Programs</h2>
            <p className="text-lg text-muted-foreground">
              Driving change through integrated initiatives across our five core pillars.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Card key={pillar.id} className="card-hover">
                <CardHeader>
                  {React.createElement(pillar.icon, { className: "h-12 w-12 text-primary mb-4" })}
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>10+ Peer Counsellors Trained</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Empowering youth with mental health first aid skills.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <TreePine className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>500+ Trees Planted</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contributing to reforestation and combating climate change.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <Heart className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>1000+ Lives Touched</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Through our various community outreach and support programs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get Involved</h2>
            <p className="text-lg text-muted-foreground">
              Join our mission to create a healthier, greener, and more equitable world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Volunteer Application Card */}
            <Card className="card-hover">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Volunteer with Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Passionate about mental wellness, environmental sustainability, or social justice? Join our team of dedicated volunteers and make a tangible difference in communities.
                </p>
                <Button 
                  onClick={handleVolunteerFormRedirect}
                  className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  Fill Out Volunteer Application <ExternalLink size={16} />
                </Button>
                <div className="mt-4 text-sm text-muted-foreground flex items-center justify-center space-x-4">
                  <span className="flex items-center"><CheckCircle size={14} className="mr-1 text-green-500" /> Quick</span>
                  <span className="flex items-center"><CheckCircle size={14} className="mr-1 text-green-500" /> Secure</span>
                  <span className="flex items-center"><CheckCircle size={14} className="mr-1 text-green-500" /> Fast Response</span>
                </div>
              </CardContent>
            </Card>

            {/* Explore Partnerships Card */}
            <Card className="card-hover">
              <CardHeader>
                <HandHeart className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Explore Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We believe in the power of collaboration. Partner with us to amplify our impact and reach more communities.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                  <li>Volunteering</li>
                  <li>Corporate Sponsorship</li>
                  <li>Individual Sponsorship</li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Contact Us About Partnerships
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Contact Us</h2>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Reach out with any questions or collaboration ideas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">Bewellandgreennetwork@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+254 700 123 456</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-[#1877F2] text-white border-[#1877F2] hover:bg-[#166FE5] hover:border-[#166FE5] flex items-center gap-2"
                  onClick={() => window.open('https://www.facebook.com/share/1CCgEruqKK/?mibextid=wwXIfr', '_blank')}
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

