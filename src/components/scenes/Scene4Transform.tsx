import svgRaw from "@/assets/scene4_chaos_to_clarity.svg?raw";

export function Scene4Transform() {
  return <div dangerouslySetInnerHTML={{ __html: svgRaw }} className="w-full h-full [&_svg]:w-full [&_svg]:h-full [&_svg]:block" />;
}
