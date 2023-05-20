"use client";

import GameCard from "@/components/Common/GameCard";
import { Loading, FetchingNextPage } from "@/components/Common/Loading";
import useContainer from "./useContainer";

const Games = () => {
    const {
        router,
        ref,
        isLoading,
        isError,
        isFetchingNextPage,
        formattedData,
        Games,
    } = useContainer();

    if (isLoading) return <Loading />;

    return (
        <div className="default-section-padding">
            <p className="heading mb-3">All Games</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                {formattedData?.map((data) => (
                    <GameCard key={data.id} data={data} />
                ))}
            </div>

            <div ref={ref}>{isFetchingNextPage && <FetchingNextPage />}</div>
        </div>
    );
};

export default Games;
