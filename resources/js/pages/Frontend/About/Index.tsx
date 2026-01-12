import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Users, ShieldCheck, Heart, PawPrintIcon } from 'lucide-react';
import AuthLayout from '../layouts/AuthLayout';
import ContactForm from './ContactForm';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

const AboutKennel = () => {
  const { officeSettings } = usePage<SharedData>().props;

  const stats = [
    { icon: Users, label: 'Happy Owners', value: '500+' },
    { icon: ShieldCheck, label: 'Healthy Puppies', value: '100+' },
    { icon: Heart, label: 'Years Experience', value: '10+' },
    { icon: PawPrintIcon, label: 'Dogs Trained', value: '300+' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Proper Dog Care',
      description: 'Our dogs receive personalized care, hygiene, and attention daily.'
    },
    {
      icon: ShieldCheck,
      title: 'Healthy Breeding',
      description: 'We follow ethical breeding practices to ensure pure & healthy breeds.'
    },
    {
      icon: PawPrintIcon,
      title: 'Quality Food & Checkups',
      description: 'Regular health checks and nutritious food for all dogs.'
    },
    {
      icon: Heart,
      title: 'Friendly Environment',
      description: 'Our kennel is welcoming and safe for all dogs.'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [officeSettings.office_phone],
      link: `tel:${officeSettings.office_phone}`
    },
    {
      icon: Mail,
      title: 'Email',
      details: [officeSettings.office_email],
      link: `mailto:${officeSettings.office_email}`
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [officeSettings.office_address],
      link: null
    }
  ];

  return (
    <AuthLayout>
      <div className="min-h-screen dark:bg-slate-950 transition-colors duration-300">

        {/* Hero Section */}
        <section className="h-[400px] bg-emerald-50 dark:bg-slate-900/50 flex items-center justify-center transition-colors">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Badge className="mb-4 text-2xl" variant="secondary">About Our Kennel</Badge>
            <h1 className="text-5xl font-bold mb-4 dark:text-white">Welcome to Bageshwori Kennel House</h1>
            <p className="text-xl text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
              At Bageshwori Kennel House, we provide proper care, healthy breeding, and a friendly environment for all dogs.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-6xl mx-auto px-4 -mt-16 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center dark:bg-slate-900 dark:border-slate-800">
                <CardContent className="pt-6 space-y-2">
                  <stat.icon className="h-8 w-8 mx-auto text-primary dark:text-emerald-400 mb-2" />
                  <p className="text-3xl font-bold dark:text-white">{stat.value}</p>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 dark:bg-slate-900/30 py-16 mb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-500">Our Focus</Badge>
              <h2 className="text-3xl font-bold mb-4 dark:text-white">What We Do Best</h2>
              <p className="text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
                Our kennel is managed by experienced handlers who truly care about animal welfare.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all dark:bg-slate-900 dark:border-slate-800">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="h-6 w-6 text-primary dark:text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-lg dark:text-slate-100">{value.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-slate-400">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500">Contact Us</Badge>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Get In Touch</h2>
            <p className="text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
              Have questions about our services, breeding, or boarding? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-all dark:bg-slate-900 dark:border-slate-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-300 dark:bg-emerald-900/50 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary dark:text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 dark:text-slate-100">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground dark:text-slate-400">
                            {info.link && idx === 0 ? (
                              <a href={info.link} className="hover:text-primary dark:hover:text-emerald-400 transition-colors">
                                {detail}
                              </a>
                            ) : detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="dark:bg-slate-900 dark:border-slate-800">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 dark:text-slate-100">Follow Us</h3>
                  <div className="flex gap-3 ">
                    {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                      <Button key={idx} variant="outline" size="icon" className="rounded-full hover:bg-green-300 dark:hover:bg-emerald-900/50 dark:border-slate-700 dark:text-slate-300">
                        <Icon className="h-4 w-4" />
                      </Button>
                    ))}
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
          <Card className="dark:bg-slate-900 dark:border-slate-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Visit Our Kennel</CardTitle>
              <CardDescription className="dark:text-slate-400">Find us at our physical location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[400px] bg-muted dark:bg-slate-800 rounded-lg overflow-hidden">
                <iframe
                  src={officeSettings.office_google_map || ""}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Kennel Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </AuthLayout>
  );
};

export default AboutKennel;
