import { useSearchUsersQuery } from "../store/github/github.api";


export default function Home() {
    const {isLoading, isError, data} = useSearchUsersQuery('timurka666');

    return (
        <div className="home">
            <h1>Home Page</h1>
        </div>
    );
}