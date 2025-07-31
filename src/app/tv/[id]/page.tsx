import MovieOrTVDetail from "@/app/movie/components/MovieOrTVDetail";
import { NextPage } from "next";

type Props = {
  params: {
    id: string;
  };
};

// Sử dụng NextPage để đảm bảo tương thích
const Page: NextPage<Props> = ({ params }) => {
  return <MovieOrTVDetail id={params.id} />;
};

export default Page;
