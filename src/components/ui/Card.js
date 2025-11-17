export default function Card({ children, ...props }) {
  return (
    <div
      {...props}
      className={`backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl rounded-xl ${props.className || ""}`}
    >
      {children}
    </div>
  );
}