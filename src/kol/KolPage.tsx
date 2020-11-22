import styles from './KolPage.module.css';

const RANDOM_PAGE_URL =
  'https://cdn.coldfront.net/thekolwiki/index.php/Special:Random';

export default function KolPage() {
  function handleClick() {
    fetch(RANDOM_PAGE_URL, {
      method: 'HEAD',
      mode: 'no-cors',
    });

    location.href = RANDOM_PAGE_URL;
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Random Page
    </button>
  );
}
