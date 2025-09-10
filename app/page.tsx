"use client";

import { useEffect, useState, useCallback } from "react";
import { DataItem } from "@/types";
import Card from "@/components/Card";
import RowCard from "@/components/RowCard";
import SearchInput from "@/components/SearchInput";
import FilterBar from "@/components/FilterBar";
import Pagination from "@/components/Pagination";
import ViewToggle from "@/components/ViewToggle";

export default function HomePage() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [view, setView] = useState<"card" | "row">("card");

  const LIMIT = 20;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/data?page=${page}&limit=${LIMIT}&search=${search}&category=${categoryFilter}`
      );
      const result = await res.json();
      if (result.success) {
        setData(result.data);
        setTotalPages(Math.ceil(result.total / LIMIT));
      } else {
        setError("Failed to fetch data");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [page, search, categoryFilter]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
          Explore Patients
        </h1>

        {/* Search, Filter & View Toggle */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10 bg-white border border-gray-200 rounded-xl p-4 shadow-sm transition-shadow duration-300 hover:shadow-md justify-between">
          <div className="flex flex-1 gap-4 text-gray-700">
            <SearchInput placeholder="Search Here" value={search} onChange={setSearch} />
            <FilterBar value={categoryFilter} onChange={setCategoryFilter} />
          </div>

          <ViewToggle view={view} onChange={setView} />
        </div>

        {/* Data Grid / Row */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-60 bg-gray-200 rounded-xl border border-gray-200 shadow-sm animate-pulse transition-shadow duration-300 hover:shadow-md"
              />
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-red-500 font-semibold text-lg bg-red-100 p-4 rounded-lg">
            {error}
          </p>
        ) : view === "card" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <Card key={item.patient_id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {data.map((item) => (
              <RowCard key={item.patient_id} item={item} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </div>
    </div>
  );
}
