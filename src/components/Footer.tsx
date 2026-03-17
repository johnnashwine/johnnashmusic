import { Youtube } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border py-12 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="font-display text-foreground text-lg">John Nash</span>
      <div className="flex items-center gap-6">
        <a
          href="https://www.youtube.com/channel/UCnQSk0RLuKfu-DGO8ZpCkxw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5" />
        </a>
      </div>
      <span className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} John Nash. All rights reserved.
      </span>
    </div>
  </footer>
);
