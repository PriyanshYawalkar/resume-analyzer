interface AnalysisResultProps {
    score: number;
    suggestions: string[];
    mistakes: string[];
  }
  
  const AnalysisResult: React.FC<AnalysisResultProps> = ({ score, suggestions, mistakes }) => {
    return (
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-lg font-bold">Analysis Result:</h2>
        <p>Score: {score}/10</p>
        <h3 className="font-bold mt-2">Suggestions:</h3>
        <ul>
          {suggestions.map((s, i) => (
            <li key={i}>- {s}</li>
          ))}
        </ul>
        <h3 className="font-bold mt-2">Mistakes:</h3>
        <ul>
          {mistakes.map((m, i) => (
            <li key={i}>- {m}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AnalysisResult;
  