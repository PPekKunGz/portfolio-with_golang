"use client"
import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/interface/project';
import Loading from '@/components/assets/Loading';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${process.env.apiUrl}/projects`); // ใช้ process.env.apiUrl
                if (!response.ok) {
                    throw new Error(`Failed to fetch projects: ${response.status}`);
                }

                const data: Project[] = await response.json();
                setProjects(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div className='flex justify-center items-center h-[86vh] mt-20 md:mt-42'><Loading/></div>;
    if (error) return <div className='flex justify-center items-center h-[86vh] mt-20 md:mt-42'><span className="text-xl md:text-3xl font-bold space-mono text-zinc-700 bg-white rounded-full px-2 py-1 tracking-widest">Error: {error}</span></div>;

    return (
        <div className="container mx-auto flex gap-16 md:gap-5 flex-wrap md:justify-normal justify-center px-4 py-8 mt-20 md:mt-42 max-h-[400px] overflow-y-auto
  [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {/* <h1 className="text-3xl font-bold mb-6">Projects</h1> */}
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projects;
