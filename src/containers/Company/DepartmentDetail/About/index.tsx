import * as React from 'react';
import { Container, Title, Header, Total, Description } from './styled';
interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return(
      <Container>
          <Header>
            <Title>About</Title>
            <Total>Total: 104</Total>
          </Header>
          <Description>
              The information technology department in an organization is responsible for the architecture, hardware, software and networking of computers in the company.

              Professionals working in the department may be responsible for one area of IT for the company, such as programming, website updates or technical support.

              The IT department creates and maintains the company's website. The webmaster and other professionals in the IT department design the layout of the site, write the programming code and test the site for its usability.
          </Description>
      </Container>
  );
};

export default About;
