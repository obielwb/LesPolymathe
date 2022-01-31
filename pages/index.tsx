import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import Topic1 from '../assets/topic1.svg';
import Topic2 from '../assets/topic2.svg';
import Topic3 from '../assets/topic3.svg';
import Topic4 from '../assets/topic4.svg';
import Topic5 from '../assets/topic5.svg';

type TopicImageProps = {
  image: string;
  oddOrPair: string;
}

const TopicImage = (props: TopicImageProps) => {
  return (
    <div className={`topic ${props.oddOrPair}`}>
      <Image src={props.image} layout='responsive' objectFit='contain'></Image>
    </div>
  )
}

const Home: NextPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div>
      <div className="home-app">
        <section className="landing-page">
          <aside>
            <p>Explore <br />Knowledge</p>
          </aside>
          <main className="subscription">
            <div>
              <p>Wanna receive the knowledge to became a polymath?</p>
              <p id="subscription-title">Subscribe in our <br /> newsletter</p>
              <form action="">
                <input
                  type="text"
                  name="userName"
                  id="user-name"
                  maxLength={20}
                  placeholder="Name"
                  value={userName}
                  onChange={event => setUserName(event.target.value)} />
                <input
                  type="email"
                  value={userEmail}
                  placeholder="youremail@example.com"
                  onChange={event => setUserEmail(event.target.value)} />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </main>
        </section>
        <section className="presentation">
          <h2>What is a <span>Polymath</span>?</h2>
          <p>A <span>polymath</span> is an individual whose knowledge spans a substantial number of subjects,
            being able to use them to solve the most diverse types of problems and challenges.</p>

          <div id="topics">
            <div className="topic">
              <Image src={Topic1} layout='responsive' objectFit='contain'></Image>
            </div>
            <div className="topic">
              <Image src={Topic2} layout='responsive' objectFit='contain'></Image>
            </div>
            <div className="topic">
              <Image src={Topic3} layout='responsive' objectFit='contain'></Image>
            </div>
            <div className="topic">
              <Image src={Topic4} layout='responsive' objectFit='contain'></Image>
            </div>
            <div className="topic">
              <Image src={Topic5} layout='responsive' objectFit='contain'></Image>
            </div>
          </div>
        </section>
        <section className="why-subscribe">
          <main>
            <h2>Why learn so many things?</h2>
            <section className="reasons">
              <div className="top">
                <p>We want to bring you knowledge. So that you can become a greater version of yourself,
                  being knowledgeable on many subjects and possessing many different skills.
                </p>
                <p>We want to bring you knowledge. So that you can become a greater version of yourself,
                  being knowledgeable on many subjects and possessing many different skills.
                </p>
              </div>
              <div className="bottom">
                <p>We want to bring you knowledge. So that you can become a greater version of yourself,
                  being knowledgeable on many subjects and possessing many different skills.
                </p>
                <p>We want to bring you knowledge. So that you can become a greater version of yourself,
                  being knowledgeable on many subjects and possessing many different skills.
                </p>
              </div>
            </section>
          </main>
          <p id="japanese">
            好 <br />
            奇 <br />
            心 <br />
            が <br />
            広 <br />
            が <br />
            り <br />
            ま <br />
            す</p>
        </section>
        <section className="final-subscribe-area">

        </section>
      </div>
    </div>
  );
};

export default Home;
