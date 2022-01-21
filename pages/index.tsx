import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';

import LibertyLeadingThePeople from '../assets/liberty-leading-the-people.svg';
import DaVinciSketches from '../assets/DaVinciSketches.svg';

import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import Model from '../components/Thinker';
import { RegisterButton } from '../components/registerButton';
import { KnowledgeTopic } from '../components/knowledgeTopic';
import { line1, line2, line3, line4 } from '../utils/topics';



const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  });
  return (
    <div>
      <main className="app">
        <section className="initial">
          {/* <Canvas>
            <OrbitControls enableZoom={false} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Model/>
            </Suspense>
          </Canvas> */}
          <div id="title">
            <h1>Explore <br/>Knowledge</h1>
            <div className="trace" data-aos="fade-right"></div>
          </div>
        </section>
        <RegisterButton className="register-button">Register in the Newsletter</RegisterButton>
        <div id="blur">
        </div>
        <section className="resume">
          <div id="propose-text">
            <div id="propose-text-title">
              <p>The Propose</p>
              <br />
            </div>
            <div id="propose-text-body">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                <br />
                <br />
                id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </p>
            </div>
          </div>
          <Image className="propose-image" src={LibertyLeadingThePeople} alt="Liberty Leading the People - Art"></Image>
        </section>
        <section className="topics">
          <div className={`line line-odd`} id={`line1`}>
            {line1.map(topic => {
              return (
                <KnowledgeTopic title={topic.title}/>
              )
            })}
          </div>
          <div className={`line line-pair`} id={`line2`}>
            {line2.map(topic => {
              return (
                <KnowledgeTopic title={topic.title}/>
              )
            })}
          </div>
          <div className={`line line-odd`} id={`line3`}>
            {line3.map(topic => {
              return (
                <KnowledgeTopic title={topic.title}/>
              )
            })}
          </div>
          <div className={`line line-pair`} id={`line4`}>
            {line4.map(topic => {
              return (
                <KnowledgeTopic title={topic.title}/>
              )
            })}
          </div>
          <p>lorem Ipslum os serifaire aslqual</p>
        </section>
        <section className="final-register-area">
          <Image src={DaVinciSketches} className="da-vinci-sketches-image"></Image>
        </section>
      </main>
    </div>
  );
};

export default Home;
