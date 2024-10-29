export default async function MovieDetail({ params }) {
  const { id } = await params;
  return <h1>Movies {id}</h1>;
}
