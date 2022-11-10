export default function Product(props) {
  const { details } = props;

  return (
    <div>
      <h4>{details.name}</h4>
      <h4>{details.description}</h4>
    </div>
  );
}
