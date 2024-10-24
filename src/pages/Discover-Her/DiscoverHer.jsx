import React, { useState, useEffect } from "react";
import Navbar from "../../components/home/navbar";
import Footer from "../../components/home/footer";
import axios from "axios";
import { formatDateForArticles } from "../../Helper-Functions/date-formatters";
import { useNavigate } from "react-router-dom";

const DiscoverHer = () => {
  const navigate = useNavigate();
  const [staticPages, setStaticPages] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [vedios, setVedios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [articlesCurrent, setArticlesCurrent] = useState(0);
  const articleCardCount = trendingArticles.length;
  const articleProgressWidth = (articlesCurrent + 1) * (100 / articleCardCount);

  const [videosCurrent, setVideosCurrent] = useState(0);
  const videoCardCount = vedios.length;
  const videoProgressWidth = (videosCurrent + 1) * (100 / videoCardCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/combined_api_data_for_pages/discover-her"
        );
        const data = response.data;
        setStaticPages(data.staticPages || []);
        setTrendingArticles(data.trendingArticles || []);
        setVedios(data.trendingVideos || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const prevArticleSlide = () => {
    setArticlesCurrent(articlesCurrent === 0 ? articleCardCount - 1 : articlesCurrent - 1);
  };

  const nextArticleSlide = () => {
    setArticlesCurrent(articlesCurrent === articleCardCount - 1 ? 0 : articlesCurrent + 1);
  };

  const prevVideoSlide = () => {
    setVideosCurrent(videosCurrent === 0 ? videoCardCount - 1 : videosCurrent - 1);
  };

  const nextVideoSlide = () => {
    setVideosCurrent(videosCurrent === videoCardCount - 1 ? 0 : videosCurrent + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      <section className="w-full max-w-7xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[690px] relative mx-auto overflow-hidden mb-8">
        {staticPages.length > 0 && (
          <>
            <div className="w-full h-full">
              <img
                src={staticPages[0].image}
                alt={staticPages[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-[#7A89C2] font-cabin font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                {staticPages[0].title}
              </h1>
              {staticPages[0].description && (
                <p className="text-[#7A89C2] font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
                  {staticPages[0].description}
                </p>
              )}
              {staticPages[0].button_text && staticPages[0].button_link && (
                <a
                  href={staticPages[0].button_link}
                  className="mt-6 w-64 sm:w-72 lg:w-80 h-14 bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] border border-[#7A89C2] rounded-2xl text-white flex items-center justify-center px-6 py-2 hover:opacity-90 transition-opacity duration-300 hover:bg-gray-100 hover:from-gray-100 hover:to-gray-100 hover:text-[#7A89C2] transition-all duration-300"
                >
                  {staticPages[0].button_text}
                </a>
              )}
            </div>
          </>
        )}
      </section>

      {/* Trending Articles Section */}
      <section className="py-5 px-5 sm:px-10 md:px-20 lg:px-40 w-full h-auto mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-left text-[#7A89C2] font-cabin font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-0">
            Articles
          </h2>
          <button className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white font-medium rounded-xl py-2 px-8 sm:px-12 border border-[#7A89C2] hover:bg-gray-100 hover:from-gray-100 hover:to-gray-100 hover:text-[#7A89C2] transition-all duration-300">
            View All
          </button>
        </div>

        <div className=" relative">
          {trendingArticles.length === 0 ? (
            <p className="text-center text-gray-500">No articles yet.</p>
          ) : (
            <>
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${articlesCurrent * (100 / articleCardCount)}%)`,
                }}
              >
            {trendingArticles.map((article, index) => (
  <div
    key={index}
    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 mb-4 group cursor-pointer"
    onClick={() => navigate("/discover-her-article-card-page", { state: { article } })}
  >
<div className="bg-[#EADFE280] rounded-[10px] shadow-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-110 group-hover:translate-y-[-10px] relative h-[400px]">
  <div className="relative h-[179px]">
    <img
      src={article.header_file}
      alt="Article"
      className="w-full h-full object-cover rounded-t-lg group-hover:rounded-t-lg"
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

      {/* Video Section */}
      <section className="py-5 px-5 sm:px-10 md:px-20 lg:px-40 w-full h-auto mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-left text-[#7A89C2] font-cabin font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-0">
            Videos
          </h2>
          <button className="bg-gradient-to-r from-[#3F3F3F] to-[#7A89C2] text-white font-medium rounded-xl py-2 px-8 sm:px-12 border border-[#7A89C2] hover:bg-gray-100 hover:from-gray-100 hover:to-gray-100 hover:text-[#7A89C2] transition-all duration-300">
            View All
          </button>
        </div>

        <div className=" relative">
          {vedios.length === 0 ? (
            <p className="text-center text-gray-500">No Video yet.</p>
          ) : (
            <>
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${videosCurrent * (100 / videoCardCount)}%)`,
                }}
              >
                {vedios.map((video, index) => (
                  <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 mb-4 group">
                    <div className="bg-[#EADFE280] rounded-[10px] shadow-lg overflow-hidden transition-transform duration-300 relative h-[350px]">
                      <div className="relative h-[179px]">
                        <video
                          controls
                          className="w-full h-full object-cover rounded-t-lg"
                        >
                          <source src={video.header_file} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-4">
                        <h3 className="text-[#7A89C2] font-inter text-[15px] sm:text-[16px] md:text-[18px] font-semibold leading-tight mb-2">
                          {video.title}
                        </h3>
                        <p className="text-black font-inter text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-2">
                          {formatDateForArticles(video.date)}
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
                  style={{ width: `${videoProgressWidth}%`, transition: "width 0.5s ease" }}
                ></div>
              </div>

              <div className="flex justify-between mt-4">
                <button onClick={prevVideoSlide} className="text-[#7A89C2] hover:underline">
                  Previous
                </button>
                <button onClick={nextVideoSlide} className="text-[#7A89C2] hover:underline">
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

export default DiscoverHer;
