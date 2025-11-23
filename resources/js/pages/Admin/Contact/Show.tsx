import React from "react"
import { Head } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, MessageSquare, Calendar, User, Image, ChartAreaIcon } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { Contact } from "@/types/Admin/Contact"
import { index } from "@/routes/admin/contacts"

interface Props {
    contact: Contact
}

export default function ContactView({ contact }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Contacts", href: index().url },
        { title: contact.name, href: "#" },
    ]
    const handleCancel = () => window.history.back();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`View ${contact.name}`} />

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleCancel}
                            className="mb-4 hover:bg-white"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Contacts
                        </Button>

                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-4xl font-bold text-slate-900 mb-2">
                                    {contact.name}
                                </h1>
                                <p className="text-slate-600">
                                    Contact submitted on {new Date(contact.created_at || Date.now()).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                            <Badge
                                variant={contact.status ? "default" : "secondary"}
                                className={`text-sm px-4 py-2 ${contact.status
                                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                        : "bg-slate-200 text-slate-700"
                                    }`}
                            >
                                {contact.status ? "Active" : "Inactive"}
                            </Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Contact Info Cards */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Quick Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card className="border-0  bg-white">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-blue-100 rounded-lg">
                                                <Mail className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-slate-500 mb-1">Email Address</p>
                                                <p className="text-lg font-semibold text-slate-900 truncate">
                                                    {contact.email}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0  hover:shadow-xl transition-shadow bg-white">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-green-100 rounded-lg">
                                                <Phone className="h-6 w-6 text-green-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-slate-500 mb-1">Contact Number</p>
                                                <p className="text-lg font-semibold text-slate-900">
                                                    {contact.contact_no}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* subject Card */}
                            <Card className="border-0 hover:shadow-lg bg-white">
                                <CardHeader className="border-b bg-slate-50">
                                    <CardTitle className="flex items-center text-xl text-slate-900">
                                        <ChartAreaIcon className="h-5 w-5 mr-2 text-purple-600" />
                                        Subject
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    {contact.subject ? (
                                        <div className="prose max-w-none">
                                            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                                                {contact.subject}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="text-center py-8">
                                            <MessageSquare className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                                            <p className="text-slate-400 italic">No message provided</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Message Card */}
                            <Card className="border-0 hover:shadow-lg bg-white">
                                <CardHeader className="border-b bg-slate-50">
                                    <CardTitle className="flex items-center text-xl text-slate-900">
                                        <MessageSquare className="h-5 w-5 mr-2 text-purple-600" />
                                        Message
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    {contact.message ? (
                                        <div className="prose max-w-none">
                                            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                                                {contact.message}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="text-center py-8">
                                            <MessageSquare className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                                            <p className="text-slate-400 italic">No message provided</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Attachments/Images Card */}
                            {contact.image && contact.image.length > 0 && (
                                <Card className="border-0 shadow-lg bg-white">
                                    <CardHeader className="border-b bg-slate-50">
                                        <CardTitle className="flex items-center text-xl text-slate-900">
                                            <Image className="h-5 w-5 mr-2 text-pink-600" />
                                            Attachments ({contact.image.length})
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {contact.image.map((img, index) => (
                                                <div
                                                    key={index}
                                                    className="group relative aspect-square rounded-lg overflow-hidden bg-slate-100 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer"
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`Attachment ${index + 1}`}
                                                        className="w-full h-full  group-hover:scale-110 transition-transform duration-300"
                                                    />

                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        {/* Right Column - Details Sidebar */}
                        <div className="space-y-6">
                            {/* Contact Profile Card */}
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                                <CardContent className="p-6 text-center">
                                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <User className="h-12 w-12 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{contact.name}</h3>
                                    <p className="text-blue-100 text-sm">Contact Inquiry</p>
                                </CardContent>
                            </Card>

                            {/* Details Card */}
                            <Card className="border-0 shadow-lg bg-white">
                                <CardHeader className="border-b bg-slate-50">
                                    <CardTitle className="text-lg text-slate-900">Contact Details</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Calendar className="h-5 w-5 text-slate-400 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-slate-500">Submitted</p>
                                            <p className="text-sm font-medium text-slate-900">
                                                {new Date(contact.created_at || Date.now()).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-slate-500">Email</p>
                                            <p className="text-sm font-medium text-slate-900 break-all">
                                                {contact.email}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Phone className="h-5 w-5 text-slate-400 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-slate-500">Phone</p>
                                            <p className="text-sm font-medium text-slate-900">
                                                {contact.contact_no}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-500">Status</span>
                                            <div className="flex items-center space-x-2">
                                                <div
                                                    className={`w-2 h-2 rounded-full ${contact.status ? "bg-emerald-500" : "bg-slate-400"
                                                        }`}
                                                />
                                                <span className={`text-sm font-medium ${contact.status ? "text-emerald-700" : "text-slate-600"
                                                    }`}>
                                                    {contact.status ? "Active" : "Inactive"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}