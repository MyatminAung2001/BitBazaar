"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import {
    GENRES,
    PLATFORMS,
    STORES,
    TAGS,
    DEVELOPERS,
    PUBLISHERS,
    CREATORS,
    NEW_AND_TRENDING,
    HOME,
    BEST_OF_THE_YEARS,
    POPULAR_IN_2022,
    All_TIME_TOP_250,
    GAMES,
} from "@/constants/locationPathname";

// icons
import { GenreIcon, GenreActiveIcon } from "../Common/icons/GenreIcon";
import { ConsoleIcon, ConsoleActiveIcon } from "../Common/icons/ConsoleIcon";
import { StoreIcon, StoreActiveIcon } from "../Common/icons/StoreIcon";
import { TagIcon, TagActiveIcon } from "../Common/icons/TagIcon";
import { CodeIcon, CodeActiveIcon } from "../Common/icons/CodeIcon";
import { PublishIcon, PublishActiveIcon } from "../Common/icons/PublishIcon";
import { UserIcon, UserActiveIcon } from "../Common/icons/UserIcon";
import { TrophyIcon, TrophyActiveIcon } from "../Common/icons/TrophyIcon";
import { TrendingIcon, TrendingActiveIcon } from "../Common/icons/TrendingIcon";
import { PopularIcon, PopularActiveIcon } from "../Common/icons/PopularIcon";
import { CrownIcon, CrownActiveIcon } from "../Common/icons/CrownIcon";

const TopNavigation = [
    {
        id: 1,
        link: NEW_AND_TRENDING,
        icon: <TrendingIcon />,
        label: "New and trending",
    },
    {
        id: 2,
        link: BEST_OF_THE_YEARS,
        icon: <TrophyIcon />,
        label: "Best of the year",
    },
    {
        id: 3,
        link: POPULAR_IN_2022,
        icon: <PopularIcon />,
        label: "Popular in 2022",
    },
    {
        id: 4,
        link: All_TIME_TOP_250,
        icon: <CrownIcon />,
        label: "All time top 250",
    },
];

const BrowseNavigation = [
    { id: 1, link: GENRES, icon: <GenreIcon />, label: "Genres" },
    { id: 2, link: PLATFORMS, icon: <ConsoleIcon />, label: "Platforms" },
    { id: 3, link: STORES, icon: <StoreIcon />, label: "Stores" },
    { id: 4, link: TAGS, icon: <TagIcon />, label: "Tags" },
    { id: 5, link: DEVELOPERS, icon: <CodeIcon />, label: "Developers" },
    { id: 6, link: PUBLISHERS, icon: <PublishIcon />, label: "Publishers" },
    { id: 7, link: CREATORS, icon: <UserIcon />, label: "Creators" },
];

const NavigationMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`default-section-padding lg:hidden fixed z-50 top-0 py-3 w-screen ${
                isScroll ? "bg-[#151515]" : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between">
                <Link className="title cursor-pointer" href={HOME}>
                    BitBazaar
                </Link>
                <div className="sticky z-[150] top-0 right-0 lg:hidden">
                    <Hamburger
                        toggled={isMenuOpen}
                        toggle={setIsMenuOpen}
                        size={28}
                        color={isMenuOpen ? "#141301" : "#E5E7E6"}
                        label="menu"
                    />
                </div>
            </div>
            <div className="lg:hidden">
                {isMenuOpen && (
                    <div className="bg-primary-bg-white min-h-screen w-[70%] px-8 pt-6 fixed right-0 top-0">
                        <Link href={GAMES} onClick={() => setIsMenuOpen(false)}>
                            <header className="text-sub-heading font-semibold tracking-wider">
                                All Games
                            </header>
                        </Link>
                        <hr className="my-1" />
                        <div className="">
                            <header className="text-sub-heading font-semibold tracking-wider">
                                Top
                            </header>
                            <div className="mt-1 flex flex-col gap-y-3">
                                {TopNavigation.map((data) => (
                                    <div
                                        key={data.id}
                                        className="flex items-center gap-x-3"
                                    >
                                        <div className="bg-[#202020] rounded p-2">
                                            {data.icon}
                                        </div>
                                        <Link
                                            href={data.link}
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                            }}
                                            className="cursor-pointer"
                                        >
                                            {data.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className="mt-2" />
                        <div>
                            <header className="text-sub-heading font-semibold tracking-wider">
                                Browse
                            </header>
                            <div className="mt-1 flex flex-col gap-y-3">
                                {BrowseNavigation.map((data) => (
                                    <div
                                        key={data.id}
                                        className="flex items-center gap-x-3"
                                    >
                                        <div className="bg-[#202020] rounded p-2">
                                            {data.icon}
                                        </div>
                                        <Link
                                            href={data.link}
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                            }}
                                            className="cursor-pointer"
                                        >
                                            {data.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavigationMobile;
