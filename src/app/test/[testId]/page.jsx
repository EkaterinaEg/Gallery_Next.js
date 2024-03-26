export default function TestPage(props) {
  const {testId} = props.params;
  return (
    <div>

      <h1>I am a test page with Id! {testId}</h1>

    </div>
  );
}