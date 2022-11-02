import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Calender = () => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
  return (
 <Container>
  <Row>
 <Col>
 <GitHubCalendar 
username="singhankita29" 
transformData={selectLastHalfYear} 
hideTotalCount 
hideColorLegend />
</Col>
<Col>
<Container>
      <Image alt="" 
       src="https://activity-graph.herokuapp.com/graph?username=singhankita29&theme=vue" thumbnail fluid />
 </Container>
</Col>
 </Row>
</Container> 
  )
}

export default Calender;


