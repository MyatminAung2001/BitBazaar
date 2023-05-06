"use client"

import { useRouter } from "next/navigation";

const Genres = ({ genres }) => {

    const router = useRouter();

    return (
        <div className="mb-3">
            <p className="text-primary-white text-lg tracking-wide">
                Genres
            </p>
            <div className="flex flex-wrap gap-x-1 break-words">
                {genres.map((genre, i, arr) => (
                    <p 
                        key={genre.id} 
                        className="text-primary-white tracking-wide text-[14px] font-light cursor-pointer hover:text-primary-gray transition duration-300"
                        onClick={() => router.push(`/genres/${genre.slug}`)}
                    >
                        {genre.name}<span className="text-primary-yellow">{i != arr.length - 1 ? " | " : " "}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Genres;