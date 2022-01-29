import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Home: NextPage = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div>
      <main className="home-app">
        <section className="landing-page">

          <div className="subscription">
            <p>Wanna receive the knowledge to became a polymath?</p>
            <p id="subscription-title">Subscribe in our <br /> newsletter</p>
            <form action="">
              <input type="text" name="User name" id="user-name" placeholder="Name" />
              <input type="submit" value="" placeholder="youremail@example.com" />
              <button type="submit"></button>
            </form>
          </div>
        </section>
        <section className="presentation">

        </section>
        <section className="why-subscribe">

        </section>
        <section className="final-subscribe-area">

        </section>
      </main>
    </div>
  );
};

export default Home;
