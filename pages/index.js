import styles from '../styles/Home.module.css'
import {useState} from "react";

export default function Home() {

    const [data, setData] = useState({});



    const callAPI = async () => {

        fetch('https://api.github.com/users/ccooper2382/repos')
            .then(response => response.json())
            .then(data => console.log(data));



        };

  return (
      <div className={styles.container}>
          <main className={styles.main}>
              <button onClick={callAPI}> clicky</button>
          </main>
      </div>
  )
}
