import React from 'react';
// import "./SkillContentStyles.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export const Stats = () => {
  
  return (
    <Container>
      <h1 className="pt-3 text-center font-details-b pb-3">Github Stats</h1>
      <Container>
        <Image
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=singhankita29&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark"
          alt="ayush"
          width={"55%"}
        />
        <Image
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=singhankita29&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=dark"
          alt="ayush"
          width={"42%"}
        />
      </Container>
    </Container>
  );
}