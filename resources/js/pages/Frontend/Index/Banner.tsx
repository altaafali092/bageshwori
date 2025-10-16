import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Banner = () => {
    return (

        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-white px-10 relative flex items-center justify-between h-[200px]">

                <img src="https://bageshworikennelhouse.com.np/wp-content/themes/grocefycart/assets/images/cta-banner.jpg" alt=""
                    className='absolute inset-0 left-0 w-full h-full object-cover rounded-2xl'
                />

                <div className='relative z-10 max-w-2xl'>
                    <h2 className="text-3xl font-bold mb-4">GrocefyCart's New Arrivals, Shop Fast, Limited Supply!</h2>
                    <p className="text-lg mb-8">New Fresh Vegetable at our shop with limited stocks!</p>
                </div>
                <div className='relative z-10'>
                    <Button
                        className="relative flex items-center gap-2 bg-red-500 text-white font-semibold 
             px-6 py-6 rounded-full text-sm shadow-md transition-all duration-300
             hover:bg-red-600 group"
                        size="lg"
                    >
                        <span className="transition-all duration-300 group-hover:translate-x-1">
                            Shop Now
                        </span>
                        <span
                            className="opacity-0 translate-x-[-8px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        >
                            <ArrowRightIcon className="w-5 h-5" />
                        </span>
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Banner