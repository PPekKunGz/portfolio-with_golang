"use client"
import React, { useState, useEffect } from 'react';
import { Languages, GithubUser } from '@/interface/interface';
import Loading from '@/components/assets/Loading';
import { FaSun, FaSwimmingPool } from 'react-icons/fa';
import { SiGithub, SiNextdotjs, SiShadcnui, SiTypescript, SiTailwindcss, SiMui, SiHtml5, SiNodedotjs, SiExpress, SiMariadb, SiJsonwebtokens, SiIntellijidea, SiContactlesspayment, SiYoutube, SiMinetest, SiJavascript, SiFlutter, SiSass } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';
import { SlSocialTwitter } from 'react-icons/sl';
import { PiAngularLogo } from 'react-icons/pi';

const technologiesArray: { label: string; emoji: JSX.Element }[] = [
    { label: 'NextJS', emoji: <SiNextdotjs size={40} style={{ color: '#0070f3' }} /> },
    { label: 'ShadCN/UI', emoji: <SiShadcnui size={40} style={{ color: '#000' }} /> },
    { label: 'MariaDB', emoji: <SiMariadb size={40} style={{ color: '#00758f' }} /> },
    { label: 'JWT', emoji: <SiJsonwebtokens size={40} style={{ color: '#004D40' }} /> },
    { label: 'Typescript', emoji: <SiTypescript size={40} style={{ color: '#3178C6' }} /> },
    { label: 'TailwindCSS', emoji: <SiTailwindcss size={40} style={{ color: '#38BDF8' }} /> },
    { label: 'Lavalink', emoji: <FaSun size={40} style={{ color: '#FFD700' }} /> },
    { label: 'Shard', emoji: <FaSwimmingPool size={40} style={{ color: '#00BFFF' }} /> },
    { label: 'Material UI', emoji: <SiMui size={40} style={{ color: '#007FFF' }} /> },
    { label: 'HTML', emoji: <SiHtml5 size={40} style={{ color: '#E44D26' }} /> },
    { label: 'NodeJS', emoji: <SiNodedotjs size={40} style={{ color: '#68A063' }} /> },
    { label: 'GBPrimePay', emoji: <SiContactlesspayment size={40} style={{ color: '#02416d' }} /> },
    { label: 'ExpressJS', emoji: <SiExpress size={40} style={{ color: '#000000' }} /> },
    { label: 'Java', emoji: <SiIntellijidea size={40} style={{ color: '#9d00ff' }} /> },
    { label: 'AngularJS', emoji: <PiAngularLogo size={40} style={{ color: 'red' }} /> },
    { label: 'Flutter', emoji: <SiFlutter size={40} style={{ color: 'aqua' }} /> },
    { label: 'SASS', emoji: <SiSass size={40} style={{ color: 'pink' }} /> },
    { label: 'CSS', emoji: <SiSass size={40} style={{ color: '' }} /> },
    { label: 'JavaScript', emoji: <SiJavascript size={40} style={{ color: 'yellow' }} /> },
];

