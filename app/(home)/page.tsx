import Movie from "@/components/movie";
import styles from "@/styles/home.module.css";
import { API_URL } from "@/app/constans";

export const metadata = {
  title: "Home",
};

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

async function getMovies(): Promise<Movie[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const response = await fetch(API_URL);
  const json: Movie[] = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
