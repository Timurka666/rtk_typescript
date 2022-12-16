import { useAppSelector } from "../hooks/redux";

export default function Favourites() {

    const {favourites} = useAppSelector(state => state.github);

    if (favourites.length === 0) {
        return <p>No items were added</p>
    } else {
        return (
            <div className="favourites flex justify-center mx-auto h-screen">
                <ul className="list-none">
                    {favourites.map(el => (
                        <li key={el}>
                            <a href={el} target="_blank">{el}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}