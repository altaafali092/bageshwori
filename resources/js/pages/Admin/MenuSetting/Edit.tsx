import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

import { index, update } from "@/routes/admin/menu-setting"
import { type BreadcrumbItem } from "@/types"

import { Category } from "@/types/Admin/Category"
import { MenuSetting } from "@/types/Admin/MenuSetting"

interface Props {
  categories: Category[]
  menuSettings: MenuSetting[]
  menuTypes: Record<string, string>

  staticPages: Record<string, string>        // { about: "About Us", contact: "Contact" }
  staticPageSlugs: Record<string, string>    // { about: "/about-us", contact: "/contact" }

  menuSetting: MenuSetting                   // the record being edited
}

const breadcrumbs: BreadcrumbItem[] = [
  { title: "Menu Setting", href: index().url },
  { title: "Edit", href: "#" },
]

export default function MenuSettingEdit({
  categories,
  menuSettings,
  menuTypes,
  staticPages,
  staticPageSlugs,
  menuSetting,
}: Props) {

  // --- PREFILL STATES FROM EXISTING DATA ---
  const [menuType, setMenuType] = React.useState<string>(menuSetting.menu_type ?? "")
  const [menuableId, setMenuableId] = React.useState<string>(String(menuSetting.menuable_id ?? ""))
  const [menuableKey, setMenuableKey] = React.useState<string>(menuSetting.menuable_key ?? "")
  const [slugValue, setSlugValue] = React.useState<string>(menuSetting.slug ?? "")

  // Handle menu type change
  const handleMenuTypeChange = (value: string) => {
    setMenuType(value)
    setMenuableId("")
    setMenuableKey("")
    setSlugValue("")

    if (value === "static") {
      const firstKey = Object.keys(staticPageSlugs)[0]
      if (firstKey) {
        setMenuableKey(firstKey)
        setSlugValue(staticPageSlugs[firstKey])
      }
    }
  }

  // Sync slug for static pages
  React.useEffect(() => {
    if (menuType === "static" && menuableKey) {
      setSlugValue(staticPageSlugs[menuableKey] || "")
    }
  }, [menuType, menuableKey, staticPageSlugs])

  const handleBack = () => window.history.back()

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Edit Menu Setting" />

      <div className="flex flex-col gap-6 p-4">
        {/* HEADER */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <div>
            <h1 className="text-2xl font-bold">Edit Menu Setting</h1>
            <p className="text-muted-foreground">Modify this menu.</p>
          </div>
        </div>

        {/* FORM */}
        <Card>
          <CardHeader>
            <CardTitle>Menu Details</CardTitle>
          </CardHeader>

          <CardContent>
            <Form
              action={update(menuSetting.id).url}
              method="post"
              className="space-y-6"
            >
              {({ errors }: { errors: Record<string, any> }) => (
                <>
                  <input type="hidden" name="_method" value="PUT" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Parent Menu */}
                    <div className="space-y-2">
                      <Label htmlFor="menu_id">Parent Menu</Label>

                      <select
                        id="menu_id"
                        name="menu_id"
                        className="w-full rounded border px-3 py-2"
                        defaultValue={menuSetting.menu_id ?? ""}
                      >
                        <option value="">Select Parent Menu</option>

                        {menuSettings
                          .filter((m) => m.id !== menuSetting.id) // prevent self-parenting
                          .map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.title}
                            </option>
                          ))}
                      </select>

                      {errors.menu_id && (
                        <p className="text-sm text-red-500">{errors.menu_id}</p>
                      )}
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="title">Menu Name</Label>
                      <Input
                        id="title"
                        name="title"
                        type="text"
                        defaultValue={menuSetting.title}
                      />
                      {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                    </div>

                    {/* SLUG */}
                    <div className="space-y-2">
                      <Label htmlFor="slug">Menu Slug</Label>

                      {menuType === "static" ? (
                        <select
                          id="slug"
                          name="slug"
                          className="w-full rounded border px-3 py-2"
                          value={slugValue}
                          onChange={(e) => setSlugValue(e.target.value)}
                        >
                          {Object.entries(staticPageSlugs).map(([key, slug]) => (
                            <option key={key} value={slug}>
                              {slug}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <Input
                          id="slug"
                          name="slug"
                          type="text"
                          value={slugValue}
                          onChange={(e) => setSlugValue(e.target.value)}
                        />
                      )}

                      {errors.slug && <p className="text-sm text-red-500">{errors.slug}</p>}
                    </div>

                    {/* Menu Type */}
                    <div className="space-y-2">
                      <Label htmlFor="menu_type">Menu Type</Label>

                      <select
                        id="menu_type"
                        name="menu_type"
                        className="w-full rounded border px-3 py-2"
                        value={menuType}
                        onChange={(e) => handleMenuTypeChange(e.target.value)}
                      >
                        <option value="">Select Menu Type</option>

                        {Object.entries(menuTypes).map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>

                      {errors.menu_type && (
                        <p className="text-sm text-red-500">{errors.menu_type}</p>
                      )}
                    </div>

                    {/* CATEGORY FIELD */}
                    {menuType === "category" && (
                      <div className="space-y-2">
                        <Label>Select Category</Label>
                        <select
                          name="menuable_id"
                          className="w-full rounded border px-3 py-2"
                          value={menuableId}
                          onChange={(e) => setMenuableId(e.target.value)}
                        >
                          <option value="">Select Category</option>

                          {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>

                        {errors.menuable_id && (
                          <p className="text-sm text-red-500">{errors.menuable_id}</p>
                        )}
                      </div>
                    )}

                    {/* STATIC FIELD */}
                    {menuType === "static" && (
                      <div className="space-y-2">
                        <Label>Select Static Page</Label>
                        <select
                          name="menuable_key"
                          className="w-full rounded border px-3 py-2"
                          value={menuableKey}
                          onChange={(e) => setMenuableKey(e.target.value)}
                        >
                          {Object.entries(staticPages).map(([key, label]) => (
                            <option key={key} value={key}>
                              {label}
                            </option>
                          ))}
                        </select>

                        {errors.menuable_key && (
                          <p className="text-sm text-red-500">{errors.menuable_key}</p>
                        )}
                      </div>
                    )}

                    {/* Position */}
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Input
                        id="position"
                        name="position"
                        type="number"
                        defaultValue={menuSetting.position}
                      />
                      {errors.position && (
                        <p className="text-sm text-red-500">{errors.position}</p>
                      )}
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2 pt-4">
                    <Button type="submit">Update</Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              )}
            </Form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
