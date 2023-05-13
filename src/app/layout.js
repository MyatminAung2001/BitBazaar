import "./globals.css";

import { ReactQueryProviders } from "./providers";
import WebNavigation from "@/components/Navigation/index.js";
import Header from "@/components/Header";

export const metadata = {
    title: "BitBazaar | One-stop Destination For All Games!",
    description: `BitBazaar offers an extensive and diverse collection of games and also have a wide range of games available, 
        so you can find the perfect fit for your gaming setup. Whether you're a fan of action-packed shooters, 
        immersive role-playing adventures, mind-bending puzzle games, or thrilling sports simulations, 
        we have something for every gaming taste. Our curated library features both popular AAA titles and hidden indie gems, 
        ensuring that you never run out of exciting games to play.`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ReactQueryProviders>
                    <main>
                        <Header />
                        <section className="lg:flex">
                            <aside className="hidden lg:block lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:p-4 lg:w-60">
                                <WebNavigation />
                            </aside>
                            <div className="lg:flex-1 lg:ml-60">{children}</div>
                        </section>
                    </main>
                </ReactQueryProviders>
            </body>
        </html>
    );
}
