"use client";

import { Loading, FetchingNextPage } from "@/components/Common/Loading";
import GameCard from "@/components/Common/GameCard";
import useContainer from "./useContainer";

const Details = () => {
    const {
        ref,
        isLoading,
        isError,
        developersDetail,
        formattedData,
        isFetchingNextPage,
        isFetching,
    } = useContainer();

    if (isLoading) return <Loading />;

    return (
        <div className="default-section-padding">
            <div className="mb-5">
                <p className="heading mb-5">
                    Developed By {developersDetail?.name}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                {formattedData?.map((data) => (
                    <div key={data.id} ref={ref}>
                        <GameCard data={data} />
                    </div>
                ))}
            </div>
            {isFetchingNextPage && <FetchingNextPage />}
        </div>
    );
};

export default Details;
