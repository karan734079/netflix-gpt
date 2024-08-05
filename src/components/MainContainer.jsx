import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (movies === null || movies.length === 0) return null;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <VideoBackGround movieId={id} className="absolute inset-0 object-cover w-full h-full" />

            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-t from-black via-transparent to-black text-white text-center">
                <VideoTitle 
                    title={original_title} 
                    overview={overview}
                    className="max-w-lg mx-auto"
                />
            </div>
        </div>
    );
}

export default MainContainer;

