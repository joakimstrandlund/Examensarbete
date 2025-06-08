import styled from 'styled-components';
import { Heading1 } from '../components/headings';
import { Text } from '../components/text';
import { theme } from '../theme';
import { Button } from '../components/button';
import { Hero } from '../components/hero';
import { useNavigate } from 'react-router';

function Index() {
  const navigate = useNavigate();

  const goToExamensarbete = () => {
    navigate('/examensarbete');
  };

  return (
    <Hero>
      <Container>
        <Heading1>Joakims Examensarbete</Heading1>
        <Text>
          Här kan du läsa om mitt examensarbete där jag, som UX-designer, hjälpte till att utveckla en ny digital prenumerationstjänst för skogsägare på
          Treebula. Arbetet fokuserar på hur användarcentrerad design tillämpas i en agil och iterativ process för att skapa en intuitiv tjänst som ger
          skogsägare – särskilt den äldre målgruppen – en bättre överblick över sin skog, direkt i mobiltelefonen.
        </Text>
        <Button onClick={goToExamensarbete}>Till examensarbete</Button>
      </Container>
    </Hero>
  );
}

const Container = styled.div({
  maxWidth: 640,
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  gap: theme.space(6),
  flexDirection: 'column',
  alignItems: 'center',
});

export default Index;
