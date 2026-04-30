"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("q") || "");

    const handleSearch = (e) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        params.set("q", search);

        router.push(`/allTiles?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSearch} className="mb-6 mx-2 flex gap-2">
            <input
                type="text"
                placeholder="Search tiles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered w-full border-success"></input>
            <button className="btn ">Search</button>
        </form>
    );
};

export default SearchBox;