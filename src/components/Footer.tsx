export function Footer() {
  return (
    <footer className="w-full mt-28 p-4 md:px-8 border-t border-t-zinc-700 py-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <p className="text-zinc-500 text-sm">&copy;copyright {new Date().getFullYear()}</p>
        <p className="text-zinc-500 text-sm">Designed & Developed by Ahusan.</p>
      </div>
    </footer>
  );
}
