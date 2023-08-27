export default function ButtonComponent({ onChange }) {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button
            onClick={() => {
              onChange('good');
            }}
          >
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onChange('neutral');
            }}
          >
            Neutral
          </button>
        </li>
        <li
          onClick={() => {
            onChange('bad');
          }}
        >
          <button>Bad</button>
        </li>
      </ul>
    </div>
  );
}
