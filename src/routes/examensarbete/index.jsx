import styled from 'styled-components';
import { Hero } from '../../components/hero';
import { Heading1, Heading2 } from '../../components/headings';
import { Text } from '../../components/text';
import { Chip } from '../../components/chip';
import { theme } from '../../theme';
import { Articles } from './articles';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router';

function Examensarbete() {
  const navigate = useNavigate();
  const chips = ['UX/UI design', 'Produkt koncept', 'Tillgänglighet', 'Examensarbete'];

  const goToStart = () => {
    navigate('/');
  };

  return (
    <>
      <Hero>
        <Image src="public/treebula-2.png" alt="Bild på Treebulas nya skogsapp" />
        <Heading1>Treebula</Heading1>
        <Text>Att designa en ny digital tjänst för skogsägare</Text>
        <Chips>
          {chips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </Chips>
      </Hero>
      <Wrapper>
        <Articles />
        <Footer>
          <Heading2>Tack för mig! 🙌🏼</Heading2>
          <Button onClick={goToStart}>Tillbaka till start</Button>
        </Footer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space(21),
  alignItems: 'center',
});

const Image = styled.img({
  height: 480,
  objectFit: 'contain',
  width: '100%',
});

const Chips = styled.div({
  display: 'flex',
  gap: theme.space(4),
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Footer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space(6),
  alignItems: 'center',
  marginBottom: theme.space(32),
});

export default Examensarbete;
