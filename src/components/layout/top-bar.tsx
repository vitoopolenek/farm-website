import { collaborationNotice } from "@/config/site";

export function TopBar() {
  return (
    <div className="border-b border-line bg-accent text-white">
      <div className="mx-auto max-w-7xl px-4 py-2.5 text-center text-xs leading-relaxed lg:px-8">
        <p className="opacity-95">{collaborationNotice}</p>
      </div>
    </div>
  );
}
