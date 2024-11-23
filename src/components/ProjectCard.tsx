import { ActionIcon, Badge, Button, Card, Group, Text } from '@mantine/core';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import classes from './BadgeCard.module.css';
import { IconHeart } from '@tabler/icons-react';
import Link from 'next/link';

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

const technologiesArray: { label: string; emoji: string }[] = [
    { label: 'NextJS', emoji: '☀️' },
    { label: 'NodeJS', emoji: '🦓' },
    { label: 'Go', emoji: '🌊' },
    { label: 'Fastify', emoji: '🌲' },
    { label: 'ExpressJS', emoji: '🤽' },
    { label: 'TailwindCSS', emoji: '🙏' },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const fontClass = isEnglishText(project.title) ? 'font-space-mono' : 'font-noto_sans';
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
            <Badge key={tech} variant="light" leftSection={techMatch.emoji}>
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
                <Image src={project.image} alt={project.title} width={150} height={100} draggable="false" className="w-full h-32 object-cover"
                />
            </Card.Section>
            <Card.Section p="sm">
                <Group justify="apart">
                    <Text fz="lg" fw={500} className={`${fontClass} text-xl tracking-wider`}>
                        {project.title}
                    </Text>
                    <Badge variant="light" className={`${fontClass}`}>@PPekKunGz</Badge>
                </Group>
            </Card.Section>
            <Card.Section withBorder className={`${classes.section} ${fontClass}`}>
                <hr />
                <Text mt="md" className={classes.label} c="dimmed">
                    Language for working..
                </Text>
                <Group gap={7} mt={5}>
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
