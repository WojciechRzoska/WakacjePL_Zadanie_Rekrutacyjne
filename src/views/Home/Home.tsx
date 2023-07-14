import { BreedList } from '../../components/organisms/BreedList/BreedList';
import { TypewriterTitle } from '../../components/molecues/Typewriter/TypewriterTitle';
import { ViewWrapper } from '../../components/molecues/ViewWrapper/ViewWrapper';

export const Home = () => {
  //   useEffect(() => {
  //     setLoadedBreeds(breeds.slice(0, 10));
  //   }, [breeds]);
  return (
    <ViewWrapper>
      <TypewriterTitle string={['Find your dog', 'and get more details!']} />
      <BreedList />
    </ViewWrapper>
  );
};
