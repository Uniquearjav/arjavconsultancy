import { Button } from '@/components/ui/button';
import { Calculator, ClipboardCheck, Facebook, FileText, Heart, Home, Linkedin, Phone, Quote, Shield, Star, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/public/hero.jpg';
import Jitendra_Jain from '@/public/owner.jpeg'
export default function Page() {
  const services = [
    {
      icon: Calculator,
      title: 'Accounting',
      description: 'Keep your business books in order. We handle all your accounting needs so you can focus on growing your business.',
    },
    {
      icon: FileText,
      title: 'Tax Returns & GST',
      description: 'Easy tax filing for you and your business. Get maximum refunds without the hassle.',
    },
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Get the best home loan deals. We help you find affordable rates for your dream home.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Planning',
      description: 'Grow your money smartly. Simple advice to help you save and invest for your future.',
    },
    {
      icon: Users,
      title: 'Business Help',
      description: 'Starting a new business? We guide you through registration, planning, and everything in between.',
    },
    {
      icon: Shield,
      title: 'Compliance & Audit',
      description: 'Stay worry-free with all legal requirements. We make sure your business follows all rules.',
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Protect your family\'s health. Find the right insurance plan with Care Health at the best price.',
    },
    {
      icon: ClipboardCheck,
      title: 'GST Services',
      description: 'Complete GST registration and filing made simple. We handle the paperwork for you.',
    },
  ]

  const testimonials = [
    {
      name: 'Alpha Jain',
      role: 'Financial Consultant',
      content: '18 years of Life insurance and 4 years of medical insurance...Kudos to their services.Arjav consultancy is the best solution for our investment planning. ',
      rating: 5,
    },
    {
      name: 'Ritesh Jain',
      role: 'Software Engineer',
      content: 'Excellent service and long term experience..well organized consultancy',
      rating: 5,
    },
    {
      name: 'Ramnivas Vishnoi',
      role: 'Ex-Air Force Officer',
      content: 'They are very professional and knowledgeable in their field. They helped me with my tax preparation and financial planning, and I am very satisfied with their services. I highly recommend them to anyone looking for reliable financial services.',
      rating: 5,
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src={Hero}
            alt="Financial Planning"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Your Trusted Partner for <br/> Money Matters
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              From tax filing to home loans - we make financial services simple and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="tel:+919414269444">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Can Help You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple solutions for all your financial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-green-600 hover:bg-green-100 transition-shadow duration-300 border"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Jitendra Jain
              </h2>
              <h3 className="text-xl font-bold mb-6">
                Founder & Your Financial Guide
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                With over 22 years of experience, Jitendra helps people and businesses manage their money better.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you need help with taxes, want to buy a home, or need health insurance - he makes everything simple and easy to understand.
              </p>
              
              <div className="bg-muted/60 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-lg mb-3">What He Does:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tax filing (ITR) & GST returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Home loan assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Health Insurance with Care Health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Business setup & accounting</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Connect With Us:</h4>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="https://www.linkedin.com/company/arjav-consultancy/" 
                    className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Linkedin className="w-5 h-5 text-[#0077B5]" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </Link>
                  <Link 
                    href="https://www.facebook.com/ArjavConsultancy/" 
                    className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    <span className="text-sm font-medium">Facebook</span>
                  </Link>
                  <Link 
                    href="https://share.google/gyWjxHnCfSSUmd6oE" 
                    className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Star className="w-5 h-5 text-[#FBBC04] fill-[#FBBC04]" />
                    <span className="text-sm font-medium">5★ Google Reviews</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-80 h-full rounded-2xl overflow-hidden shadow-xl border-4 border-primary/10 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Image src={Jitendra_Jain} alt="Jitendra Jain"  priority />
                {/* <div className="text-center">
                  <div className="text-8xl font-bold text-primary mb-4">JJ</div>
                  <p className="text-xl font-semibold">Jitendra Jain</p>
                  <p className="text-sm text-muted-foreground">Founder</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why People Trust Us
            </h2>
          </div>
          <div className="grid  md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">22+ Years Experience</h3>
                  <p className="text-muted-foreground">We\'ve been helping people like you since 2002. We know what works.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Attention</h3>
                  <p className="text-muted-foreground">No robots or call centers. You talk directly to us. We understand your situation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
                  <p className="text-muted-foreground">80+ satisfied clients who come back to us year after year.</p>
                </div>
              </div>
            </div>
            <div className="bg-green-200 rounded-2xl p-8 md:p-12 border hover:border-green-600 border-green-400 shadow-lg">
              <div className="text-center space-y-8">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">80+</div>
                  <p className="text-lg text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">22+</div>
                  <p className="text-lg text-muted-foreground">Years Serving You</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">5.0</div>
                  <p className="text-lg text-muted-foreground">★★★★★ Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What People Say About Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real people
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border relative"
              >
                <Quote className="w-10 h-10 text-green-500 absolute top-6 right-6" />
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Need Help With Your Finances?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call us today for a free chat. Let's see how we can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="tel:+918114480885" className='flex items-center'>
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 8114480885
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Arjav Consultancy</h3>
              <p className="opacity-80 mb-4">
                Your trusted partner for tax filing, GST returns, home loans, health insurance, and all money matters.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-80">
                <li><Link href="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
                <li><Link href="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
                <li><Link href="/services" className="hover:opacity-100 transition-opacity">Services</Link></li>
                <li><Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 opacity-80">
                <li>
                  <b>Phone No:</b> <Link href="tel:+918114480885" className="hover:opacity-100 transition-opacity">
                    +91 8114480885
                  </Link>
                </li>
                <li><b>Hours:</b>  Mon-Fri 9AM-6PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/20 mt-8 pt-8 text-center opacity-80">
            <p>&copy; 2026 Arjav Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
