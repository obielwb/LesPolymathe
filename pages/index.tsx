import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

type TopicImageProps = {
  image: string;
  oddOrPair: string;
}

const TopicImage = (props: TopicImageProps) => {
  return (
    <div className={`topic ${props.oddOrPair}`}>

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
          <p></p>

          <div id="topics">
            <TopicImage image="#" oddOrPair="odd"/>
            <TopicImage image="#" oddOrPair="pair"/>
            <TopicImage image="#" oddOrPair="odd"/>
            <TopicImage image="#" oddOrPair="pair"/>
            <TopicImage image="#" oddOrPair="odd"/>
          </div>
        </section>
        <section className="why-subscribe">
          <h2>Why learn so many things?</h2>
        </section>
        <section className="final-subscribe-area">

        </section>
      </div>
    </div>
  );
};

export default Home;
