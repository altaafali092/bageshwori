import React, { useState } from 'react';
import { Form, Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Loader2, CheckCircle2, ArrowLeft, Home } from 'lucide-react';
import { home, login } from '@/routes';
import NavLogin from './NavLogin';
import { store } from '@/routes/register';
import InputError from '@/components/input-error';




const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };
    const handleCancel = () => window.history.back()

    return (
        <div>
            <Head title="Register" />
            <div className="min-h-screen w-full flex">
                {/* Left Side - Visual & Branding */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-900 text-white flex-col justify-between p-12 overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974"
                            alt="Organic Lifestyle"
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                    </div>

                    <NavLogin />

                    <div className="relative z-10 space-y-6">
                        <blockquote className="text-2xl font-medium leading-relaxed">
                            "Joining this community was the best decision for my family's health. The quality of organic products is unmatched."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/30">
                                JD
                            </div>
                            <div>
                                <div className="font-semibold">Jane Doe</div>
                                <div className="text-sm text-zinc-400">Happy Customer</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-background">
                    <div className="w-full max-w-[450px] space-y-8">
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
                            <p className="text-muted-foreground">
                                Enter your details below to create your account
                            </p>
                        </div>


                        <Form
                            {...store()}
                            resetOnSuccess={['password', 'password_confirmation']}
                            disableWhileProcessing
                            className="flex flex-col gap-6 space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <div className="relative group">
                                        <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-emerald-600 transition-colors" />
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            className="pl-10 h-11 bg-muted/30 border-muted-foreground/20 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                                            name="name"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                        />
                                    </div>
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative group">
                                        <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-emerald-600 transition-colors" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            className="pl-10 h-11 bg-muted/30 border-muted-foreground/20 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                                            required
                                            tabIndex={2}
                                            name="email"
                                        />
                                    </div>
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <div className="relative group">
                                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-emerald-600 transition-colors" />
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                className="pl-10 pr-10 h-11 bg-muted/30 border-muted-foreground/20 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                                                required
                                                tabIndex={3}
                                                autoComplete="new-password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password_confirmation">Confirm</Label>
                                        <div className="relative group">
                                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-emerald-600 transition-colors" />
                                            <Input
                                                id="password_confirmation"
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="pl-10 pr-10 h-11 bg-muted/30 border-muted-foreground/20 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                                                required
                                                tabIndex={4}
                                                autoComplete="new-password"
                                                name="password_confirmation"
                                                placeholder="Confirm password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="text-sm text-muted-foreground space-y-2">
                                    <p className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                        At least 8 characters
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                        One uppercase letter
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-emerald-100 rounded-xl"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Creating account...
                                        </>
                                    ) : (
                                        <>
                                            Create Account
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </Button>
                            </div>



                            <p className="text-center text-sm text-muted-foreground">
                                Already have an account?{' '}
                                <Link
                                    href={login()}
                                    className="font-semibold text-emerald-600 hover:text-emerald-500 hover:underline transition-all"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;