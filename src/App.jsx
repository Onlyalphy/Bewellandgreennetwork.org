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

  return (
    <div className="min-h-screen bg-background">
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
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-primary">Tamara's Story</h2>
                    <button 
                      onClick={() => setIsFounderStoryOpen(false)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={tamaraImage} 
                        alt="Tamara Kahuthia" 
                        className="w-48 h-48 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Tamara Kahuthia - Founder & Executive Director</h3>
                      <p className="text-muted-foreground mb-4">
                        My activism journey began when I was just 13 years old. Growing up, I witnessed firsthand the devastating impacts of the climate crisis within my community, from failed crops and water shortages to unpredictable weather patterns that affected our livelihoods and daily life. Feeling a deep sense of urgency, I joined movements calling for climate action, driven by the vision of creating a just and liveable future for my generation and those to come.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        However, as my activism grew, so did the weight on my shoulders. The reality of environmental injustices, combined with personal struggles, led me into a period of deep depression and mental health challenges. It was the hardest time in my life, when I couldn't see myself victorious in my journey or my dreams. There were days I felt my light was gone, where hope felt unreachable, and each sunrise felt heavier than the last.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      But even in the darkness, I found a small flicker of light that kept me going. I sought support, slowly rebuilt myself, and discovered the power of healing. When I finally saw the end of the tunnel, I vowed never to let my experience go to waste. I promised myself that I would raise awareness about mental health and ensure no one felt alone in their struggles, especially within climate activism spaces where burnout, eco-anxiety, and depression are often hidden.
                    </p>
                    <p>
                      Along the way, I saw the deep and often overlooked connection between mental health and the climate crisis. This inspired me to pursue my studies in counselling psychology, equipping myself with skills to support others while advocating for systems change.
                    </p>
                    <p>
                      Today, I work to integrate environmental sustainability, mental health, reproductive health rights, agriculture, and substance abuse awareness through my organisation. I believe these issues are deeply interconnected – that food security is tied to climate resilience, that mental health cannot be separated from the environments people live in, and that bodily autonomy and freedom from substance dependency are fundamental for thriving communities.
                    </p>
                    <p className="font-semibold text-primary">
                      "My journey from a young activist to a founder is rooted in my experiences of pain, healing, hope, and purpose. I share this because even in the darkest times, there is light – and it is from this light that I continue to build spaces of care, dignity, and justice for all."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <img 
                src={beWellConnect} 
                alt="Be Well Connect Program" 
                className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Be Well Connect</h3>
              <p className="text-muted-foreground">
                Our flagship mental health program connecting youth with peer support and professional resources.
              </p>
            </div>
            <div className="text-center">
              <img 
                src={treePlanting} 
                alt="Tree Planting Initiative" 
                className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Green Futures</h3>
              <p className="text-muted-foreground">
                Environmental conservation through tree planting, clean-up drives, and sustainability education.
              </p>
            </div>
            <div className="text-center">
              <img 
                src={communityDevelopment} 
                alt="Community Development" 
                className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Community Wellness</h3>
              <p className="text-muted-foreground">
                Holistic community development programs addressing health, education, and social justice.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Impact So Far</h3>
              <p className="text-muted-foreground">
                Since our founding, we've made significant strides in improving community wellness and environmental sustainability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-4 text-primary">Mental Health Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">People Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">10+</div>
                    <div className="text-sm text-muted-foreground">Peer Counselors Trained</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-4 text-secondary">Environmental Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Trees Planted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">200+</div>
                    <div className="text-sm text-muted-foreground">Students Involved</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">People Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">Trees Planted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">25+</div>
                <div className="text-muted-foreground">Programs Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Communities Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive programs across our five pillars, designed to create lasting 
              positive change in communities while addressing interconnected challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={pillar.id} className="card-hover group">
                <CardHeader className="text-center">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      {React.createElement(pillar.icon, {
                        className: "h-8 w-8 text-white mb-2"
                      })}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Integrated Approach</h3>
              <p className="text-muted-foreground mb-6">
                Our programs are designed to work synergistically, recognizing that mental health, 
                environmental sustainability, and social justice are interconnected. By addressing 
                these areas together, we create more comprehensive and lasting solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Evidence-Based Methods</h4>
                    <p className="text-sm text-muted-foreground">
                      All our programs are grounded in research and best practices from psychology, 
                      environmental science, and community development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Community-Led Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      We work with communities to identify their specific needs and develop 
                      culturally appropriate interventions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Youth Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Young people are at the center of our programs, both as beneficiaries 
                      and as leaders driving change in their communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={advocacyImage} 
                alt="Program integration and community impact" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get Involved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our mission to create healthier communities and a more sustainable world. 
              There are many ways to contribute and make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Join our team of dedicated volunteers and help us deliver programs 
                  that make a real difference in people's lives.
                </p>
                <Button 
                  onClick={() => scrollToSection('volunteer-form')}
                  className="btn-primary"
                >
                  Become a Volunteer
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Your financial support helps us expand our programs and reach 
                  more communities in need of mental health and environmental support.
                </p>
                <Button 
                  onClick={() => scrollToSection('donation')}
                  className="btn-secondary"
                >
                  Make a Donation
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Leaf className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Organizations and businesses can partner with us to amplify 
                  our impact and create sustainable change together.
                </p>
                <div className="space-y-3">
                  <div className="text-left">
                    <h4 className="font-semibold text-sm mb-1">Partnership Options:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Volunteering</li>
                      <li>• Corporate Sponsorship</li>
                      <li>• Individual Sponsorship</li>
                    </ul>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-white mt-4"
                  onClick={() => window.open('mailto:info@bewellandgreen.org?subject=Partnership Inquiry', '_blank')}
                >
                  Explore Partnership
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Get Involved?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Make a Real Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Your involvement directly contributes to improving mental health outcomes 
                      and environmental sustainability in communities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Build Connections</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with like-minded individuals who share your passion 
                      for wellness and environmental stewardship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Develop Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Gain valuable experience in community organizing, environmental action, 
                      and mental health advocacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={advocacyImage} 
                alt="Community advocacy and engagement" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section id="volunteer-form" className="section-padding bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Volunteer Application</h2>
            <p className="text-xl text-muted-foreground">
              Ready to make a difference? Click the button below to fill out our volunteer application form.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Join Our Volunteer Team</CardTitle>
              <CardDescription className="text-center">
                Complete our comprehensive volunteer application to get started with Be Well and Green Network.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-primary/5 rounded-lg p-6">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Our volunteer application form will help us understand your interests, skills, 
                  and availability so we can match you with the perfect volunteer opportunities.
                </p>
                <Button 
                  onClick={handleVolunteerFormRedirect}
                  className="btn-primary text-lg px-8 py-3"
                  size="lg"
                >
                  Fill Out Volunteer Application
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Quick & Easy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Secure Form</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Fast Response</span>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>
                  After submitting your application, our team will review it and contact you within 
                  3-5 business days with next steps and volunteer opportunities that match your interests.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Support Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              Your donation helps us expand our mental health and environmental programs to reach more communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card>
              <CardHeader>
                <CardTitle>Make a Donation</CardTitle>
                <CardDescription>
                  Choose a donation amount and support our work through PayPal.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-16 text-lg font-semibold">
                    $25
                  </Button>
                  <Button variant="outline" className="h-16 text-lg font-semibold">
                    $50
                  </Button>
                  <Button variant="outline" className="h-16 text-lg font-semibold">
                    $100
                  </Button>
                  <Button variant="outline" className="h-16 text-lg font-semibold">
                    $250
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Or enter a custom amount</p>
                  <Input 
                    type="number" 
                    placeholder="Enter amount in USD" 
                    className="text-center text-lg mb-4"
                  />
                </div>

                {/* PayPal Button */}
                <div className="text-center">
                  <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="YOUR_PAYPAL_BUTTON_ID" />
                    <Button 
                      type="submit" 
                      className="btn-primary w-full h-12 text-lg"
                      style={{backgroundColor: '#0070ba'}}
                    >
                      Donate with PayPal
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-2">
                    Secure payment processing through PayPal
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>How Your Donation Helps</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <span className="text-primary font-bold text-sm">$25</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Mental Health Session</h4>
                      <p className="text-sm text-muted-foreground">
                        Provides one counseling session for someone in need
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary/10 rounded-full p-2 mt-1">
                      <span className="text-secondary font-bold text-sm">$50</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Tree Planting Kit</h4>
                      <p className="text-sm text-muted-foreground">
                        Supplies for planting 10 trees in community spaces
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-accent/10 rounded-full p-2 mt-1">
                      <span className="text-accent font-bold text-sm">$100</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Workshop Materials</h4>
                      <p className="text-sm text-muted-foreground">
                        Educational materials for one community workshop
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <span className="text-primary font-bold text-sm">$250</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Full Program Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Sponsors a complete program for one community
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Ways to Give</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Monthly recurring donations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Corporate sponsorship opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">In-kind donations (supplies, equipment)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Fundraising events and campaigns</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Contact Us</h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with us to learn more about our programs or discuss partnership opportunities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
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
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
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
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Be Well and Green Network" className="h-10 w-10 rounded-full" />
                <span className="font-bold text-lg">Be Well and Green Network</span>
              </div>
              <p className="text-white/80 text-sm">
                Promoting wellness, sustainability, and empowerment through integrated community action.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block text-white/80 hover:text-white">
                  About Us
                </button>
                <button onClick={() => scrollToSection('programs')} className="block text-white/80 hover:text-white">
                  Our Programs
                </button>
                <button onClick={() => scrollToSection('get-involved')} className="block text-white/80 hover:text-white">
                  Get Involved
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-white/80 hover:text-white">
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Our Pillars</h4>
              <div className="space-y-2 text-sm text-white/80">
                <div>Environmental Sustainability</div>
                <div>Mental Health</div>
                <div>Agriculture</div>
                <div>Drugs and Addiction</div>
                <div>Gender Action</div>
              </div>
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
        </div>
      </footer>
    </div>
  )
}

export default App
