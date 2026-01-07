
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"// 
interface Review {
    id: number
    name: string
    avatar: string
    rating: number
    comment: string
}

// Professional testimonial data
const reviews: Review[] = [
    {
        id: 1,
        name: "Aarav Sharma",
        avatar: "https://i.pravatar.cc/150?img=11",
        rating: 5,
        comment: "Best pet shop in town! My puppy loves the premium food and interactive toys I bought here. The quality is top-notch.",
    },
    {
        id: 2,
        name: "Bipana Thapa",
        avatar: "https://i.pravatar.cc/150?img=32",
        rating: 5,
        comment: "Very knowledgeable staff. They helped me choose the right aquarium setup and provided great advice on fish care.",
    },
    {
        id: 3,
        name: "Chandra Bahadur",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        comment: "Excellent grooming services. My Himalayan cat looks amazing and was treated with so much patience and care.",
    },
    {
        id: 4,
        name: "Deepa Rai",
        avatar: "https://i.pravatar.cc/150?img=45",
        rating: 5,
        comment: "Wide variety of pet supplies at reasonable prices. It's my one-stop shop for everything my golden retriever needs.",
    },
    {
        id: 5,
        name: "Ishwar Gurung",
        avatar: "https://i.pravatar.cc/150?img=13",
        rating: 5,
        comment: "The staff is incredibly supportive. They guided me through the entire process of getting my first pet and provided all essentials.",
    },
    {
        id: 6,
        name: "Kamala Devi",
        avatar: "https://i.pravatar.cc/150?img=48",
        rating: 5,
        comment: "Great quality bird seeds and spacious cages. My parrots are very happy with their new environment and healthy diet.",
    },
]

export default function CustomerReviews() {
    // Duplicate reviews for seamless loop
    const duplicatedReviews = [...reviews, ...reviews]

    return (
        <section className="py-8 px-4 bg-gray-50 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 pb-2  inline-block">
                            Cutomer Reviews
                        </h2>

                    </div>
                </div>
                  <Separator className='bg-emerald-500 mb-4 mt-5' />

                {/* Marquee Container */}
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling reviews */}
                    <div
                        className="flex gap-6 animate-marquee"
                        style={{
                            animation: 'marquee 120s linear infinite',
                            width: 'max-content'
                        }}
                    >
                        {duplicatedReviews.map((review, index) => (
                            <div
                                key={`${review.id}-${index}`}
                                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all hover:shadow-md hover:-translate-y-1 w-80 flex-shrink-0 hover-pause-trigger"
                                onMouseEnter={(e) => {
                                    const marquee = e.currentTarget.closest('.animate-marquee') as HTMLElement;
                                    if (marquee) marquee.style.animationPlayState = 'paused';
                                }}
                                onMouseLeave={(e) => {
                                    const marquee = e.currentTarget.closest('.animate-marquee') as HTMLElement;
                                    if (marquee) marquee.style.animationPlayState = 'running';
                                }}
                            >
                                {/* Comment */}
                                <p className="text-gray-700 text-base leading-relaxed mb-6 font-normal">
                                    {review.comment}
                                </p>

                                {/* Author info */}
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-gray-900 font-medium text-base mb-1">
                                            {review.name}
                                        </h4>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating
                                                            ? "text-yellow-400 fill-yellow-400"
                                                            : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        
        </section>
    )
}