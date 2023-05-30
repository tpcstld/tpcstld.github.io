import * as React from 'react';
import {createWorker} from 'tesseract.js';

import {useSavedValue} from '../utils/StorageUtils';

import beep from './beep.wav';

import styles from './MonitorPage.module.css';

const FPS = 1;

function useWorker() {
  const workerRef = React.useRef(null);

  React.useEffect(() => {
    async function runAsync() {
      const worker = await createWorker({
        logger: (m) => console.log(m),
      });
      await worker.loadLanguage('eng');
      await worker.initialize('eng');

      workerRef.current = worker;
    }

    runAsync();

    return () => {
      workerRef.current.terminate();
    };
  }, []);

  return workerRef;
}

export default function MonitorPage() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const textRef = React.useRef<HTMLTextAreaElement>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const workerRef = useWorker();

  const lastLines = React.useRef<number>(0);

  const [started, setStarted] = React.useState(false);

  const [left, setLeft] = useSavedValue('monitor-left', '0');
  const [top, setTop] = useSavedValue('monitor-top', '0');
  const [width, setWidth] = useSavedValue('monitor-width', '100');
  const [height, setHeight] = useSavedValue('monitor-height', '100');

  const handleStartPressed = React.useCallback(async () => {
    if (started) {
      setStarted(false);
      return;
    }

    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
    });

    if (videoRef.current == null) {
      return;
    }

    videoRef.current.srcObject = stream;
    setStarted(true);
  }, [started]);

  const runMonitor = React.useCallback(async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas == null || video == null) {
      return;
    }

    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(
      video,
      0,
      0,
      video.videoWidth,
      video.videoHeight,
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height,
    );

    const imageData = ctx.getImageData(left, top, width, height);

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.putImageData(imageData, 0, 0);

    const img = canvas.toDataURL('image/png');

    const result = await workerRef.current.recognize(img);
    if (!('data' in result)) {
      return;
    }

    const data = result.data;

    textRef.current.value = data.text;
    if (data.lines.length > 1 && data.lines.length > lastLines.current) {
      audioRef.current.play();
    }

    lastLines.current = data.lines.length;
  }, [left, top, width, height]);

  React.useEffect(() => {
    if (!started) {
      return;
    }

    const id = setInterval(runMonitor, 1000 / FPS);

    return () => {
      clearInterval(id);
    };
  }, [started, runMonitor]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder="left"
        />
        <input
          type="number"
          value={top}
          onChange={(e) => setTop(e.target.value)}
          placeholder="top"
        />
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="width"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="height"
        />
        <button onClick={handleStartPressed}>
          {started ? 'End' : 'Start'}
        </button>
      </div>
      <div>
        <canvas ref={canvasRef} className={styles.canvas} width="2000" />
        <textarea ref={textRef} />
      </div>
      <video ref={videoRef} autoPlay muted crossOrigin="anonymous" />
      <audio ref={audioRef} src={beep} />
    </div>
  );
}
