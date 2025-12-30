import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Target,
  Award,
  TrendingUp,
  Heart,
  Leaf,
  ShieldCheck,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
  MessageSquare,
  FileText
} from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import ContactForm from './ContactForm';
import useFlashToast from '@/components/useFlashToast';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

const AboutContact = () => {
  const { officeSettings } = usePage<SharedData>().props;

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50K+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: TrendingUp, label: 'Years Experience', value: '15+' },
    { icon: Leaf, label: 'Organic Products', value: '500+' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction in everything we do'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly and organic practices'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assured',
      description: 'Only the finest products make it to your table'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'David Park',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=400'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@organicstore.com', 'support@organicstore.com'],
      link: 'mailto:info@organicstore.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Organic Street', 'Green Valley, CA 90210'],
      link: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
      link: null
    }
  ];

  return (

    <AuthLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className=" h-[400px] bg-gradient-to-r from-emerald-50 to-teal-50 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Badge className="mb-4 text-2xl" variant="secondary">About Us</Badge>
            <h1 className="text-5xl font-bold mb-4">Welcome to Organic Store</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering fresh, organic products to your doorstep since 2010
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-6xl mx-auto px-4 -mt-16 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6 space-y-2">
                  <stat.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-green-500">Our Story</Badge>
                <h2 className="text-3xl font-bold mb-4">Passionate About Organic Living</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, Organic Store began with a simple mission: to make high-quality organic products accessible to everyone. What started as a small local market has grown into a trusted online destination for health-conscious consumers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We partner with certified organic farmers and producers who share our commitment to sustainability and quality. Every product in our store is carefully selected to meet our strict standards for purity and excellence.
              </p>
              <div className="flex gap-4">
                <Button className='bg-green-500'>Learn More</Button>
                <Button variant="outline">Our Products</Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000"
                alt="Organic produce"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-16 mb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-500">Our Values</Badge>
              <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core values guide every decision we make and every product we offer
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500">Our Team</Badge>
            <h2 className="text-3xl font-bold mb-4">Meet The People Behind Our Success</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals passionate about bringing you the best organic products
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="pt-4 text-center">
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="max-w-6xl mx-auto mb-16" />

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500">Contact Us</Badge>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-300 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {info.link && idx === 0 ? (
                              <a href={info.link} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3 ">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-green-300">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-green-300">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-green-300">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-green-300">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>

        {/* Map Section */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Visit Our Store</CardTitle>
              <CardDescription>Find us at our physical location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[400px] bg-muted rounded-lg overflow-hidden">
                <iframe
                  src={officeSettings.office_google_map || ""}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}

                  loading="lazy"
                  title="Store Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Newsletter Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter for exclusive deals and organic living tips
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </AuthLayout>
  );
};

export default AboutContact;