import svgRaw from "@/assets/scene1_weight_of_paper.svg?raw";

export function Scene1Problem() {
  return <div dangerouslySetInnerHTML={{ __html: svgRaw }} className="w-full h-full [&_svg]:w-full [&_svg]:h-full [&_svg]:block" />;
}
