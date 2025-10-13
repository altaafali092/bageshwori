import React from "react"
import { Head } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft,  Image as ImageIcon, FileText } from "lucide-react"
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

            <div className="container mx-auto py-8 px-6 space-y-8">
                {/* Header Section */}
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div className="flex items-start space-x-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCancel}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>

                        <div className="space-y-1">
                            <div className="flex items-center space-x-3">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-500">
                                    {contact.name}
                                </h1>

                            </div>
                            <p className="text-gray-600 text-lg">
                                contact management and details
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Details Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center text-xl">
                                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                                    Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Contact Name */}
                                <div className="space-y-2">
                                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                        Contact Name
                                    </h3>
                                    <p className="text-xl font-medium text-gray-400">
                                        {contact.name}
                                    </p>
                                </div>
                                 <div className="space-y-2">
                                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                        Contact Email
                                    </h3>
                                    <p className="text-xl font-medium text-gray-400">
                                        {contact.email}
                                    </p>
                                </div>
                                  <div className="space-y-2">
                                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                        Contact Contact No
                                    </h3>
                                    <p className="text-xl font-medium text-gray-400">
                                        {contact.contact_no}
                                    </p>
                                </div>

                                <Separator />

                                {/* Description */}
                                <div className="space-y-2">
                                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                        Message
                                    </h3>
                                    {contact.message ? (
                                        <p className="text-gray-500 leading-relaxed">
                                            {contact.message}
                                        </p>
                                    ) : (
                                        <p className="text-gray-400 italic">
                                            No message provided
                                        </p>
                                    )}
                                </div>

                                <Separator />

                                {/* Status */}
                                <div className="space-y-2">
                                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                        Status
                                    </h3>
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={`w-3 h-3 rounded-full ${contact.status ? "bg-emerald-500" : "bg-gray-400"
                                                }`}
                                        />
                                        <span className={`font-medium ${contact.status ? "text-emerald-700" : "text-gray-600"
                                            }`}>
                                            {contact.status ? "Active" : "Inactive"}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            • {contact.status ? "Visible to users" : "Hidden from users"}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                    </div>
                </div>
            </div>
        </AppLayout>
    )
}