import React from "react"
import { Card } from "@/components/ui/card"
import { Dog, PawPrintIcon, Home, GraduationCap, Syringe, Bone, ShirtIcon, Check } from "lucide-react"
import AuthLayout from "../layouts/AuthLayout"
import { Head, Link } from "@inertiajs/react"
import { aboutUs } from "@/routes"
import Header from "../layouts/Header"

export default function OurServicesPage() {
    const coreServices = [
        { title: "Dog Breeding", description: "Pure & healthy breeds to bring happiness to your family.", icon: <Dog className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> },
        { title: "Puppy Sales", description: "Healthy puppies ready for adoption with proper guidance.", icon: <PawPrintIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> },
        { title: "Dog Boarding", description: "Safe, clean, and comfortable boarding for short or long stays.", icon: <Home className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> },
        { title: "Dog Training", description: "Basic obedience and behavior improvement by trained experts.", icon: <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> },
        { title: "Health Guidance", description: "Vaccinations, checkups, and expert advice to keep your pets healthy.", icon: <Syringe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> },
    ]

    const additionalServices = [
        { title: "Medicines for Pets", description: "Trusted medicines for various pet needs.", icon: <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> },
        { title: "Pet Clothes", description: "Comfortable and stylish clothes for pets.", icon: <ShirtIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> },
        { title: "Pet Accessories", description: "Food bowls, leashes, collars, toys, and more.", icon: <Bone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> },
    ]

    const whyChooseUs = [
        "Clean and well-maintained kennel",
        "Healthy and vaccinated puppies",
        "Affordable and transparent pricing",
        "Honest guidance for new dog owners",
        "Love, care, and responsibility first",
    ]

    return (
        <AuthLayout>
            <Head title="Our Services" />
            <div className="min-h-screen dark:bg-slate-950 transition-colors duration-300">
                {/* Hero Section */}
                <section className="bg-emerald-50 dark:bg-slate-900/50 py-16 text-center transition-colors">
                    <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                        Our Services
                    </h1>
                    <p className="text-gray-700 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Professional care and love for your beloved pets. We provide complete services to keep them happy, healthy, and active.
                    </p>
                </section>

                {/* Core Services */}
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">What We Offer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreServices.map((service, index) => (
                            <Card key={index} className="p-6 flex flex-col gap-4 rounded-xl border dark:border-slate-800 dark:bg-slate-900 hover:shadow-md transition-all">
                                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                                <p className="text-gray-600 dark:text-slate-400">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="bg-gray-50 dark:bg-slate-900/30 py-16 transition-colors">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Why Choose Us</h2>
                        <ul className="space-y-4">
                            {whyChooseUs.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 justify-center text-gray-700 dark:text-slate-300">
                                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Additional Services */}
                <section className="max-w-7xl mx-auto px-4 py-16">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Additional Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalServices.map((service, index) => (
                            <Card key={index} className="p-6 flex flex-col gap-4 rounded-xl border dark:border-slate-800 dark:bg-slate-900 hover:shadow-md transition-all text-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-900/20 rounded-full mx-auto mb-2">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{service.title}</h3>
                                <p className="text-gray-600 dark:text-slate-400">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-emerald-600 dark:bg-emerald-700 py-16 text-center text-white transition-colors">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to give your pet the best care?</h2>
                    <p className="mb-8 max-w-2xl mx-auto text-emerald-50 dark:text-emerald-100">Contact us today to book a service or consultation and join hundreds of happy pet owners.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={aboutUs()}>
                            <button className="bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all shadow-lg">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </AuthLayout>
    )
}
