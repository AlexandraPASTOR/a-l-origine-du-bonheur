function Wave({ type }: { type: "top" | "bottom" }) {
  return (
    <img
      src={`/wave-${type}-blue.svg`}
      className="w-full block"
      alt=""
    />
  );
}
export default Wave;