import { Facebook, Instagram, Linkedin, Phone, Twitter } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { aboutUs, allproduct, home, ourService } from '@/routes';

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
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            {officeSettings?.desc && (
                                officeSettings.desc.split(' ').slice(0, 50).join(' ') +
                                (officeSettings.desc.split(' ').length > 50 ? '...' : '')
                            )}
                        </p>
                        <div className="mb-6">
                            <p className="text-white font-semibold">
                                {officeSettings?.office_address || 'No address found'}
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
                                <Link href={home()} className="text-gray-400 hover:text-white transition-colors"> Home</Link>

                            </li>
                            <li>
                                <Link href={aboutUs()} className="text-gray-400 hover:text-white transition-colors">About Us</Link>

                            </li>
                           
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href={aboutUs()} className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href={allproduct()} className="text-gray-400 hover:text-white transition-colors">Shop</Link>
                            </li>

                            <li>
                                <Link href={ourService()} className="text-gray-400 hover:text-white transition-colors">Our Services</Link>
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

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            Proudly powered by <span className="text-white">❤️</span> |  <span className="text-white">{officeSettings?.office_name}</span>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
