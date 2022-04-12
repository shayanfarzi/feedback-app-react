function RatingSelect({ select, selected }) {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
  };

  return (
    <div>
      <div></div>
    </div>
  );
}

export default RatingSelect;
