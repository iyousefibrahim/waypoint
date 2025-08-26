import Navbar from "../components/PageNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.homepage}>
        <section>
          <h1>
            You travel the world.
            <br />
            WayPoint keeps track of your adventures.
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
        </section>
      </main>
    </>
  );
}

export default Home;
