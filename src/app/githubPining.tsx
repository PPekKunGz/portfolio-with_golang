import Link from "next/link";
import { useEffect, useState } from "react";

if (typeof setImmediate === 'undefined') {
    (global as any).setImmediate = (fn: (...args: any[]) => void, ...args: any[]) => {
        return setTimeout(fn, 0, ...args);
    };
}

interface Repo {
    name: string;
    description: string;
    url: string;
    language: string | null;
}

const ignoreRepo = [
    "Kali-Linux-VPS",
    "minecraft-resource-pack-converter",
    "optimize-minecraft-server",
    "Performance-Mods",
    "starship-install",
    "terminalGPT"
];

const PinnedRepos = () => {
    interface Contribution {
        date: string | null;
        count: string | null;
        level: string | null;
    }

    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [pinnedRepos, setPinnedRepos] = useState<Repo[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPinnedRepos = async () => {
            try {
                const response = await fetch("https://pinned.berrysauce.dev/get/ppekkungz");
                if (!response.ok) {
                    throw new Error(`Error fetching pinned repos: ${response.status} ${response.statusText}`);
                }

                const repos = await response.json();
                const pinnedItems = repos
                    .filter((repo: any) => !ignoreRepo.includes(repo.name))
                    .map((repo: any) => ({ name: repo.name, description: repo.description, url: repo.html_url, language: repo.language, }));

                setPinnedRepos(pinnedItems);
                console.log(repos.url)
            } catch (err) {
                if (err instanceof Error) { setError(err.message); } else { setError("An unknown error occurred") }
            }
        };
        fetchPinnedRepos();
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto h-full flex flex-col gap-16 md:gap-5 flex-wrap md:justify-center justify-center px-4 py-8 mt-20 md:mt-42 w-full">
            <h1 className="text-2xl font-bold mb-4">📌Pinned Repositories</h1>
            <ul className="grid grid-cols-2 items-center justify-center gap-2">
                {pinnedRepos.map((repo, index) => (
                    <li key={index} className="p-4 border rounded-lg bg-gray-50 shadow-sm h-32 truncate text-pretty hover:shadow-md transition">
                        <Link href={"https://github.com/ppekkungz"} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg font-semibold hover:underline">
                            {repo.name}
                        </Link>
                        <p className="text-sm text-gray-600">
                            {repo.description || "No description available."}
                        </p>
                        <div className="text-sm text-gray-500">
                            Language: {repo.language || "Not specified"}
                        </div>
                    </li>
                ))}
            </ul>
            <img src="https://github-readme-activity-graph.vercel.app/graph?username=PPekKunGz&area=true&hide_border=false" height="150" alt="activity-graph graph"  />
        </div>
    );
};

export default PinnedRepos;