import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative w-full h-screen bg-black">
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
                style={{ filter: 'blur(8px)' }}
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-16">
                <h3 className="text-white mb-4">FOSSConf 2023</h3>
                <p className="text-white mb-8">First Annual Conference of FOSSCU</p>
                <div className="flex space-x-4">
                    <Link href="#">
                        <div className="cursor-pointer text-white underline">Button 1</div>
                    </Link>
                    <Link href="#">
                        <div className="cursor-pointer text-white underline">Button 2</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
