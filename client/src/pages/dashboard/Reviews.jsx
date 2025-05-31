import React from 'react';

function Reviews() {
    const reviews = [
        {
            name: "Ashwini",
            tour: "Ooty",
            text: "Amazing experience! The tour was well organized and the guide was very knowledgeable.",
            rating: 4,
            image: "https://s3.india.com/wp-content/uploads/2024/07/Historical-Places-To-Visit-In-Ooty.jpg",
            //bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" // Ooty bg
        },
        {
            name: "Arul",
            tour: "Thanjavur",
            text: "Loved every moment! The beaches were stunning and the service was top-notch.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
            //bg: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" // Thanjavur bg
        },
        {
            name: "Aviraina",
            tour: "Safari Adventure",
            text: "A thrilling adventure! Saw so many animals and the accommodations were great.",
            rating: 4,
            image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
            //bg: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" // Safari bg
        }
    ];

    const [current, setCurrent] = React.useState(0);

    const nextReview = () => setCurrent((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <div className="max-w-md mx-auto py-8">
            <h4 className="text-2xl font-bold mb-6 text-center">Reviews</h4>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4 flex items-center">
                    <img
                        src={reviews[current].image}
                        alt={reviews[current].name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                        <p className="font-semibold">{reviews[current].name}</p>
                        <p className="text-sm text-gray-500">{reviews[current].tour}</p>
                    </div>
                </div>
                <p className="text-gray-700 mb-2">"{reviews[current].text}"</p>
                <div className="flex text-yellow-400 mb-4">
                    {"★".repeat(reviews[current].rating)}
                    {"☆".repeat(5 - reviews[current].rating)}
                </div>
                <div className="flex justify-between">
                    <button
                        onClick={prevReview}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Prev
                    </button>
                    <button
                        onClick={nextReview}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Reviews;