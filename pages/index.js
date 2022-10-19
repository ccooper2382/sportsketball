import styles from '../styles/Home.module.css'

export default function Home() {
    const callAPI = async () => {

            const res = await fetch("https://v3.football.api-sports.io/countries", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
                }
            })
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
        };

  return (
      <div className={styles.container}>
          <main className={styles.main}>
              <button onClick={callAPI}>Make API Call</button>
          </main>
      </div>
  )
}
