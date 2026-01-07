
import { Button } from '@/components/ui/button'
import { productDetail } from '@/routes'
import { SharedData } from '@/types'
import { Link, usePage } from '@inertiajs/react'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Banner = () => {
    const { officeSettings } = usePage<SharedData>().props;
    return (

        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-white px-6 md:px-10 relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[300px] md:h-[200px] py-10 md:py-0 text-center md:text-left overflow-hidden rounded-2xl">

                <img src={officeSettings?.office_banner_two} alt={officeSettings?.office_name}
                    className='absolute inset-0 w-full h-full object-cover'
                />

                {/* Overlay for better text readability on mobile */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/20" />

                <div className='relative z-10 max-w-2xl'>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{officeSettings?.office_name}'s New Arrivals, Shop Fast, Limited Supply!</h2>
                    <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">New Fresh Products at our shop with limited stocks!</p>
                </div>
                <div className='relative z-10'>
                    <Button
                        className="relative flex items-center gap-2 bg-red-500 text-white font-semibold 
             px-8 py-6 rounded-full text-sm shadow-md transition-all duration-300
             hover:bg-red-600 group"
                        size="lg"
                    >
                        <span className="transition-all duration-300 group-hover:translate-x-1">
                            <Link href="">
                                Show Now
                            </Link>
                        </span>
                        <span
                            className="opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        >
                            <ArrowRightIcon className="w-5 h-5" />
                        </span>
                    </Button>

                </div>
            </div>
        </div >
    )
}

export default Banner