import { Section } from '../../components/section';
import { List, ListItem } from '../../components/list';
import { Text } from '../../components/text';

export const Articles = () => {
  return (
    <>
      <Section title="Abstract">
        <Text>
          This project is about the design process behind Treebula's new digital service for forest owners. As a UX designer, I have been involved in shaping
          Treebula's new service that will give forest owners better control over their digital forest property. The work describes how user-centered design
          principles have been applied in an agile and iterative development environment. Projects describe the common challenges that many forest owners face,
          especially older ones, and together with many years of industry knowledge, led to an intuitive and modern service that gives forest owners a
          comprehensive overview of what is happening in their forest. The idea is to be able to get "full control of your forest from your phone".
        </Text>
      </Section>
      <Section title="Introduktion och bakgrund">
        <Text>
          På Treebula, där alla våra kunder är skogsägare, har vi märkt en stor utmaning och det är att man inte alltid kan vara ute i sin skog och hålla koll
          på saker som kan inträffa. Det kan bero av olika anledningar såsom att man är äldre, bor långt bort från sin skogsfastighet, eller inte alltid har
          tid. Det kan leda till att man känner sig osäker och inte har full kontroll över sin skog, speciellt när det kommer till skador eller risker.
        </Text>
        <Text>
          Därför ville Treebula utveckla en helt ny tjänst för skogsägare. Vårt mål är att kunna ge våra kunder “full kontroll på din skog från din telefon. Det
          handlar om att skapa trygghet, lugn och ro samt samla all viktig information på ett ställe. Jag har varit med från början av detta projekt och här
          kommer bakgrunden till hur produkten kom fram.
        </Text>
      </Section>
      <Section title="Problemet">
        <Text>
          Det största problem vi vill lösa är att dagens skogsägare är ofta bortkopplade från sin skog och dessa utmaningar är vanligt för många skogsägare.
        </Text>
        <List>
          <ListItem>
            <b>Avstånd och tid:</b> Många skogsägare bor långt ifrån sin skogsfastighet. Att åka ut och kolla läget regelbundet är inte alltid praktiskt eller
            möjligt.
          </ListItem>
          <ListItem>
            <b>Ålder: </b> Vår målgrupp är ofta lite äldra (55-80 år), och det blir svårare att ta sig ut i skogen på samma sätt som tidigare.
          </ListItem>
          <ListItem>
            <b>Information som saknas:</b> De får kanske veta om en stormfällning eller ett granbarkborreangrepp alldeles för sent, vilket kan bli dyrt och
            jobbigt att åtgärda.
          </ListItem>
          <ListItem>
            <b>Otrygghet:</b> Att inte veta vad som händer med sin skog skapar en ständig oro
          </ListItem>
        </List>
        <Text>
          Vi såg ett tydligt behov av att digitalisera den här övervakningen och göra det enklare för skogsägare, speciellt i dagens samhälle med all teknik som
          man har.
        </Text>
      </Section>
      <Section title="Syfte/Lösning">
        <Text>
          Mitt syfte som UX-designer i detta projekt var att visualisera Treebulas vison till en användarvänlig, intuitiv och värdeskapande digital tjänst.
          Målet var att designa en produkt som ger skogsägare fullständig överblick och kontroll över sin skogsfastighet. Genom att omvandla data till
          lättförståelig information, anpassad till en mindre teknik van målgrupp.
        </Text>
        <Text>
          Den nya tjänsten kommer att presenteras genom ett användarvänligt gränssnitt, uppdelat i fem huvudkategorier. Var och en designade för att ge relevant
          information inom dess kategori.
        </Text>
        <List>
          <ListItem>
            <b>Skogsskador:</b> Här kan användarna få uppdateringar om eventuella skador som har drabbat deras skogsfastighet, exempelvis efter stormar eller
            angrepp från skadeinsekter som granbarkborre.
          </ListItem>
          <ListItem>
            <b>Risker: </b> Denna sektion informerar om potentiella risker mot skogen, såsom hög brandrisk eller områden med ökas risk för insektsangrepp.
          </ListItem>
          <ListItem>
            <b>I närheten:</b> Ger uppdateringar om händelser eller relevanta aktiviteter som sker i skogsfastighetens närområde.
          </ListItem>
          <ListItem>
            <b>Väder:</b> En sida som tillhandahåller relevant väderinformation anpassad specifikt efter vart skogsfastigheten ligger någonstans.
          </ListItem>
          <ListItem>
            <b>Vindanalys:</b> Erbjuder en analys av hur vinden rör sig över fastigheten och hur den har gjort det över tid, vilket kan vara avgörande för att
            bedöma risker som vindfällen.
          </ListItem>
        </List>
        <Text>
          Tanken med produkten är att erbjuda realtidsuppdatering av skogsfastigheten. Användare ska kunna få en notis om något har inträffat eller håller på
          att inträffa, och var i skogen det har skett och därmed kunna agera.
        </Text>
      </Section>
      <Section title="Research">
        <Text>
          Den traditionella "research-fasen" med bland annat användarundersökning eller marknadsanalyser har vi inte följt i detta projekt. Utan istället har
          den varit en kontinuerlig process av kunskap genom intern expertis. Insikterna som har drivit produkt utvecklandet har kommit från flera års
          erfarenhet från skogsbranschen hos de inblandade personerna, framför allt genom täta möten med stakeholders, produktägare och utvecklare.
        </Text>
        <Text>
          Dessa personer besitter mycket kunskap om skogsägarens behov, utmaningar och vardag (äger skog själva). Genom strukturerade workshops och diskussioner
          med dem har jag fått mycket bra information som verkligen skapar värde för vår målgrupp. Det handlar om att våga prova något nytt som inte riktigt
          finns och att utmana skogsbranschen i sig. Det är genom dessa gemensamma insikter och delade erfarenheter som har gett mig den nödvändiga förståelsen
          för hur produkten ska utvecklas och vilka specifika funktioner den behöver för att uppfylla skogsägarens behov på bästa sätt.
        </Text>
      </Section>
      <Section title="Designprocessen">
        <Text>
          Min roll som UX-designer handlade om att ta in alla dessa idéer och att förvandla dem till en fungerande och visuell produkt. Min process har varit
          allt ifrån rak och det har varit riktigt berg och dalbana med många iterationer längs vägen.
        </Text>
        <List>
          <ListItem>
            Första skisserna jag började med var väldigt enkla wireframes. Det var dels för att få ner grundstrukturen och hur de olika delarna av produkten
            skulle hänga ihop. Dessa enkla skisser var jättebra att visa upp för teamet för att få snabb feedback för att se om vi är på rätt spår.
          </ListItem>
          <ListItem>När vi väl satte grunden, började jag bygga upp mer interaktiva prototyper i Figma, för att testa flöden och interaktioner. </ListItem>
          <ListItem>
            Iterera. Genom hela projektet har det varit en ständig process där jag har visat upp mina prototyper för både stakeholder och utvecklare. Där har vi
            diskuterat, kastat idéer och kommit på nya och justerat designen om och om igen tills vi alla blivit nöjda. Det är så vi har kommit fram till de
            funktioner och det utseende som vi tror kommer att fungera bäst. Just att vi jobbar med något som inte finns på marknaden har gjort att vi behövt
            vara flexibla och snabbt byta bana när nya insikter har dykt upp.{' '}
          </ListItem>
        </List>
      </Section>
      <Section title="Målgrupp & designprinciper">
        <Text>
          Att designa för vår målgrupp har varit en nyckelfaktor, och en av de större utmaningarna. Våra kunder är ofta äldre, mellan 55 och 80 år och många är
          inte vana med ny teknik. Samtidigt vill Treebula att produkten ska kännas modern och “techig”. Att få ihop dessa två delar och att det ska funka har
          både varit väldigt kul och utmanande.
        </Text>
        <Text>Mina designprinciper att har varit: </Text>
        <List>
          <ListItem>
            <b>Enkelt och tydligt:</b> Gränssnittet är skapat för att vara lättförståeligt, med minimal teknisk kompetens, tydlig och konsekvent navigering.
          </ListItem>
          <ListItem>
            <b>Tillgänglighet:</b> Utgått från WCAG med tydliga kontraster och tillräckligt med utrymme för text samt CTAer.
          </ListItem>
          <ListItem>
            <b>Minimalistisk estetik med modern känsla:</b> Genom att använda en ren och modern estetik har målet varit att kommunicera innovation utan att ta
            bort grundläggande användbarhetsprinciper. Fokuset har legat mer på funktionaliteten än det visuella.
          </ListItem>
        </List>
        <Text>Genom detta har varje designbeslut utformat produktens helhet. </Text>
      </Section>
      <Section title="Användarmål">
        <Text>
          Projektet med den nya tjänsten är ett resultat av djupare insikt om hur vi kan utöka vårt utbud och hjälpa skogsägare på ett helt nytt sätt. Tack vare
          ständig utveckling av teknik kan vi nu erbjuda lösningar som tidigare inte hade varit möjligt.
        </Text>
        <Text>Våra primära användarmål har varit: </Text>
        <List>
          <ListItem>Se till att skogsägare kan känna sig trygga och lugna med vetskapen om att deras skog är övervakad.</ListItem>
          <ListItem>
            Ge dem möjlighet att få omedelbara uppdateringar om potentiella risker som brand eller angrepp av granbarkborre eller om något redan har inträffat.
          </ListItem>
          <ListItem>Möjliggöra att de direkt kan se vart i skogen det har inträffat, vilket underlättar en snabb och effektiv åtgärd.</ListItem>
        </List>
      </Section>
      <Section title="Lärdomar och reflektion">
        <Text>
          Detta projekt har varit oerhört lärorikt, speciellt vikten av flexibiliteten och anpassningen i designprocessen. Att starta ett projekt med “luddig”
          idé och forma den genom iterativa processer och konstant feedback har visat sig vara avgörande, särskilt när man utvecklar en helt ny produkt som inte
          riktigt finns än på marknaden.
        </Text>
        <Text>
          En viktig lärdom i detta projekt har varit den kontinuerliga dialogen och samarbete med alla inblandade. Att göra ett större samarbete med en gemensam
          insats har varit nyckel till framgång i detta projekt och att insikten från den traditionella research fasen inte alltid behöver vara formell och att
          den kan göras på ett annorlunda sätt. Just i detta projekt har det handlat väldigt mycket och att bygga vidare på den expertis som redan finns på
          företaget.
        </Text>
        <Text>
          Reflektionen från projektet är att ofta ska våga experimentera och iterera snabbt, snarare än att försöka planera varje steg i detalj från början. Att
          möta målgruppens behov, samtidigt som man strävar efter att följa en modern känsla har också fördjupat min förståelse för balansen mellan
          användarvänlighet och varumärke. Detta projekt har verkligen förstärkt min övertygelse om att empati för användare med kombinationen med ett öppet
          sinne för nya lösningar och ett nära samarbete är receptet för framgångsrik design.
        </Text>
      </Section>
      <Section title="Slutsats">
        <Text>
          Utvecklingen av Treebulas nya tjänst har varit en lärorik resa med nära samarbete mellan design, utveckling och affärssida. Genom att våga utmana en
          traditionell bransch och ta vara på ny teknik har vi kunnat forma en produkt som inte bara möter ett tydligt kundbehov, utan även stärker Treebulas
          position inom skogssektorn.
        </Text>
        <Text>
          Tjänsten ger skogsägarna ett helt nytt sätt att följa och hantera sin skog, direkt från mobilen. Projektet visar hur en flexibel designprocess och
          tätt samarbete med intern expertis kan leda till en värdefull och lättanvändligt produkt, även för mindre teknikvana.
        </Text>
        <Text>
          Med denna satsning tar Treebula ett stort steg i att möjliggöra digitaliseringen för skogsägare och lägger grunden för ökad kontroll, bättre insikter
          och ett mer hållbart skogsbruk.
        </Text>
      </Section>
      <Section title="Koduppgift">
        <Text>
          Som en del av mitt examensarbete har jag byggt en tillgänglig och responsiv webbapplikation i React. Syftet med applikationen är att presentera mitt
          examensarbete och samtidigt visa att jag har tänkt på tillgänglighet, både i design och hur allt fungerar. Sidan är byggd för att funka smidigt
          oavsett om man kollar på mobil, surfplatta eller dator och har en tydlig struktur som gör det enkelt att ta del av innehållet.
        </Text>
        <Text>
          <b> Tekniklösning</b>
          <br />
          Webbapplikationen är byggt med React och styled-components, projektet är uppsatt med Vite. Designen är uppdelad i två huvudsidor. En landningssida och
          en innehållssida för rapporten.
        </Text>
        <Text>
          Kodstrukturen är komponentbaserad, där layouten är anpassad för olika skärmstorlekar (dator, surfplatta och mobil). Jag har använt moderna
          CSS-principer (flexbox och media queries) för att skapa ett responsivt gränssnitt.
        </Text>
        <Text>
          <b> Tillgänglighet och UX</b>
          <br />
          För att säkerställa god tillgänglighet och användarvänlighet har jag.
        </Text>
        <List>
          <ListItem>Använd tillräckligt mycket kontrast mellan text och bakgrund.</ListItem>
          <ListItem>Skapa en tydlig visuell hierarki med rubriker, brödtext och knappar. </ListItem>
          <ListItem>Säkerställd är att allt innehåll är tillgängligt via tangentbordsnavigering.</ListItem>
          <ListItem>Använd semantiska HTML-element för bättre stöd för skärmläsare </ListItem>
          <ListItem>Testat layouten på olika enheter </ListItem>
          <ListItem>Alt-text på bild.</ListItem>
        </List>
        <Text>
          Jag har också fokuserat på en enkel navigation och minimalistisk design för att undvika kognitivt belastning och skapa en smidigt användarresa från
          första intryck till läsning av hela rapporten.
        </Text>
      </Section>
    </>
  );
};
