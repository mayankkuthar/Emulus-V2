import { type ReactNode } from "react";

export function GvSceneCard({ num, title, caption, children }: { num: string; title: string; caption: string; children: ReactNode }) {
  return (
    <article className="gv-scene">
      <div className="gv-scene-visual">
        {children}
      </div>
      <div className="gv-scene-body">
        <span className="gv-scene-num">{num}</span>
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </article>
  );
}
