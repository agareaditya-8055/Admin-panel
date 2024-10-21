import { useState } from "react";
import ReviewCard from "../../components/review/ReviewCard";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
  BiBell,
  BiHelpCircle,
  BiStar,
  BiUser,
} from "react-icons/bi";

const ReviewSection = () => {
 
  const [showAllReviews, setShowAllReviews] = useState(false);
  const reviews = [
    {
      id: 1,
      name: "Towhidur Rahman",
      totalSpend: 200,
      totalReviews: 14,
      rating: 4,
      date: "24-10-2022",
      comment:
        "My first and only mala ordered on Etsy, and I'm beyond delighted! I requested a custom mala based on two stones I was called to invite together in this kind of creation. The fun and genuine joy I invite together in this kind of creation.",
    },
    {
      id: 2,
      name: "Towhidur Rahman",
      totalSpend: 200,
      totalReviews: 14,
      rating: 3,
      date: "24-10-2022",
      comment:
        "My first and only mala ordered on Etsy, and I'm beyond delighted! I requested a custom mala based on two stones I was called to invite together in this kind of creation. The fun and genuine joy I invite together in this kind of creation.",
    },
    {
      id: 3,
      name: "Sarah Khan",
      totalSpend: 500,
      totalReviews: 30,
      rating: 5,
      date: "15-09-2022",
      comment:
        "Absolutely love the product! It exceeded all my expectations. The craftsmanship and attention to detail are impeccable. Highly recommended to anyone looking for high-quality handmade items!",
    },
    {
      id: 4,
      name: "John Doe",
      totalSpend: 120,
      totalReviews: 10,
      rating: 2,
      date: "10-08-2022",
      comment:
        "The product was okay, but I had expected more based on the description. Shipping was delayed, and the customer service wasn't very responsive.",
    },
    {
      id: 5,
      name: "Emily Davis",
      totalSpend: 350,
      totalReviews: 25,
      rating: 4,
      date: "01-07-2022",
      comment:
        "The item is very well-made and arrived in great condition. The only downside was the delay in shipping, but overall a very good experience.",
    },
    {
      id: 6,
      name: "Michael Brown",
      totalSpend: 150,
      totalReviews: 8,
      rating: 5,
      date: "22-06-2022",
      comment:
        "Excellent service and top-notch quality. I'll definitely be ordering again. The seller was extremely helpful and communicative throughout the process.",
    },
    {
      id: 7,
      name: "Anna Taylor",
      totalSpend: 400,
      totalReviews: 18,
      rating: 3,
      date: "30-05-2022",
      comment:
        "The product is decent, but there was a bit of a miscommunication about the size. Other than that, it works fine for my needs.",
    },
    {
      id: 8,
      name: "David Johnson",
      totalSpend: 600,
      totalReviews: 40,
      rating: 5,
      date: "15-05-2022",
      comment:
        "This is by far the best product I've purchased online. Everything about it screams quality. I would highly recommend this seller to everyone!",
    },
    {
      id: 9,
      name: "Linda White",
      totalSpend: 220,
      totalReviews: 12,
      rating: 4,
      date: "10-04-2022",
      comment:
        "The item met my expectations, but I feel like the price could have been slightly lower. Otherwise, great experience.",
    },
    {
      id: 10,
      name: "James Wilson",
      totalSpend: 180,
      totalReviews: 9,
      rating: 3,
      date: "05-03-2022",
      comment:
        "Decent quality product, but the packaging was a bit damaged when it arrived. The item itself was fine, but I expected better handling.",
    },
  ];
  // Function to toggle the state
  const handleViewAll = () => {
    setShowAllReviews(!showAllReviews);
  };

  // Determine the reviews to display based on the state
  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <div className="mt-8">
      <div className="bg-white border rounded-md p-6">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-semibold text-gray-600 mb-2">
              Reviews
            </h1>
            <div className="flex items-center space-x-4">
              <BiBell className="w-6 h-6 text-gray-500" />
              <BiHelpCircle className="w-6 h-6 text-gray-500" />
            </div>
          </div>

          {/* Review Summary */}
          <div className="bg-white px-6 py-3 rounded-lg border">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gray-700 text-xl font-semibold">10.0k</h2>
                <p className="text-sm font-medium text-gray-500">
                  Total Reviews
                </p>
                <p className="text-xs font-medium text-green-500">21% ↑</p>
              </div>
              <div>
                <h2 className="text-gray-700 text-xl font-semibold">4.0</h2>
                <p className="text-sm font-medium text-gray-500">
                  Average Rating
                </p>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <BiStar
                      key={star}
                      className="w-4 h-4 text-red-600 fill-current"
                    />
                  ))}
                  <BiStar className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <span className="w-3 text-xs text-gray-500">{rating}</span>
                    <div className="w-32 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600"
                        style={{ width: `${(6 - rating) * 20}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {rating === 5
                        ? "2.0k"
                        : rating === 4
                        ? "1.0k"
                        : rating === 3
                        ? "500"
                        : rating === 2
                        ? "200"
                        : "0k"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="mt-8 space-y-6">
            {visibleReviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-md border">
                <div className="flex items-start space-x-4">
                  <div className="text-lg text-gray-700 border border-gray-700 rounded-full p-1">
                    <BiUser />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-gray-700 text-sm font-semibold">
                      {review.name}
                    </h3>
                    <p className="text-xs font-medium text-gray-600">
                      <span className="font-semibold">Total Spend:</span>{" "}
                      {review.totalSpend}
                    </p>
                    <p className="text-xs font-medium text-gray-600">
                      <span className="font-semibold">Total Review:</span>{" "}
                      {review.totalReviews}
                    </p>
                    <div className="flex mt-1 mb-2">
                      {[...Array(review.rating)].map((_, index) => (
                        <BiStar
                          key={index}
                          className="w-4 h-4 text-red-600 fill-current"
                        />
                      ))}
                      {[...Array(5 - review.rating)].map((_, index) => (
                        <BiStar key={index} className="w-4 h-4 text-gray-300" />
                      ))}
                      <span className="ml-2 text-xs font-medium text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-gray-700 text-xs font-medium">
                      {review.comment}
                    </p>
                    <div className="mt-4 flex space-x-2">
                      <button className="px-3 py-1 border text-[11px] font-medium bg-gray-100 text-gray-700 rounded-full">
                        Public Comment
                      </button>
                      <button className="px-3 py-1 border text-[11px] font-medium bg-gray-100 text-gray-700 rounded-full">
                        Reply
                      </button>
                      <button className="p-2 text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className=" flex justify-center">
              {" "}
              <button
                onClick={handleViewAll}
                className="flex gap-1 hover:border-gray-700 items-center px-3 py-1 text-xs border-2 border-gray-500 font-medium text-gray-700 rounded-full"
              >
                {showAllReviews ? "Show Less" : "View All "}
                <div className="font-medium">
                  {showAllReviews ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewSection;