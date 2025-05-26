import React, { useState, useEffect } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import Trending from "./templates/Trending";
import TestSeries from "./templates/TestSeries";
import Search from "./templates/Search";
import { fetchTests } from "../services/apiService.jsx";

const Test = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTests = async () => {
      setLoading(true);
      try {
        const response = await fetchTests(1, 10);
        setTests(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch tests");
      } finally {
        setLoading(false);
      }
    };

    loadTests();
  }, []);

  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <TopNav />
        <div className="mx-[12.5%] mb-10">
          <Search />
        </div>
        <Header title="Tests" />
        <Trending
          title="Get upto 50% discount with our scholarship test"
          description="The subscription unlocks high quality lecture videos for the entire syllabus for all the subjects"
          path="/testinfo"
        />
        {loading ? (
          <div className="text-center">Loading tests...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <TestSeries tests={tests} />
        )}
      </div>
    </>
  );
};

export default Test;
