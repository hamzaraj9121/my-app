export default function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`w-full backdrop-blur-sm bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/20 placeholder:text-gray-600 dark:placeholder:text-gray-300 rounded-lg px-4 py-2 resize-none transition-all duration-300 ${props.className || ""}`}
    />
  );
}