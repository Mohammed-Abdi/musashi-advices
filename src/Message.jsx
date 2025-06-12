function Message(props) {
  return (
    <p>
      <span>you have read</span> {props.count} <span>pieces of advice</span>
    </p>
  );
}

export default Message;
