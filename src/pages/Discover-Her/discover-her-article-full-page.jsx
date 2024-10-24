import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/home/navbar";
import Footer from "../../components/home/footer";
import { formatDateForArticles } from "../../Helper-Functions/date-formatters";
import axios from "axios";

const ArticleDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [articlesCurrent, setArticlesCurrent] = useState(0);
  const articleCardCount = allArticles.length;
  const articleProgressWidth = (articlesCurrent + 1) * (100 / articleCardCount);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/combined_api_data_for_pages/discover-her"
        );
        const data = response.data;
        setAllArticles(data.trendingArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false); // Stop loading after data is fetched
      }
    };

    fetchArticles();
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">No article data available.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  const prevArticleSlide = () => {
    setArticlesCurrent(articlesCurrent === 0 ? articleCardCount - 1 : articlesCurrent - 1);
  };

  const nextArticleSlide = () => {
    setArticlesCurrent(articlesCurrent === articleCardCount - 1 ? 0 : articlesCurrent + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      <section className="w-full max-w-5xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-[#7A89C2] mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-4">{formatDateForArticles(article.date)}</p>
        <div className="mb-6">
          <img
            src={article.header_file}
            alt={article.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="text-lg text-black"><span className="text-lg text-[#7A89C2]">Description</span>{article.description}</div>

        {/* Responsive Images Section */}
        <div className="my-6 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-4">
          <img
            src={article.header_file}
            alt={article.title}
            className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
          />
          <img
            src={article.header_file}
            alt={article.title}
            className="w-full sm:w-1/2 h-auto object-cover rounded-lg"
          />
        </div>

        <div className="text-lg text-black mt-6"><span className="text-lg text-[#7A89C2]">Description</span> {article.description}</div>

       
      </section>

      {/* Trending Articles Section */}
      <section className="py-5 px-5 sm:px-10 md:px-20 lg:px-40 w-full h-auto mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-left text-[#7A89C2] font-cabin font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-0">
            Other Articles
          </h2>
          <button className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white font-medium rounded-xl py-2 px-8 sm:px-12 border border-[#7A89C2] hover:bg-gray-100 hover:from-gray-100 hover:to-gray-100 hover:text-[#7A89C2] transition-all duration-300">
            View All
          </button>
        </div>

        <div className="overflow-hidden relative">
          {allArticles.length === 0 ? (
            <p className="text-center text-gray-500">No articles yet.</p>
          ) : (
            <>
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${articlesCurrent * (100 / articleCardCount)}%)`,
                }}
              >
                {allArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 mb-4 group cursor-pointer"
                    onClick={() =>
                      navigate("/discover-her-article-card-page", { state: { article } })
                    }
                  >
                    <div className="bg-[#EADFE280] rounded-[10px] shadow-lg overflow-hidden transition-transform duration-500  relative h-[400px]">
                      <div className="relative h-[179px]">
                        <img
                          src={article.header_file}
                          alt="Article"
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-[#7A89C2] font-inter text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight mb-2">
                          {article.title}
                        </h3>
                        <p className="text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-2">
                          {formatDateForArticles(article.date)}
                        </p>
                        <p className="text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-snug">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-4 h-2">
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#00000099] opacity-30"></div>
                <div
                  className="absolute top-0 left-0 h-full bg-[#7A89C2] rounded-full"
                  style={{ width: `${articleProgressWidth}%`, transition: "width 0.5s ease" }}
                ></div>
              </div>

              <div className="flex justify-between mt-4">
                <button onClick={prevArticleSlide} className="text-[#7A89C2] hover:underline">
                  Previous
                </button>
                <button onClick={nextArticleSlide} className="text-[#7A89C2] hover:underline">
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleDetails;
