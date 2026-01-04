import React, { useState } from 'react';
import { usePage, Head, Form } from '@inertiajs/react';
import AuthLayout from '@/pages/Frontend/layouts/AuthLayout';
import { SharedData } from '@/types';
import { User, Mail, MapPin, Phone, Save, Camera, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { updateProfile } from '@/actions/App/Http/Controllers/FrontendController';
import toast from 'react-hot-toast';


export default function EditProfile() {
    const { auth } = usePage<SharedData>().props;
    const user = auth.user;
    const [avatarPreview, setAvatarPreview] = useState<string | null>(user.avatar ? user.avatar : null);

    return (
        <AuthLayout>
            <Head title="Edit Profile" />

            <div className="bg-gray-50 min-h-screen py-2 md:py-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Back Button */}
                    <div className="mb-2">
                        <Button variant="ghost" className="gap-2 text-gray-600 hover:text-emerald-600 pl-0" onClick={() => window.history.back()}>
                            <ArrowLeft size={20} />
                            Back to Profile
                        </Button>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 md:p-8 border-b border-gray-100">
                            <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
                            <p className="text-gray-500 mt-1">Update your personal information</p>
                        </div>

                        <Form action={updateProfile().url}
                            method='POST'
                            className="p-6 md:p-8 space-y-8"
                        >

                            {/* Avatar Upload */}

                            {({ errors, processing, }) => (
                                <>
                                    <input type="hidden" name="_method" value="PUT" />

                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <div className="relative group">
                                            <div className="w-32 h-32 rounded-full border-4 border-gray-100 bg-gray-50 overflow-hidden relative shadow-inner">
                                                {avatarPreview ? (
                                                    <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-emerald-600 bg-emerald-50">
                                                        {user.name.charAt(0).toUpperCase()}
                                                    </div>
                                                )}

                                                <label htmlFor="avatar-upload" className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                                    <Camera className="text-white" size={32} />
                                                </label>
                                            </div>
                                            <input
                                                id="avatar-upload"
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                name='avatar'
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500">Click to upload new photo</p>
                                        <InputError message={errors.avatar} className="mt-2" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="text"
                                                    name='name'
                                                    defaultValue={user.name}
                                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <InputError message={errors.name} className="mt-2" />
                                        </div>

                                        {/* Email (Read Only) */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="email"
                                                    defaultValue={user.email}
                                                    readOnly
                                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed outline-none"
                                                />
                                            </div>
                                            <p className="text-xs text-gray-400">Email cannot be changed</p>
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="text"
                                                    name='phone'
                                                    defaultValue={user.phone || ""}
                                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
                                                    placeholder="Your Phone Number"
                                                />
                                            </div>
                                            <InputError message={errors.phone} className="mt-2" />
                                        </div>

                                        {/* Address */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Address</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input
                                                    type="text"
                                                    name='address'
                                                    defaultValue={user.address || ""}
                                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
                                                    placeholder="Your Address"
                                                />
                                            </div>
                                            <InputError message={errors.address} className="mt-2" />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => window.history.back()}
                                            disabled={processing}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-[120px]"
                                            disabled={processing}
                                        >
                                            {processing ? 'Saving...' : 'Save Changes'}
                                        </Button>
                                    </div>
                                </>
                            )}

                        </Form>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
