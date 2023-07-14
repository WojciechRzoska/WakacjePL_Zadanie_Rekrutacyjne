import Typewriter from 'typewriter-effect';
import { Wrapper } from './TypewriterTitle.style';

interface TypewriterTitleProps {
  string: string[];
}
export const TypewriterTitle = ({ string }: TypewriterTitleProps) => {
  return (
    <Wrapper>
      <Typewriter
        options={{
          strings: string,
          autoStart: true,
          loop: true,
        }}
      />
    </Wrapper>
  );
};
