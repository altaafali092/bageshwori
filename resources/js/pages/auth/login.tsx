import React, { useState } from 'react'
import { Form, Head, Link } from '@inertiajs/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import InputError from '@/components/input-error'

import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Loader2,
} from 'lucide-react'

import { register } from '@/routes'
import { store } from '@/routes/login'
import { request } from '@/routes/password'
import NavLogin from './NavLogin'
import TextLink from '@/components/text-link'

interface LoginProps {
    status?: string
    canResetPassword: boolean
    canRegister: boolean
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <Head title="Log in" />

            <div className="min-h-screen w-full flex">
                {/* Left Side */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-900 text-white flex-col justify-between p-12">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                    </div>

                    <NavLogin />

                    <div className="relative z-10 space-y-6">
                        <blockquote className="text-2xl font-medium">
                            "The freshness of the vegetables is amazing."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold">
                                MS
                            </div>
                            <div>
                                <div className="font-semibold">Michael Scott</div>
                                <div className="text-sm text-zinc-400">
                                    Verified Buyer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
                    <div className="w-full max-w-[450px] space-y-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Welcome back</h1>
                            <p className="text-muted-foreground">
                                Sign in to continue
                            </p>
                        </div>

                        <Form
                            {...store()}
                            resetOnSuccess={['password']}
                            className="space-y-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <Label>Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="name@example.com"
                                                className="pl-10 h-11"
                                                required
                                                autoFocus
                                            />
                                        </div>
                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <Label>Password</Label>
                                            {canResetPassword && (
                                                <TextLink
                                                    href={request()}
                                                    className="text-sm"
                                                >
                                                    Forgot password?
                                                </TextLink>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                            <Input
                                                name="password"
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                className="pl-10 pr-10 h-11"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(!showPassword)
                                                }
                                                className="absolute right-3 top-3"
                                            >
                                                {showPassword ? (
                                                    <EyeOff />
                                                ) : (
                                                    <Eye />
                                                )}
                                            </button>
                                        </div>
                                        <InputError message={errors.password} />
                                    </div>

                                    {/* Remember */}
                                    <div className="flex items-center gap-2">
                                        <Checkbox name="remember" />
                                        <Label>Remember me</Label>
                                    </div>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-emerald-600"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <Loader2 className="mr-2 animate-spin" />
                                                Signing in...
                                            </>
                                        ) : (
                                            <>
                                                Sign in
                                                <ArrowRight className="ml-2" />
                                            </>
                                        )}
                                    </Button>

                                    {canRegister && (
                                        <p className="text-center text-sm">
                                            Don’t have an account?{' '}
                                            <Link
                                                href={register()}
                                                className="text-emerald-600 font-semibold"
                                            >
                                                Sign up
                                            </Link>
                                        </p>
                                    )}
                                </>
                            )}
                        </Form>

                        {status && (
                            <p className="text-center text-sm text-green-600">
                                {status}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
