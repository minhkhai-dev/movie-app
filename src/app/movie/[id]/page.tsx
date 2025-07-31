import { NextPage } from 'next';
import MovieOrTVDetail from '../components/MovieOrTVDetail';

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
