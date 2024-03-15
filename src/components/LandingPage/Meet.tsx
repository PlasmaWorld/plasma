import React, { useEffect, useState, useRef } from 'react';

// Define a type for the components' structure
type ComponentItem = {
    name: string;
    description: string;
    image: string;
    linkText: string;
    link: string;
};

const Meet: React.FC = () => {
    const [hasScrollbar, setHasScrollbar] = useState<boolean>(false);
    // Using HTMLElement as the type for the ref, adjust as needed (e.g., HTMLDivElement for div elements)
    const containerRef = useRef<HTMLDivElement | null>(null);

    const components: ComponentItem[] = [
        {
            name: '',
            description: '',
            image: '/images/1.png',
            linkText: 'Hydrogen',
            link: ''
        },
        {
            name: '',
            description: '',
            image: '/images/2.png',
            linkText: 'Deuterium',
            link: ''
        },
        {
            name: '',
            description: '',
            image: '/images/3.png',
            linkText: 'Tritium',
            link: ''
        }
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (container && container.scrollWidth > container.clientWidth) {
            setHasScrollbar(true);
        } else {
            setHasScrollbar(false);
        }
    }, []);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target.scrollWidth > entry.target.clientWidth) {
                    setHasScrollbar(true);
                } else {
                    setHasScrollbar(false);
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div id="meet" data-aos="fade-up" data-aos-duration="2000" className='pt-14 pb-36 bg-[url(/hero-bg3-wide-dark.png)] bg-center'>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
                <h1 className='text-sky-500 text-2xl font-semibold text-center pt-20'>Meet the Plasma World NFTs</h1>
                <div className='lg:mt-12 mt-16 flex flex-col lg:flex-row gap-4 justify-center items-center px-5 lg:px-0'>
                    <a href="https://nft.mimo.exchange/" target="_blank" rel="noopener noreferrer">
                        <button className='bg-sky-500 hover:bg-white hover:text-gray-800 transition duration-200 text-white py-4 px-7 rounded-full'>Buy a PlasmaW3bWorld</button>
                    </a>
                    <button className='bg-white hover:bg-gray-800 hover:text-white transition duration-200 text-gray-600 py-4 px-7 rounded-full'>View full collection</button>
                </div>
                <div ref={containerRef} className={`mt-20 mx-auto overflow-x-auto ${!hasScrollbar ? "flex justify-center" : ""}`} style={{ minWidth: '100%' }}>
                    <div className='flex gap-4'>
                        {components.map((component, index) => (
                            <div key={index} className='flex-shrink-0 flex flex-col items-center bg-zinc-800 border border-sky-500 border-opacity-30 hover:bg-sky-700 transition duration-150 px-10 py-5 rounded-lg text-white' style={{ width: '280px' }}>
                                <img src={component.image} alt="" className='w-full h-64 max-w-full rounded-md' />
                                <div className=''>
                                    <a href={component.link} target='_blank' rel="noopener noreferrer" className='hover:text-sky-500 text-gray-200 transition duration-200 text-sm pt-3 text-left'>{component.linkText}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meet;
