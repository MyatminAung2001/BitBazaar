"use client"

import { UserIcon } from "@/components/Common/icons/UserIcon";
import { FetchingNextPage, Loading } from "@/components/Common/Loading";
import CreatorCard from "@/components/Common/CreatorCard";
import useContainer from "./useContainer";

const Creators = () => {

    const {
        router,
        ref,
        isLoading,
        isError,
        isFetchingNextPage,
        formattedData
    } = useContainer();

    if (isLoading) return <Loading />

    return (
        <div className="default-section-padding w-[100%]">
            <div className="flex items-center justify-center lg:justify-start gap-x-2 mb-5">
                <div className="lg:hidden">
                    <UserIcon />
                </div>
                <header className="heading">Creators</header>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                {formattedData?.map((data) => (
                    <div
                        key={data.id}
                        ref={ref}
                        onClick={() => router.push(`creators/${data.id}`)}
                    >
                        <CreatorCard data={data} />
                    </div>
                ))}
            </div>
            {isFetchingNextPage && <FetchingNextPage />}
        </div>
    );
}

export default Creators;