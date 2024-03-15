import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div>
            <footer className="footer footer-center py-24 lg:py-32 text-white rounded">
                <div className="grid grid-flow-col gap-4 text-white font-semibold text-lg">
                    <Link href='/buy' className="link link-hover px-5 py-2 border border-sky-500 border-opacity-20 rounded-full">Profile</Link>
                    <Link href='/sell' className="link link-hover px-5 py-2 border border-sky-500 border-opacity-20 rounded-full">Sell</Link>
                </div>

                <div className="grid grid-flow-col gap-4">
                 <Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link>
                  <Link href="/ToS"  className="link link-hover">Terms of Service</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 cursor-pointer">
                        {/* Icons */}
                    </div>
                </div>
                <div>
                    <p>© 2024 PlasmaVerse. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
