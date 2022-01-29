import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

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
                <input type="text" name="userName" id="user-name" maxLength={20} placeholder="Name" />
                <input type="email" value="" placeholder="youremail@example.com" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </main>
        </section>
        <section className="presentation">

        </section>
        <section className="why-subscribe">

        </section>
        <section className="final-subscribe-area">

        </section>
      </div>
    </div>
  );
};

export default Home;
