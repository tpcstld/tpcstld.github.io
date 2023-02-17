import * as React from 'react';
import {Helmet} from 'react-helmet';
import PageWrapper from '../info-pages/PageWrapper';

/**
 * We have some SSR shenanigans.
 */
function getFromLocalStorage(key: string): string | null {
  if (typeof window === 'undefined') return null;

  return window.localStorage.getItem(key);
}

function useOptions(ip: string): string[] {
  const [options, setOptions] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function run() {
      try {
        const response = await fetch(`http://${ip}/get-scripts`);
        const data = (await response.json()) as string[];

        setOptions(data);
      } catch (e) {
        // Do nothing
      }
    }

    run();
  }, [ip]);

  return options;
}

function useIp(): [string, (value: string) => void] {
  const [ip, setIp] = React.useState(
    () => getFromLocalStorage('ip-address') ?? '',
  );

  React.useEffect(() => {
    window.localStorage.setItem('ip-address', ip);
  }, [ip]);

  return [ip, setIp];
}

function useSelectedScript(
  options: string[],
): [string | undefined, (value: string) => void] {
  const [selected, setSelected] = React.useState<string | undefined>(() => {
    const saved = getFromLocalStorage('selected-script');
    if (saved == null) return undefined;
    if (options.find((value) => value === saved) == null) return undefined;
    return saved;
  });

  React.useEffect(() => {
    const saved = window.localStorage.getItem('selected-script');
    if (saved == null) return undefined;
    if (options.find((value) => value === saved) == null) return undefined;
    setSelected(saved);
  }, [options]);

  React.useEffect(() => {
    if (selected == null) return;

    window.localStorage.setItem('selected-script', selected);
  }, [selected]);

  return [selected, setSelected];
}

function useDelay(): [string, (value: string) => void] {
  const [delay, setDelay] = React.useState(
    () => getFromLocalStorage('run-delay') ?? '0',
  );

  React.useEffect(() => {
    window.localStorage.setItem('run-delay', delay);
  }, [delay]);

  return [delay, setDelay];
}

export default function BotterPage() {
  const [ip, setIp] = useIp();
  const options = useOptions(ip);

  const [selected, setSelected] = useSelectedScript(options);
  const [delay, setDelay] = useDelay();

  function handleStart() {
    const delayNum = parseFloat(delay);

    setTimeout(() => {
      fetch(`http://${ip}/start`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filename: selected,
        }),
      });
    }, delayNum * 1000);
  }

  function handleStop() {
    fetch(`http://${ip}/stop`, {
      method: 'POST',
    });
  }

  return (
    <PageWrapper>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Botter</title>
      </Helmet>
      <div>
        <input
          placeholder="IP Address and Port"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
        <br />
        Delay (seconds):
        <input value={delay} onChange={(e) => setDelay(e.target.value)} />
        <br />
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <br />
      </div>
    </PageWrapper>
  );
}
