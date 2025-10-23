const AutumnLeaves = () => {
  const leaves = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${10 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 10}s`,
    color: ['🍂', '🍁'][Math.floor(Math.random() * 2)]
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="autumn-leaf text-2xl"
          style={{
            left: leaf.left,
            animationDuration: leaf.animationDuration,
            animationDelay: leaf.animationDelay,
          }}
        >
          {leaf.color}
        </div>
      ))}
    </div>
  );
};

export default AutumnLeaves;
