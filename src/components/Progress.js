function Progress({ index, numQuestions, points, allPoints, answer }) {
  return (
    <header className="progress">
      <progress style={{ borderRadius: "15px" }} max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {allPoints}
      </p>
    </header>
  );
}

export default Progress;
