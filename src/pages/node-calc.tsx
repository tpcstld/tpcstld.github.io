import {ChangeEvent, useCallback, useState} from 'react';
import {Helmet} from 'react-helmet';

type NodeType = [string, string, string];
type Histogram = Record<string, number>;
type SkillsList = Set<string>;

function getStarter(skillsList: SkillsList): Histogram {
  return Object.assign(
    {},
    ...[...skillsList.keys()].map((skill) => ({[skill]: 0})),
  );
}

function getHistogram(
  skillsList: SkillsList,
  nodes: Array<NodeType>,
): Record<string, number> {
  const answer = getStarter(skillsList);

  for (const node of nodes) {
    for (const skill of node) {
      answer[skill] = answer[skill] + 1;
    }
  }

  return answer;
}

function nodesMet(histogram: Histogram): number {
  let answer = 0;
  for (const key in histogram) {
    answer = answer + histogram[key];
  }

  return answer;
}

type Result = [Array<NodeType>, Histogram];

function calculateBestNodes(
  skillsList: SkillsList,
  availableNodes: Array<NodeType>,
  usedNodes: Array<NodeType>,
): Result | null {
  const answer = [...usedNodes];
  const histogram = getHistogram(skillsList, answer);

  const firstNodes = new Set<string>();
  for (const node of usedNodes) {
    if (firstNodes.has(node[0])) {
      return null;
    }

    firstNodes.add(node[0]);
  }

  if (availableNodes.length === 0) {
    return [answer, histogram];
  }

  for (const key in histogram) {
    if (histogram[key] > 2) {
      return null;
    }
  }

  if (nodesMet(histogram) === 18) {
    return [answer, histogram];
  }

  let bestNumNodes: number = answer.length;
  let bestResult: Result = [answer, histogram];

  for (const node of availableNodes) {
    const attempt = [...answer, node];
    const newAvailable = [...availableNodes].filter((n) => n !== node);

    const result = calculateBestNodes(skillsList, newAvailable, attempt);
    if (result == null) {
      continue;
    }
    const [, resultHistogram] = result;
    const numNodes = nodesMet(resultHistogram);

    if (numNodes > bestNumNodes) {
      bestNumNodes = numNodes;
      bestResult = result;
    }
  }

  return bestResult;
}

interface UserInput {
  nodes: Array<NodeType>;
  skills: SkillsList;
}

function parseInput(input: string): UserInput {
  const lines = input.split('\n');

  const nodes: Array<NodeType> = [];
  const skills = new Set<string>();

  for (const line of lines) {
    if (line === '' || line.startsWith('#')) {
      continue;
    }

    const n = line.split(' ');
    if (n.length !== 3) {
      throw new Error('Bad Parsing');
    }

    for (const skill of n) {
      skills.add(skill);
    }

    nodes.push(n as [string, string, string]);
  }

  return {
    nodes,
    skills,
  };
}

function ResultView({result}: {result: Result | null}) {
  if (result == null) {
    return null;
  }

  const [nodes, histogram] = result;

  return (
    <div style={{marginTop: '32px'}}>
      <span>Nodes:</span>
      <ul>
        {nodes.map((node, i) => (
          <li key={i}>{JSON.stringify(node)}</li>
        ))}
      </ul>
      <span>Allocation:</span>
      <table style={{marginLeft: '32px'}}>
        {Object.entries(histogram).map(([node, num]) => (
          <tr key={node}>
            <td>{node}</td>
            <td>{num}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default function NodeCalcPage() {
  const [result, setResult] = useState<[Array<NodeType>, Histogram] | null>(
    null,
  );
  const [working, setWorking] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setInput(event.target.value);
    },
    [],
  );

  function test() {
    setWorking(true);
    setTimeout(() => {
      try {
        const userInput = parseInput(input);
        setResult(calculateBestNodes(userInput.skills, userInput.nodes, []));
        setError(null);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Unknown error');
        }
      }
      setWorking(false);
    }, 0);
  }

  return (
    <div>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Maplestory TriNode Solver</title>
        <meta name="description" content="Thinking is too hard." />
      </Helmet>
      <div>Instructions:</div>
      <ol>
        <li>Figure out what your perfect tri skills are.</li>
        <li>Make up some stable shorthand names for each skill.</li>
        <li>Write down each nodestone using your shorthands with 3 perfect tri skills. Space between each skill. Newline between each node.</li>
        <li>Solve!</li>
      </ol>
      <div>
        <textarea
          value={input}
          onChange={handleChangeInput}
          placeholder={'SkillA SkillB SkillC\nSkillD SkillE SkillF'}
        />
        <br />
        <button onClick={test} disabled={working}>
          {working ? 'Solving...' : 'Solve'}
        </button>
        {error != null ? <span>{error}</span> : null}
        <ResultView result={result} />
      </div>
    </div>
  );
}
