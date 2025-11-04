import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Building2, Building2Icon, FacebookIcon, Image, InstagramIcon, LocateIcon, MailIcon, MapIcon, MapPin, Music2Icon, Phone, PhoneIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { index, store } from "@/routes/admin/office-setting"



const breadcrumbs: BreadcrumbItem[] = [
  { title: "Office Settings", href: index().url },
  { title: "Index", href: "#" },
]

export default function OfficeSettingCreate() {
  const handleCancel = () => window.history.back()

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Office Settings" />
      <div className="flex h-full flex-1 flex-col gap-6 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCancel}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Office Settings</h1>
              <p className="text-muted-foreground">
                Add a new office setting with image and description.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full">
          <div>
            <CardContent>
              <Form
                action={store().url}
                method="post"
                className="space-y-6"
              >

                {({ errors }) => (
                  <>

                    <div className="space-y-6">
                      {/* Basic Information */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Building2 className="h-5 w-5" />
                            Basic Information
                          </h2>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Office Name *
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <input
                                type="text"
                                name="office_name"
                                placeholder="Enter office name"
                                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              />
                              {errors.office_name && (
                                <p className="text-red-500 text-sm mt-1">{errors.office_name}</p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Office Email *
                            </label>
                            <div className="relative">
                              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <input
                                type="email"
                                name="office_email"
                                placeholder="office@example.com"
                                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <input
                                type="tel"
                                name="office_phone"
                                placeholder="98xxxxxxxxxx"

                                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Office Address *
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <input
                                type="text"
                                name="office_address"
                                placeholder="123 Main St, City"

                                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              />
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Google Maps URL
                            </label>
                            <div className="relative">
                              <MapIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <input
                                type="url"
                                name="office_google_map"
                                placeholder="https://maps.google.com/..."

                                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              />
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Description
                            </label>
                            <textarea
                              name="description"
                              rows={4}
                              placeholder="Tell us about your office..."

                              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                          <Image className="h-5 w-5" />
                          Media & Branding
                        </h2>
                      </div>
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { name: 'office_logo', label: 'Office Logo', desc: 'Recommended: 200x200px' },
                          { name: 'office_cover', label: 'Cover Image', desc: 'Recommended: 1920x600px' },
                          { name: 'office_banner', label: 'Banner Image', desc: 'Recommended: 1920x400px' },
                          { name: 'office_banner_2', label: 'Banner 2 Image', desc: 'Recommended: 1920x400px' }
                        ].map((field) => (
                          <div key={field.name} className="group">
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              {field.label}
                            </label>
                            <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer group-hover:bg-purple-50">
                              <input
                                type="file"
                                name={field.name}
                                accept="image/*"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                              <Image className="h-8 w-8 mx-auto mb-2 text-slate-400 group-hover:text-purple-500 transition-colors" />
                              <p className="text-sm text-slate-600 mb-1 font-medium">Click to upload</p>
                              <p className="text-xs text-slate-500">{field.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4">
                        <h2 className="text-lg font-semibold text-white">Social Media Links</h2>
                      </div>
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { name: 'facebook', icon: FacebookIcon, label: 'Facebook', color: 'text-blue-600', placeholder: 'https://facebook.com/your-page' },
                          { name: 'twitter', icon: TwitterIcon, label: 'Twitter', color: 'text-sky-500', placeholder: 'https://twitter.com/your-handle' },
                          { name: 'instagram', icon: InstagramIcon, label: 'Instagram', color: 'text-pink-600', placeholder: 'https://instagram.com/your-profile' },
                          { name: 'youtube', icon: YoutubeIcon, label: 'YouTube', color: 'text-red-600', placeholder: 'https://youtube.com/@your-channel' },
                          { name: 'tiktok', icon: Music2Icon, label: 'TikTok', color: 'text-slate-900', placeholder: 'https://tiktok.com/@your-account' }
                        ].map((social) => {
                          const Icon = social.icon
                          return (
                            <div key={social.name}>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                {social.label}
                              </label>
                              <div className="relative">
                                <Icon className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${social.color}`} />
                                <input
                                  type="url"
                                  name={social.name}
                                  placeholder={social.placeholder}

                                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button type="submit">Save</Button>
                      <Button type="button" variant="outline" onClick={handleCancel}>
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </Form>
            </CardContent>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}