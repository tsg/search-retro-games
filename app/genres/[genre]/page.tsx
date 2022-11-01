import styles from '../../page.module.css';
import { getXataClient } from "../../../util/xata";
const xata = getXataClient();


export default async function Page({params}: any) {
    console.log("GENRE", params.genre, JSON.stringify(params.genre));

    const result = await xata.db.games
    .filter({ genres: { "$includes": `"Puzzle"` } })
      .getPaginated();

      console.log(result);
    
      const {records} = result;

    return (<div className={styles.container}>
        <main className={styles.main}>
        <div className={styles.grid}>
            <h2>{params.genre}</h2>
            {records.length}
          {records.map(g => 
            <a href={g.url || ""} className={styles.card} >
              <h2>{g.name}</h2>
              <p>{g.console}</p>
            </a>
          )}
        </div>
        </main>
        </div>);
}
