"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useInfiniteQuery, useQuery } from "react-query";

import { getGenresDetails, getGenresGames } from "@/services/services.genres";

const GenreDetails = () => {

    const { slug } = useParams();

    const { isLoading, isError, data: genreDetails } = useQuery(["genres-detail", slug], () => getGenresDetails(slug));

    const [page, setPage] = useState(1);

    const { data: genresGames, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ["genres-games", slug],
        ({ pageParam = 1 }) => getGenresGames(slug, pageParam),
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.length === 0) {
                  return undefined;
                }
                return page + 1;
              },
        }
    );

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                if (hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                    setPage(page + 1)
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasNextPage, isFetchingNextPage, fetchNextPage, page])

    const gamesData = genresGames?.pages.flatMap(page => page);

    const formatted = gamesData?.map(d => d.results)

    const realData = gamesData
        ? [].concat(...formatted)
        : [];

    // content
    // remove p tag from a string
    const myString = genreDetails?.description;
    const description = myString?.replace(/<p>|<\/p>/gi, '');

    // control read more state
    const [showFullContent, setShowFullContent] = useState(false);

    const cutOff = 165;

    const displayContent = description?.length <= cutOff || showFullContent 
        ? description 
        : `${description?.substring(0, cutOff)}`;

    return (
        <div className="default-section-padding">
            <div>
                <p className="heading mb-5">
                    {genreDetails?.name} Games
                </p>
                <p className="text-primary-white text-[16px] font-light">
                    {displayContent}... {" "}
                    {!showFullContent && description?.length > cutOff && (
                        <button 
                            onClick={() => setShowFullContent(true)}
                            className="text-[12px] bg-primary-bg-white text-primary-bg-black px-2 rounded"
                        >
                            read more
                        </button>
                    )}
                </p>
            </div>
            <div>
                {realData?.map((data) => (
                    <div key={data.id}>
                        <Image 
                            src={data.background_image}
                            alt="name"
                            width={500}
                            height={500}
                        />
                        <p className="text-primary-white">
                            {data.name}
                        </p>
                    </div>
                ))}
                {isFetchingNextPage && <p className="text-primary-white">Fetching more posts...</p>}
            </div>
        </div>
    );
}

export default GenreDetails;