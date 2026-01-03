import React from 'react';
import { usePage, Head, Link } from '@inertiajs/react';
import AuthLayout from '@/pages/Frontend/layouts/AuthLayout';
import { SharedData } from '@/types';
import { User, Mail, Calendar, MapPin, Phone, Edit, Package, Heart, Settings, Camera, LogOut } from 'lucide-react';

export default function UserProfile() {
    const { auth } = usePage<SharedData>().props;
    const user = auth.user;

    if (!user) {
        return (
            <AuthLayout>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <p className="text-xl text-gray-500">Please log in to view your profile.</p>
                </div>
            </AuthLayout>
        );
    }

    // Helper to format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <AuthLayout>
            <Head title="My Profile" />

            <div className="bg-gray-50 min-h-screen py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header Card */}
                    <div className="bg-white rounded-3xl shadow-sm overflow-hidden mb-8 border border-gray-100">
                        <div className="h-32 md:h-48 bg-gradient-to-r from-emerald-600 to-teal-500 relative">
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        <div className="px-6 md:px-10 pb-8 relative">
                            <div className="flex flex-col md:flex-row items-end -mt-16 md:-mt-20 mb-6 gap-6">
                                <div className="relative group">
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] border-white bg-white shadow-lg flex items-center justify-center text-5xl font-bold text-emerald-600 overflow-hidden relative">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="select-none">{user.name.charAt(0).toUpperCase()}</span>
                                        )}

                                        {/* Hover Overlay for Avatar Upload */}
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                            <Camera className="text-white" size={32} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 pt-2 md:pt-0 text-center md:text-left">
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{user.name}</h1>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-3 text-gray-600">
                                        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                            <Mail size={16} className="text-emerald-600" />
                                            {user.email}
                                        </span>
                                        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                            <Calendar size={16} className="text-emerald-600" />
                                            Joined {formatDate(user.created_at)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-3 w-full md:w-auto">
                                    <Link href="/user-profile/edit" className="flex-1 md:flex-none px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                                        <Edit size={18} />
                                        Edit Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 sticky top-8">
                                <nav className="space-y-1">
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-emerald-700 bg-emerald-50 rounded-xl font-semibold transition-all">
                                        <User size={20} />
                                        Personal Info
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-all">
                                        <Package size={20} />
                                        My Orders
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-all">
                                        <Heart size={20} />
                                        Wishlist
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-all">
                                        <Settings size={20} />
                                        Settings
                                    </button>
                                </nav>

                                <div className="mt-8 pt-6 border-t border-gray-100 px-4">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Account</p>
                                    <button className="w-full flex items-center gap-3 text-red-600 hover:text-red-700 font-medium transition-colors">
                                        <LogOut size={18} />
                                        <span>Log Out</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="lg:col-span-9">
                            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                                    <Link href="/user-profile/edit" className="text-emerald-600 font-semibold hover:text-emerald-700 text-sm">
                                        Update Info
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                                        <div className="p-4 bg-gray-50 rounded-xl text-gray-900 font-medium border border-gray-100 flex items-center gap-3">
                                            <User size={18} className="text-gray-400" />
                                            {user.name}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                                        <div className="p-4 bg-gray-50 rounded-xl text-gray-900 font-medium border border-gray-100 flex items-center gap-3">
                                            <Mail size={18} className="text-gray-400" />
                                            {user.email}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone Number</label>
                                        <div className="p-4 bg-gray-50 rounded-xl text-gray-900 font-medium border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-emerald-200 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <Phone size={18} className="text-gray-400" />
                                                {user.phone ? (
                                                    <span>{user.phone || ""}</span>
                                                ) : (
                                                    <span className="text-gray-400 italic">Not added</span>
                                                )}
                                            </div>
                                            {!user.phone && (
                                                <Link href="/user-profile/edit" className="text-xs font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">ADD</Link>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Address</label>
                                        <div className="p-4 bg-gray-50 rounded-xl text-gray-900 font-medium border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-emerald-200 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <MapPin size={18} className="text-gray-400" />
                                                {user.address ? (
                                                    <span>{user.address}</span>
                                                ) : (
                                                    <span className="text-gray-400 italic">Not added</span>
                                                )}
                                            </div>
                                            {!user.address && (
                                                <Link href="/user-profile/edit" className="text-xs font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">ADD</Link>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-6">Account Security</h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-100 gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white rounded-full shadow-sm text-emerald-600">
                                                <Settings size={24} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">Password</p>
                                                <p className="text-sm text-gray-500 mt-1">Last changed 3 months ago</p>
                                            </div>
                                        </div>
                                        <button className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                                            Change Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
