import MovieOrTVDetail from "@/app/movie/components/MovieOrTVDetail";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { id } = await params;
  
  return <MovieOrTVDetail id={id} />;
};

export default Page;