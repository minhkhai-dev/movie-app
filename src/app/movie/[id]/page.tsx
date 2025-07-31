import MovieOrTVDetail from '../components/MovieOrTVDetail';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <MovieOrTVDetail id={params.id} />;
}
