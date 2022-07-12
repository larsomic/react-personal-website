import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Header from "./Header.js"

const Resume = () => {
    return (
        <div style={{height:"100%"}}>
            <Header/>
            <div className='fullPageCard'>
                <p>Michael Larson</p>
                <hr/>
                <p>Personal Page: http://mikelarson.pythonanywhere.com</p>
                <p>LinkedIn: https://www.linkedin.com/in/larson2/</p>
                <p>Education</p>
                <p>Washington State University</p>
                <p>August 2018 to December 2022</p>
                <p>Bachelor of Science in Software Engineering</p>
                <p>Minor in Mathemtics</p>
                <p>Member of the Software Engineering and the Association for Computing Machinery club</p>
                <p>Experience</p>
                <p>Software Engineering Intern | Meter Group Inc.</p>
                <p>April 2021 to Present</p>
                <p>Created an automated acceptance testing suite using Robot Framework to reduce testing time at release.</p>
                <p>Restructured front end design using JavaScript, CSS, and HTML to fix bugs that effected over 3,000 users.</p>
                <p>Redesigned PostgreSQL queries leading to an over 2000% speed up for front end users.</p>
                <p>App Develoment Intern | YumYum Morale</p>
                <p>October 2020 to March 2021</p>
                <p>Propelled the creation of a deployable website to facilitate the needs of Yum Yum Morale.</p>
                <p>Coordinated a team of three interns to develop a web-application using Django and Python.</p>
                <p>Shaped the interface of the application by communicating with superiors and implementing their desires.</p>
                <p>Teachers Assistant | Washington State University</p>
                <p>August 2019 to May 2020</p>
                <p>Guided and facilitated students for both Computer Science 121 and 122.</p>
                <p>Operated a weekly lab session, held biweekly office hours, and graded student's homework.</p>
                <p>Supervised 10 students a semester to a 92% pass rate.</p>
                <p>Python</p>
                <p>C/C++</p>
                <p>Git</p>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>Linux</p>
                <p>Django</p>
                <p>Related Coursework</p>
                <p>CS 360: Systems Programming in C/C++</p>
                <p>CS 321: Object-Oriented Software Principles</p>
                <p>CS 355: Programming Language and Design</p>
                <p>CS 350: Design & Analysis of Algorithms</p>
                <p>Projects</p>
                <p>AI STOCK MARKET TRADER (PERSONAL PROJECT)</p>
                <p>Collaborated on a Q-Learning bot that actively trades on the FOREX market. This project was written in python using the Oanda API.</p>
                <p>MUSIC VIDEO GENERATOR (WSU HACKATHON 2020)</p>
                <p>Directed a small group designing a program that would parse an audio file into words, utilizing Python and the Google Cloud Text-to-Speech API, then convert that into a lyric video that synced up with the song.</p>
                <p>MULTITHREADED HASH TABLE (CPT_S 223 PROJECT)</p>
                <p>Partnered with a classmate to implement a probing hash table with multithreading which led to 200% faster run times. Implemented a custom hash function and table using C++ and OpenMP.</p>
                <p>DJANGO WEBSITE (PERSONAL PROJECT)</p>
                <p>Authored a personal website to help find jobs and show off my projects. This project utilized Python and Django web framework. My website is found at http://mikelarson.pythonanywhere.com</p>
            </div>
        </div>
  );
};
export default Resume;