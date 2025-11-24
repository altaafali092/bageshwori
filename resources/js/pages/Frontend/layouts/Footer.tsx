import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

export default function Footer() {
    const { officeSettings } = usePage<SharedData>().props;

    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">
                            {officeSettings?.office_name}
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {officeSettings?.desc}
                        </p>
                        <div className="mb-6">
                            <p className="text-white font-semibold">
                                {officeSettings?.office_address}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a href={officeSettings?.facebook} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href={officeSettings?.twitter} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href={officeSettings?.instagram} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href={officeSettings?.twitter} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Page Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Page Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Vendors</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sponsers</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Executive</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                {/* <div className="mt-16 pt-12 border-t border-gray-800">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Newsletter Sign-up</h3>
                            <p className="text-gray-400 text-sm">
                                **NOTE: Insert Contact Form 7 plugin shortcode and use the classname" grocefycart-contact-newsletter-1, grocefycart-contact-newsletter-2, grocefycart-contact-newsletter-3 or grocefycart-contact-newsletter-4"
                            </p>
                        </div>
                        <div className="border border-gray-700 rounded-lg p-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-lg">
                                    <Phone className="text-black" size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Hotline Number</p>
                                    <p className="text-xl font-bold">+1 (000)012-3456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            Proudly powered by <span className="text-white">❤️</span> | GrocefyCart by <span className="text-white">CozyThemes</span>.
                        </div>
                        <div className="flex gap-3">
                            <div className="bg-white px-4 py-2 rounded">
                                <span className="text-blue-600 font-bold text-sm">VISA</span>
                            </div>
                            <div className="bg-white px-4 py-2 rounded flex items-center gap-1">
                                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                                <div className="w-6 h-6 rounded-full bg-orange-500 -ml-3"></div>
                            </div>
                            <div className="bg-white px-4 py-2 rounded">
                                <span className="text-blue-700 font-bold text-sm">AMEX</span>
                            </div>
                            <div className="bg-white px-4 py-2 rounded">
                                <span className="text-blue-600 font-bold text-sm">PayPal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}