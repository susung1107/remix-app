import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const scores = [
    { id: 1, team: "Team1", goals: 3, some_key: "some_value" },
    { id: 2, team: "Team2", goals: 2, some_key: "some_value" },
  ];

  return scores;
}

export default function MatchScore() {
  const scores = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Match Score</h1>
      {scores.map((score) => (
        <div key={score.id}>
          <ul>
            <li>
              TeamName : {score.team} Goals : {score.goals}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
