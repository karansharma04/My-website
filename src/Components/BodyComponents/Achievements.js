import Title from "../Title";

export default function Achievements(props) {
  const achievements = [
    {
      title: "codeforces",
      body: "Candidate Master (Rating 1956) on Codeforces, among top 0.3% Coders in India.",
    },
    {
      title: "codeChef",
      body: "Max rating of 2132(5-star) on CodeChef.",
    },
    {
      title: "codeforces",
      body: "Got a global ranks of 50 out of 17763 participants in Codeforces Round 892.",
    },
    {
      title: "codeChefLunchTime",
      body: "Got a global rank of 70 in CodeChef Lunchtime.",
    },
    {
      title: "googleKickstart2022",
      body: "Got a global rank of 352 in Round G of Google Kickstart 2022 among ~13000 particicpants.",
    },
    {
      title: "googleCodeJam2022",
      body: "Got a global rank of 381 in Round 1 of Google Code Jam 2022 among ~13000 particicpants.",
    },
    {
      title: "jeeAdvanced2019",
      body: "Secured All India Rank of 510 among 1.6 million contesting candidates, one of the most prestigious competitive exams of India.",
    },
  ];

  return (
    <div
      ref={props.achievementsRef}
      className="flex flex-col gap-10 pb-8 sm:pb-16 md:pb-24 lg:pb-32"
    >
      <Title>achievements</Title>

      {achievements.map((achievement) => (
        <div key={achievement.title} className="flex flex-col sm:flex-row">
          <div className={`text-color-hover px-2`}>
            {achievement.title + ":"}
          </div>
          <div>{achievement.body}</div>
        </div>
      ))}
    </div>
  );
}
