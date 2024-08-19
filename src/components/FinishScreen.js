function FinishScreen({ points, allPoints, dispatch }) {
  const percentage = (points / allPoints) * 100;
  return (
    <>
      <div className="result">
        You scored <strong>{points}</strong> out of {allPoints} {Math.ceil(percentage)}%
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "15px" }}>
        <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
          Restart quiz
        </button>
      </div>
    </>
  );
}

export default FinishScreen;
