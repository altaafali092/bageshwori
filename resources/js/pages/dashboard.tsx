import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes/admin';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    FileText,
    Layers,
    Package,
    Presentation,
    TrendingUp,
    Users,
    DollarSign,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    ShoppingCart
} from 'lucide-react';
import { ReactNode, useMemo } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Stat {
    label: string;
    value: number | string;
    icon: string;
    change: string;
    trend: 'up' | 'down';
    color: string;
}

interface Activity {
    id: string | number;
    user: string;
    action: string;
    time: string;
    amount?: string | null;
    type?: 'contact' | 'product';
}

interface ChartItem {
    name: string;
    value: number;
}

interface ProductSales {
    name: string;
    sales: number;
}

interface DashboardProps {
    stats?: Stat[];
    categoryData?: ChartItem[];
    topProducts?: ProductSales[];
    recentActivity?: Activity[];
}

const ICON_MAP: Record<string, ReactNode> = {
    DollarSign: <DollarSign className="h-5 w-5" />,
    Package: <Package className="h-5 w-5" />,
    Layers: <Layers className="h-5 w-5" />,
    Users: <Users className="h-5 w-5" />,
    FileText: <FileText className="h-5 w-5" />,
    Presentation: <Presentation className="h-5 w-5" />,
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const chartData = [
    { name: 'Jan', revenue: 4000, orders: 240 },
    { name: 'Feb', revenue: 3000, orders: 198 },
    { name: 'Mar', revenue: 2000, orders: 980 },
    { name: 'Apr', revenue: 2780, orders: 390 },
    { name: 'May', revenue: 1890, orders: 480 },
    { name: 'Jun', revenue: 2390, orders: 380 },
    { name: 'Jul', revenue: 3490, orders: 430 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'];

export default function Dashboard({ stats, categoryData, topProducts, recentActivity }: DashboardProps) {
    const defaultStats: Stat[] = useMemo(() => stats || [
        {
            label: 'Total Revenue',
            value: '$45,231',
            icon: 'DollarSign',
            change: '+20.1%',
            trend: 'up',
            color: 'text-blue-500 bg-blue-500/10'
        },
        {
            label: 'Products',
            value: '45',
            icon: 'Package',
            change: '+12.5%',
            trend: 'up',
            color: 'text-purple-500 bg-purple-500/10'
        },
        {
            label: 'Categories',
            value: '54',
            icon: 'Layers',
            change: '+4.3%',
            trend: 'up',
            color: 'text-orange-500 bg-orange-500/10'
        },
        {
            label: 'Active Users',
            value: '2,350',
            icon: 'Users',
            change: '-2.4%',
            trend: 'down',
            color: 'text-green-500 bg-green-500/10'
        },
    ], [stats]);

    const displayCategoryData = categoryData || [
        { name: 'Electronics', value: 400 },
        { name: 'Fashion', value: 300 },
        { name: 'Home', value: 300 },
        { name: 'Books', value: 200 },
    ];

    const displayTopProducts = topProducts || [
        { name: 'iPhone 15', sales: 400 },
        { name: 'MacBook Air', sales: 300 },
        { name: 'AirPods Pro', sales: 200 },
        { name: 'Apple Watch', sales: 150 },
        { name: 'iPad Pro', sales: 100 },
    ];

    const displayRecentActivity = recentActivity || [
        { id: 1, user: 'John Doe', action: 'Purchased iPhone 15', time: '2 mins ago', amount: '$999' },
        { id: 2, user: 'Alice Smith', action: 'New account created', time: '15 mins ago', amount: null },
        { id: 3, user: 'Bob Wilson', action: 'Left a review on MacBook', time: '1 hour ago', amount: null },
        { id: 4, user: 'Sarah Connor', action: 'Purchased AirPods Pro', time: '3 hours ago', amount: '$249' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-8 p-6 lg:p-8 animate-in fade-in duration-500">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back! Here's what's happening with your store today.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Clock className="mr-2 h-4 w-4" />
                            Last 30 Days
                        </Button>
                        <Button size="sm">Download Report</Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {defaultStats.map((stat) => (
                        <Card key={stat.label} className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg dark:bg-card/50">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className={`rounded-xl p-2.5 ${stat.color}`}>
                                        {ICON_MAP[stat.icon] || <Package className="h-5 w-5" />}
                                    </div>
                                    <Badge variant={stat.trend === 'up' ? 'default' : 'destructive'} className="font-bold">
                                        {stat.trend === 'up' ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                                        {stat.change}
                                    </Badge>
                                </div>
                                <div className="mt-4 space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                    <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
                    {/* Revenue Chart */}
                    <Card className="lg:col-span-4 border-none shadow-md dark:bg-card/50">
                        <CardHeader>
                            <CardTitle>Revenue Overview</CardTitle>
                            <CardDescription>Monthly revenue growth and order volume.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[350px] pl-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.1} />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 12 }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 12 }}
                                        tickFormatter={(value) => `$${value}`}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'hsl(var(--card))',
                                            borderColor: 'hsl(var(--border))',
                                            borderRadius: '8px',
                                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#3b82f6"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorRevenue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Sales by Category */}
                    <Card className="lg:col-span-3 border-none shadow-md dark:bg-card/50">
                        <CardHeader>
                            <CardTitle>Sales by Category</CardTitle>
                            <CardDescription>Distribution of sales across main categories.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex h-[350px] items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={displayCategoryData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {displayCategoryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="flex flex-col gap-2 ml-4">
                                {displayCategoryData.map((item, index) => (
                                    <div key={item.name} className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                        <span className="text-xs font-medium">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Top Products */}
                    <Card className="border-none shadow-md dark:bg-card/50">
                        <CardHeader>
                            <CardTitle>Top Products</CardTitle>
                            <CardDescription>Best performing products by sales volume.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={displayTopProducts}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.1} />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 12 }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 12 }}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{
                                            backgroundColor: 'hsl(var(--card))',
                                            borderColor: 'hsl(var(--border))',
                                            borderRadius: '8px'
                                        }}
                                    />
                                    <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="border-none shadow-md dark:bg-card/50">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>Latest actions from your customers.</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {displayRecentActivity.map((activity) => (
                                    <div key={activity.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                                {activity.type === 'contact' ? <FileText className="h-5 w-5 text-blue-500" /> : <Package className="h-5 w-5 text-purple-500" />}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold">{activity.user}</p>
                                                <p className="text-xs text-muted-foreground">{activity.action}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            {activity.amount && <p className="text-sm font-bold">{activity.amount}</p>}
                                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions / Tips */}
                    <Card className="lg:col-span-2 border-none shadow-md bg-primary text-primary-foreground overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <TrendingUp className="h-48 w-48" />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">Growth Insights</CardTitle>
                            <CardDescription className="text-primary-foreground/80">Personalized tips to boost your sales.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 relative z-10">
                            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                                <h4 className="font-bold flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4" />
                                    Optimize Product Images
                                </h4>
                                <p className="text-sm opacity-90 mt-1">Products with high-quality images see a 30% higher conversion rate.</p>
                            </div>
                            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                                <h4 className="font-bold flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    Engage with New Users
                                </h4>
                                <p className="text-sm opacity-90 mt-1">Sending a welcome email can increase customer retention by 15%.</p>
                            </div>
                            <Button variant="secondary" className="w-full mt-4 font-bold">
                                Explore All Insights
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
