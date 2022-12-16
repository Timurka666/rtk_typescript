import { IRepo } from "../models/models";

export default function RepoCard({repo}: {repo: IRepo}) {
    return (
        <a href={repo.html_url} target="_blank">
            <div className="repo-card border py-3 px-2 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
                <h2 className="font-bold text-lh">{repo.full_name}</h2>
                <p className="text-small description">
                    Forks: <span className="font-bold">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                    {repo.description && <span>Description: {repo.description}</span>}
                </p>
            </div>
        </a>
    );
}