"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

import { GENRES } from '@/constants/locationPathname';

const Navigation = () => {

    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="container absolute z-50 top-0 left-0 right-0 w-screen bg-primary-bg-black">
            <div className="flex items-center justify-between">
                <p className="title cursor-pointer" onClick={() => router.back()}>
                    RockStar
                </p>
                <div className="sticky z-[150] top-0 right-0">
                    <Hamburger 
                        toggled={isMenuOpen} 
                        toggle={setIsMenuOpen} 
                        size={28}
                        color={isMenuOpen ? "#141301" : "#E5E7E6"}
                        label="menu"
                    />
                </div>
            </div>
            <div>
                {isMenuOpen && (
                    <div className="bg-primary-bg-white min-h-screen w-[70%] fixed right-0 top-0">
                        <div className="pt-16 px-8">
                            <header className="text-sub-heading font-semibold tracking-wider">
                                Browse
                            </header>
                            <div className="mt-3 flex flex-col gap-y-3">
                                <p onClick={() => {
                                    router.push(GENRES);
                                    setIsMenuOpen(false)
                                }} className="cursor-pointer">
                                    Genres
                                </p>
                                <p onClick={() => {
                                    // router.push(GENRES);
                                    setIsMenuOpen(false)
                                }} className="cursor-pointer">
                                    Platforms
                                </p>
                                <p onClick={() => {
                                    // router.push(GENRES);
                                    setIsMenuOpen(false)
                                }} className="cursor-pointer">
                                    Stores
                                </p>
                                <p onClick={() => {
                                    // router.push(GENRES);
                                    setIsMenuOpen(false)
                                }} className="cursor-pointer">
                                    Tags
                                </p>
                                <p onClick={() => {
                                    // router.push(GENRES);
                                    setIsMenuOpen(false)
                                }} className="cursor-pointer">
                                    Developers
                                </p>
                                <p onClick={() => {
                                    // router.push(GENRES);
                                    setIsMenuOpen(false)
                                }} className="cursor-pointer">
                                    Publishers
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navigation;