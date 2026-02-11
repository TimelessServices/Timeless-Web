import "@/lib/fontAwesome.js";
import "@/styles/globals.css";

import Script from "next/script";
import PropTypes from "prop-types";
import FacebookPixelEvents from "@/components/tracking/FacebookPixelEvents";

import { Suspense } from "react";
import { NavHandler } from "@/components/nav/NavHandler";

export const metadata = {
    title: "Timeless Web | Sydney Web Designer",
    description: "Modern websites that help grow your business. Timeless Web builds high-converting, low-maintenance websites for Sydney-based businesses that want more sales, less admin, and a better brand image.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                {/* Facebook Pixel Code */}
                <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1298515491759392');
              fbq('track', 'PageView');
            `,
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=1298515491759392&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "s0sy2h2m9l");
                        `,
                    }}
                />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-6TTBXJEHJQ"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6TTBXJEHJQ');
                    `,
                    }}
                />
            </head>
            <body className="min-h-screen flex flex-col">
                <NavHandler />
                <main className="flex-grow">{children}</main>

                <footer className="bg-gray-100 w-full">
                    <div className="bg-stone-900 w-full px-5 py-5">
                        <p className="font-semibold text-sm text-white text-left">
                            {" "}
                            © {new Date().getFullYear()} TimelessWeb{" "}
                        </p>
                    </div>
                </footer>
                <Suspense fallback={null}>
                    <FacebookPixelEvents />
                </Suspense>
            </body>
        </html>
    );
}

RootLayout.propTypes = { children: PropTypes.node.isRequired };