export default function ProductTile({ product, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br ${product.color} ${className}`}
    >
      <span className="select-none" style={{ fontSize: "clamp(2.5rem, 12vw, 5rem)" }}>
        {product.emoji}
      </span>
    </div>
  );
}
