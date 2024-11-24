import { ActionIcon, Badge, Button, Card, Group, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import classes from './BadgeCard.module.css';
import { IconHeart } from '@tabler/icons-react';
import Link from 'next/link';
import { FaSun, FaServer , FaSwimmingPool } from 'react-icons/fa';
import { SiNextdotjs, SiPhp, SiDiscord, SiShadcnui, SiTypescript, SiTailwindcss, SiMui, SiHtml5, SiNodedotjs, SiExpress, SiFfmpeg, SiAxios, SiMariadb, SiJsonwebtokens, SiIntellijidea, SiContactlesspayment, SiCodeblocks } from 'react-icons/si';
import { TbBrandMinecraft } from 'react-icons/tb';
import { FaPeopleGroup } from 'react-icons/fa6';

interface Project {
    id: number;
    title: string;
    description: string;
    url: string;
    image: string;
    technologies: string;
}

interface ProjectCardProps {
    project: Project;
}

const isEnglishText = (text: string): boolean => /^[a-zA-Z\s]+$/.test(text);

const technologiesArray: { label: string; emoji: JSX.Element }[] = [
    { label: 'NextJS', emoji: <SiNextdotjs style={{ color: '#0070f3' }} /> },
    { label: 'ShadCN/UI', emoji: <SiShadcnui style={{ color: '#000' }} /> },
    { label: 'MariaDB', emoji: <SiMariadb style={{ color: '#003545' }} /> },
    { label: 'JWT', emoji: <SiJsonwebtokens style={{ color: '#004D40' }} /> },
    { label: 'Typescript', emoji: <SiTypescript style={{ color: '#3178C6' }} /> },
    { label: 'TailwindCSS', emoji: <SiTailwindcss style={{ color: '#38BDF8' }} /> },
    { label: 'Lavalink', emoji: <FaSun style={{ color: '#FFD700' }} /> },
    { label: 'Shard', emoji: <FaSwimmingPool style={{ color: '#00BFFF' }} /> },
    { label: 'Material UI', emoji: <SiMui style={{ color: '#007FFF' }} /> },
    { label: 'HTML', emoji: <SiHtml5 style={{ color: '#E44D26' }} /> },
    { label: 'NodeJS', emoji: <SiNodedotjs style={{ color: '#68A063' }} /> },
    { label: 'DiscordJS', emoji: <SiDiscord style={{ color: '#5B209A' }} /> },
    { label: 'PHP', emoji: <SiPhp style={{ color: '#777BB3' }} /> },
    { label: 'GBPrimePay', emoji: <SiContactlesspayment style={{ color: '#02416d' }} /> },
    { label: 'Express.JS', emoji: <SiExpress style={{ color: '#000000' }} /> },
    { label: 'FFMPEG', emoji: <SiFfmpeg style={{ color: '#7289DA' }} /> },
    { label: 'AXIOS', emoji: <SiAxios style={{ color: '#5A29E4' }} /> },
    { label: 'Java Minecraft', emoji: <SiIntellijidea style={{ color: '#000000' }} /> },
    { label: 'Server Manager', emoji: <FaServer style={{ color: '#e31e52' }} /> },
    { label: 'SSkins', emoji: <TbBrandMinecraft style={{ color: '#ab1ee3' }} /> },
    { label: 'Roleplay', emoji: <FaPeopleGroup style={{ color: '#1e81e3' }} /> },
    { label: 'Modder Creation', emoji: <SiIntellijidea style={{ color: '#000000' }} /> },
    { label: '12TimeWeCCG', emoji: <SiCodeblocks style={{ color: 'blue' }} /> },
    { label: 'FriendsCraft', emoji: <FaPeopleGroup style={{ color: 'lime' }} /> },
];


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const fontClass = isEnglishText(project.title) ? 'font-space-mono' : 'font-space-mono';
    let parsedTechnologies: string[] = [];
    try {
        parsedTechnologies = JSON.parse(project.technologies || '[]');
    } catch (error) {
        console.error('Failed to parse technologies:', error);
    }
    const features = parsedTechnologies.map((tech) => {
        const techMatch = technologiesArray.find(
            (item) => item.label.toLowerCase() === tech.toLowerCase()
        );
        return techMatch ? (
            <Badge key={tech} variant="light" className=' text-[9px]' leftSection={techMatch.emoji}>
                {techMatch.label}
            </Badge>
        ) : (
            <Badge key={tech} variant="light">
                {tech}
            </Badge>
        );
    });
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
    return (
        <Card className={`${classes.card} flex w-72 border border-r-4 border-b-4 border-zinc-900/70`}>
            <Card.Section>
                <Image src={project.image} alt={project.title} width={150} height={100} draggable="false" className="w-full h-32 object-cover"/>
            </Card.Section>
            <Card.Section p="sm">
                <Group justify="apart">
                    <Text fz="lg" fw={600} className={`${fontClass} text-xl tracking-wider border-b`}>
                        {project.title}💸
                    </Text>
                    <Text fz="sm" mt="xs" className='-translate-y-3.5'>
                        {project.description}
                    </Text>
                </Group>
            </Card.Section>
            <Card.Section withBorder className={`${classes.section} ${fontClass} text-center -translate-y-4`}>
                <hr />
                <Text mt="md" className={classes.label} c="dimmed">
                    Language for working..
                </Text>
                <Group gap={7} mt={5} align='center' className=''>
                    {features}
                </Group>
            </Card.Section>
            <Group mt="xs" className='flex justify-center w-full'>
                <Link href={project.url} target={isMdOrAbove ? '_blank' : undefined} rel={isMdOrAbove ? 'noopener noreferrer' : undefined} className=''>
                    <Button className='w-40' radius="md" style={{ flex: 1 }}>ดูตัวอย่างงาน</Button>
                </Link>
                <ActionIcon variant="default" radius="md" size={36}>
                    <IconHeart className={classes.like} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card>
    );
};

export default ProjectCard;
