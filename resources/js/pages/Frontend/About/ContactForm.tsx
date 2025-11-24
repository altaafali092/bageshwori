import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { frontMessage } from '@/routes'
import { Form } from '@inertiajs/react'
import toast from 'react-hot-toast'

import { FileText, Image, Mail, MessageSquare, Phone, Send, User } from 'lucide-react'

const ContactForm = () => {
    return (


        <Card className="lg:col-span-2 border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <CardHeader className="space-y-3 pb-6">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Send Us A Message
                </CardTitle>
                <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you shortly
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form
                    action={frontMessage().url}
                    method="POST"
                    options={{
                        preserveScroll: true,
                        onSuccess: () => {
                            toast.success('Message submitted successfully')
                        },
                    }}
                    setDefaultsOnSuccess

                >
                    {({ errors }) => (
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                                        <User className="h-4 w-4 text-blue-600" />
                                        Full Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="h-12 border-2 focus:border-blue-500 transition-all duration-300 focus:shadow-lg focus:shadow-blue-100"
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-500">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2 group">
                                    <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-purple-600" />
                                        Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="h-12 border-2 focus:border-purple-500 transition-all duration-300 focus:shadow-lg focus:shadow-purple-100"
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2 group">
                                    <Label htmlFor="contact_no" className="text-sm font-medium flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-blue-600" />
                                        Mobile No.
                                    </Label>
                                    <Input
                                        id="contact_no"
                                        name="contact_no"
                                        placeholder="98234*******"
                                        className="h-12 border-2 focus:border-blue-500 transition-all duration-300 focus:shadow-lg focus:shadow-blue-100"
                                    />
                                    {errors.contact_no && (
                                        <p className="text-sm text-red-500">
                                            {errors.contact_no}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2 group">
                                    <Label htmlFor="image" className="text-sm font-medium flex items-center gap-2">
                                        <Image className="h-4 w-4 text-blue-600" />
                                        Image
                                    </Label>
                                    <Input
                                        id="image"
                                        type='file'
                                        name="image[]"
                                        multiple
                                        accept="image/*"
                                        className="h-12 border-2 focus:border-blue-500 transition-all duration-300 focus:shadow-lg focus:shadow-blue-100"
                                    />
                                    {errors.image && (
                                        <p className="text-sm text-red-500">
                                            {errors.image}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <Label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4 text-indigo-600" />
                                    Subject
                                </Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="How can we help you?"
                                    className="h-12 border-2 focus:border-indigo-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-100"
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-500">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2 group">
                                <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-pink-600" />
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us more about your inquiry..."
                                    rows={14}
                                    className="border-2 focus:border-pink-500 transition-all duration-300 focus:shadow-lg focus:shadow-pink-100 resize-none"
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-500">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <Button
                                type='submit'
                                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Send className="mr-2 h-5 w-5" />
                                Send Message
                            </Button>
                        </div>
                    )}
                </Form>
            </CardContent>
        </Card>

    )
}

export default ContactForm