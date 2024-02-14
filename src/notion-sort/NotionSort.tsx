import {Client} from '@notionhq/client';
import * as React from 'react';

export default function NotionSort() {
  const [loading, setLoading] = React.useState(false);

  async function handleClick() {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        'https://shiny-fire-0df1.tpcstld.workers.dev/',
      );
    } catch (e) {
      console.error(e);
    }
    setLoading(false);

    console.log('htht', response);
  }

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Loading' : 'Click Me'}
    </button>
  );
}
