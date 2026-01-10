import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { index, update } from "@/routes/admin/promo-text"
import { PromoText } from "@/types/Admin/PromoText"


const breadcrumbs: BreadcrumbItem[] = [
    { title: "PromoTexts", href: index().url },
    { title: "Create", href: "#" },
]

interface Props {
    promoText: PromoText
}

export default function PromoTextEdit({ promoText }: Props) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create PromoText" />
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
                            <h1 className="text-2xl font-bold tracking-tight">Create PromoText</h1>
                            <p className="text-muted-foreground">
                                Add a new PromoText.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>PromoText Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                action={update(promoText.id).url}
                                method="post"
                                className="space-y-6"
                            >

                                {({ errors }) => (
                                    <>

                                        {/* Name and Image in one row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <input type="hidden" name="_method" value="put" />

                                            <div className="space-y-2">
                                                <Label htmlFor="name">PromoText Title</Label>
                                                <Input
                                                    id="name"
                                                    name="title"
                                                    type="text"
                                                    defaultValue={promoText.title}
                                                />
                                                {errors.title && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.title}
                                                    </p>
                                                )}
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
                    </Card>
                </div>
            </div>
        </AppLayout>
    )
}