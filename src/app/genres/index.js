"use client";

import { GenreIcon } from "@/components/Common/icons/GenreIcon";
import { Loading } from "@/components/Common/Loading";
import Card from "@/components/Common/Card";
import useContainer from "./useContainer";

const Genres = () => {
    const { router, isLoading, isError, genres } = useContainer();

    if (isLoading) return <Loading />;

    return (
        <div className="px-4 pt-20 pb-5 w-[100%]">
            <div className="flex items-center justify-center lg:justify-start gap-x-2 mb-5">
                <div className="lg:hidden">
                    <GenreIcon />
                </div>
                <header className="heading">Genres</header>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                {genres?.results?.map((data) => (
                    <div
                        key={data.id}
                        onClick={() => router.push(`genres/${data.slug}`)}
                    >
                        <Card data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Genres;
