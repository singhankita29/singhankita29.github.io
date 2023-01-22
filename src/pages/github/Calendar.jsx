import React from 'react';
import GitHubCalendar from "react-github-calendar";
import "./SkillStyles.css";
import Container from "react-bootstrap/Container";
import { Stats } from './Stats';


export const Calendar = () => {
  return (
    <Container>
      <h1 className="pt-3 text-center font-details-b pb-3">Github Calender</h1>
      <Container style={{ backgroundColor: "#15161e"}} >
        <GitHubCalendar username="singhankita29" />
      </Container>

      <Container>
        <Stats/>
      </Container>
    </Container>
  );
}

