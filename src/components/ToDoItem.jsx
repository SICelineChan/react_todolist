/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
