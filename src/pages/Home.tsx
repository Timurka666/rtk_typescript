import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import { useDebounce } from "../hooks/debounce";
import { useLazyGetUserRepoQuery, useSearchUsersQuery } from "../store/github/github.api";


export default function Home() {
    const [search, setSearch] = useState('');
    const [isDropDown, setDropDown] = useState(false);
    const debounced = useDebounce(search);
    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length === 0,
        refetchOnFocus: true
    });
    const [getRepos,
        {isLoading: areReposLoading, isError: areReposError, data: repos}] = useLazyGetUserRepoQuery();

    const clickHandler = (username: string) => {
        setDropDown(false);
        return getRepos(username);
    };

    useEffect(() => {
        setDropDown(debounced.length !== 0 && data?.length! > 0);
    }, [debounced, data]);

    return (
        <div className="home flex justify-center mx-auto h-screen">
            {isError && <div className="text-center text-red-600">Something went wrong!!!</div>}

            <div className="search relative w-[560px]">
                <input
                    type="text"
                    className="border py-2 px-4 w-full h-[2rem] mb-[0.5rem]"
                    placeholder="Search for users"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <ul className="list-none absolute top-[2rem] right-0 left-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                    {isLoading ? <div>Loading...</div> :
                        isDropDown && 
                        data?.map(el => (
                            <li
                            key={el.id}
                            className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                            onClick={() => clickHandler(el.login)}>
                                <img
                                src={el.avatar_url}
                                alt="avatar" 
                                className="w-16 h-16 inline-block mr-[1rem]" />
                                {el.login}
                            </li>
                        ))
                    }

                </ul>
                <div className="container">
                    {areReposLoading ? <div>Loading...</div> :
                    repos?.map(el => (
                        <RepoCard repo={el} key={el.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}