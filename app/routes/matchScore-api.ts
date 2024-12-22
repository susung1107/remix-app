// .ts, .js 는 ui를 렌더링 하지 않으면 이렇게 작성도 가능하다.

export async function loader() {
  const scores = [
    { id: 1, team: "Team1", goals: 3, some_key: "some_value" },
    { id: 2, team: "Team2", goals: 2, some_key: "some_value" },
  ];

  return scores;
}