const Language: React.FC = () => {
    const [language, setLanguage] = useState<Languages[]>([]);
    const [githubUser, setGithubUser] = useState<GithubUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLanguage = async () => {
            try {
                const response = await fetch(`${process.env.apiUrl}/data/language.json`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch language: ${response.status}`);
                }

                const data: Languages[] = await response.json();
                setLanguage(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchGithubUser = async () => {
            try {
                const response = await fetch(`${process.env.ghUrl}/PPekKunGz`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch GitHub user: ${response.status}`);
                }
                const data: GithubUser = await response.json();
                // console.log(data)
                setGithubUser(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLanguage();
        fetchGithubUser();
    }, []);

    const [isMdOrAbove, setIsMdOrAbove] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMdOrAbove(window.innerWidth >= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (loading) return <div className='flex justify-center items-center h-[86vh] mt-20 md:mt-42'><Loading /></div>;
    if (error) return <div className='flex justify-center items-center h-[86vh] mt-20 md:mt-42'><span className="text-xl md:text-3xl font-bold space-mono text-zinc-700 bg-white rounded-full px-2 py-1 tracking-widest">Error: {error}</span></div>;

    return (
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 px-4 py-8 mt-20 md:mt-42">
            <div className="bg-gray-500 p-4 w-full lg:w-1/3 relative rounded-xl">
                <div className='flex flex-col justify-center items-center bg-white/10 p-5 rounded-xl'>
                    {githubUser?.avatar_url && (
                        <Image src={githubUser.avatar_url} alt={githubUser.name || "GitHub User"} width={200} height={100} draggable="false" className='rounded-full mx-auto mt-4 border-4' />
                    )}
                    <span className='text-3xl tracking-wider font-semibold font-space-mono mt-3'>{githubUser?.name}</span>
                    <div className='flex gap-2 flex-wrap flex-row mt-2'>
                        <Link href={githubUser?.html_url || ""} target={isMdOrAbove ? '_blank' : undefined} rel={isMdOrAbove ? 'noopener noreferrer' : undefined}
                            className='bg-black/20 p-1.5 rounded-md'>
                            <div className='underline decoration-blue-300 text-white hover:text-sky-400 tracking-wider'>
                                <SiGithub size={30} />
                            </div>
                        </Link>
                        <Link href={"https://youtube.com/PPekKunGzChannel"} target={isMdOrAbove ? '_blank' : undefined} rel={isMdOrAbove ? 'noopener noreferrer' : undefined}
                            className='bg-black/20 p-1.5 rounded-md'>
                            <div className='underline decoration-blue-300 text-white hover:text-sky-400 tracking-wider'>
                                <SiYoutube size={30} />
                            </div>
                        </Link>
                        <Link href={"https://x.com/" + `${githubUser?.name}`} target={isMdOrAbove ? '_blank' : undefined} rel={isMdOrAbove ? 'noopener noreferrer' : undefined}
                            className='bg-black/20 p-1.5 rounded-md'>
                            <div className='underline decoration-blue-300 text-white hover:text-sky-400 tracking-wider'>
                                <SlSocialTwitter size={30} />
                            </div>
                        </Link>
                        <Link href={"https://namemc.com/" + `${githubUser?.login}`} target={isMdOrAbove ? '_blank' : undefined} rel={isMdOrAbove ? 'noopener noreferrer' : undefined}
                            className='bg-black/20 p-1.5 rounded-md'>
                            <div className='underline decoration-blue-300 text-white hover:text-sky-400 tracking-wider'>
                                <SiMinetest size={30} />
                            </div>
                        </Link>
                    </div>
                    <span className="bg-slate-50/20 w-[31.5dvh] mt-6 mb-3 text-balance text-center rounded-md p-2">{githubUser?.bio}</span>
                    <Image draggable="false" src="https://camo.githubusercontent.com/2225a5f471c872c36436d93809b037a2fce455b5b6ba14c2ce6096c45eef3642/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d7070656b6b756e677a267468656d653d6f757472756e2673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
                        alt={githubUser?.name || ""} height={10} width={10} className='w-fit' />
                </div>
            </div>
            <div className="bg-gray-500 p-4 h-fit lg:w-2/3 relative rounded-xl">
                <div className="flex flex-row flex-wrap gap-5 h-fit bg-white/10 p-5 rounded-xl">
                    <div className="flex-1 flex flex-wrap justify-center lg:justify-normal gap-3">
                        {language.map((lang, index) => {
                            const matchingTech = technologiesArray.find((tech) => tech.label.toLowerCase() === lang.name.toLowerCase());
                            return (
                                <div key={index} className="gap-3 flex flex-col items-center text-center justify-center px-8 py-5 rounded shadow-md bg-neutral-800/80">
                                    {matchingTech ? (matchingTech.emoji) : (<span className="text-gray-500">No Icon</span>)}
                                    <h3 className="text-lg font-semibold">{lang?.name || ""}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Language;
