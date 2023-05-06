"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getGameDetails, getGameSeries } from "@/services/service.details";
import { useParams } from "next/navigation";
import { useQueries } from "react-query";

import GameCard from "@/components/GameCard";

const Page = () => {

    const { slug } = useParams();

    const router = useRouter();

    const queryResults = useQueries([
        { queryKey: "details", queryFn: () => getGameDetails(slug) },
        { queryKey: "series", queryFn: () => getGameSeries(slug)},
    ]);

    const gameDetails = queryResults[0].data;

    const gameSeries = queryResults[1].data;

    console.log(queryResults[0].data);

    console.log(gameSeries?.results);

    return (
        <div className="default-section-padding">
            <span style={{
                content: "",
                backgroundImage: `
                    linear-gradient(rgba(21, 21, 21, 0), rgb(21, 21, 21)),
                    linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),
                    url(${gameDetails?.background_image})
                `,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundColor: "transparent",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                zIndex: "-10",
                inset: "0",
                height: "500px",
                maxHeight: "100%"
            }} />
            <div>
                <p className="mb-2 text-2xl text-primary-white font-semibold">
                    {gameDetails?.name}
                </p>
                <p className="mb-2 uppercase text-primary-white text-xs font-light tracking-wider">
                    Average Playtime: {gameDetails?.playtime} hours
                </p>
                <div className="mb-2">
                    <p className="mb-2 text-primary-white text-lg tracking-wide">
                        About
                    </p>
                    <p className="text-primary-white tracking-wide text-sm font-light">
                        {gameDetails?.description_raw}
                    </p>
                </div>
                <div className="mb-3 flex flex-wrap">
                    <div className="mb-2 w-[50%]">
                        <p className="text-primary-white text-lg tracking-wide">
                            Rating     
                        </p>
                        {gameDetails?.rating && gameDetails?.rating_top && (
                            <p className="text-primary-white tracking-wide text-[14px] font-light">
                                {gameDetails.rating} / {gameDetails.rating_top}
                            </p>
                        )}
                    </div>
                    {gameDetails?.metacritic && (
                        <div className="mb-2 w-[50%]">
                            <p className="text-primary-white text-lg tracking-wide">
                                Metacritic     
                            </p>
                            <p className="rounded w-8 text-center text-sm text-primary-yellow border border-primary-bg-yellow">
                                {gameDetails.metacritic}
                            </p>
                        </div>
                    )}
                    {gameDetails?.released && (
                        <div className="mb-2 w-[50%]">
                            <p className="text-primary-white text-lg tracking-wide">
                                Released Date     
                            </p>
                            <p className="text-primary-white tracking-wide text-[14px] font-light">
                                {new Date(gameDetails.released).toLocaleDateString("en-us", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                    )}
                    {gameDetails?.updated && (
                        <div className="mb-2 w-[50%]">
                            <p className="text-primary-white text-lg tracking-wide">
                                Updated Date     
                            </p>
                            <p className="text-primary-white tracking-wide text-[14px] font-light">
                                {new Date(gameDetails.updated).toLocaleDateString("en-us", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                    )}
                    <div className="w-[50%]">
                        <p className="text-primary-white text-lg tracking-wide">
                            Developer     
                        </p>
                        {gameDetails?.developers.map(developer => (
                            <p key={developer.id} className="text-primary-white tracking-wide text-[14px] font-light">
                                {developer.name}
                            </p>
                        ))}
                    </div>
                    <div className="w-[50%]">
                        <p className="text-primary-white text-lg tracking-wide">
                            Publisher     
                        </p>
                        {gameDetails?.publishers.map(publisher => (
                            <p key={publisher.id} className="text-primary-white tracking-wide text-[14px] font-light">
                                {publisher.name}
                            </p>
                        ))}
                    </div>
                </div>
                {gameDetails?.website && (
                    <div className="mb-3">
                        <p className="text-primary-white text-lg tracking-wide">
                            Website
                        </p>
                        <Link href={gameDetails.website} target="__blank">
                            <p className="text-primary-white tracking-wide text-[14px] font-light underline">
                                {gameDetails.website}
                            </p>
                        </Link>
                    </div>
                )}
                <div className="mb-3">
                    <p className="text-primary-white text-lg tracking-wide">
                        Genres
                    </p>
                    <div className="flex flex-wrap gap-x-1 break-words">
                        {gameDetails?.genres.map(genre => (
                            <p key={genre.id} className="text-primary-white underline tracking-wide text-[14px] font-light">
                                {genre.name}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="mb-3">
                    <p className="text-primary-white text-lg tracking-wide">
                        Platforms
                    </p>
                    <div className="flex flex-wrap gap-x-1 break-words">
                        {gameDetails?.platforms.map(platform => (
                            <p key={platform.platform.id} className="text-primary-white underline tracking-wide text-[14px] font-light">
                                {platform.platform.name}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="mb-3">
                    <p className="text-primary-white text-lg tracking-wide">
                        Tags
                    </p>
                    <div className="flex flex-wrap gap-x-1 break-words">
                        {gameDetails?.tags.map(tag => (
                            <p key={tag.id} className="text-primary-white underline tracking-wide text-[14px] font-light">
                                {tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            {gameSeries?.results.length > 0 && (
                <div>
                    <p className="text-lg text-primary-white mb-3">
                        Other games in the series
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                        {gameSeries?.results.map(series => (
                            <div key={series.id} onClick={() => router.push(`games/${series.slug}`)}>
                                <GameCard data={series} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;