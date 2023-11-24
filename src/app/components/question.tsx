interface QuestionProps {
  question: string
}

export default function Question({
  question
}: QuestionProps): JSX.Element {
  return (
    <div className="pt-24">
      {question}
    </div>
  );
}
