import { Button } from '@/components/ui/button';
import { Calculator, ClipboardCheck, Facebook, FileText, Heart, Home, Linkedin, Phone, Quote, Shield, Star, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const services = [
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Comprehensive bookkeeping, financial statements, and accounting solutions tailored to your business needs.',
    },
    {
      icon: FileText,
      title: 'Income Tax Returns & GST Filing',
      description: 'Expert ITR filing and GST return services for individuals and businesses. Comprehensive tax preparation to maximize returns and ensure compliance.',
    },
    {
      icon: Home,
      title: 'Mortgage Loans',
      description: 'Professional mortgage consultation and loan services to help you secure the best rates for your dream home.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Strategic financial planning and investment advice to help you achieve your long-term financial goals.',
    },
    {
      icon: Users,
      title: 'Business Consulting',
      description: 'Expert business advisory services including startup consulting, business registration, and growth strategies.',
    },
    {
      icon: Shield,
      title: 'Audit & Compliance',
      description: 'Ensure regulatory compliance with our thorough audit services and compliance management solutions.',
    },
    {
      icon: Heart,
      title: 'Health Insurance Advisory',
      description: 'Professional health insurance consultation with Care Health. Get the right coverage for you and your family with expert guidance.',
    },
    {
      icon: ClipboardCheck,
      title: 'GST Registration & Returns',
      description: 'Complete GST registration, filing, and compliance services. Simplify your tax obligations with expert assistance.',
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Partner in Smart <br/> Financial Planning
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Expert accounting, tax preparation, mortgage loans, and comprehensive financial solutions for individuals and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
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
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions designed to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border"
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Jitendra Jain
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With years of expertise in financial services, accounting, and tax consultation, Jitendra Jain founded Arjav Consultancy with a vision to provide personalized and trustworthy financial solutions to individuals and businesses alike.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a certified Health Advisor with Care Health, he also specializes in helping clients secure comprehensive health insurance coverage tailored to their unique needs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                His expertise spans across ITR filing, GST returns, financial planning, and health insurance advisory. His commitment to excellence and client satisfaction has helped numerous clients achieve their financial goals and build lasting relationships based on trust and transparency.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
                <div className="flex flex-wrap gap-4">
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
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Facebook</span>
                      <span className="text-xs text-muted-foreground">196 followers</span>
                    </div>
                  </Link>
                  <Link 
                    href="https://share.google/gyWjxHnCfSSUmd6oE" 
                    className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Star className="w-5 h-5 text-[#FBBC04] fill-[#FBBC04]" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Google Reviews</span>
                      <span className="text-xs text-muted-foreground">5.0 ★★★★★</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-primary/10 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                {/* Replace with actual photo: <Image src="/jitendra-jain.jpg" alt="Jitendra Jain" fill className="object-cover" priority /> */}
                <div className="text-center">
                  <div className="text-8xl font-bold text-primary mb-4">JJ</div>
                  <p className="text-xl font-semibold">Jitendra Jain</p>
                  <p className="text-sm text-muted-foreground">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Arjav Consultancy?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">Our certified professionals bring years of experience in accounting, taxation, and financial services.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">We understand that every client is unique and provide tailored solutions to meet your specific needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trusted Results</h3>
                    <p className="text-muted-foreground">With a proven track record of success, we help our clients achieve their financial goals with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border">
              <div className="text-center space-y-8">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">80+</div>
                  <p className="text-lg text-muted-foreground">Satisfied Clients</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">22+</div>
                  <p className="text-lg text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">98%</div>
                  <p className="text-lg text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
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
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="tel:+919414269444" className='flex items-center'>
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Arjav Consultancy</h3>
              <p className="opacity-80 mb-4">
                Your trusted partner for accounting, tax preparation, GST filing, health insurance advisory, and comprehensive financial services.
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
                  <b>Phone No:</b> <Link href="tel:+919414269444" className="hover:opacity-100 transition-opacity">
                    +91 9414269444
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
