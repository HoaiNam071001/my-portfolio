import {
  FaReact,
  FaAngular,
  FaBootstrap,
  FaSass,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

const ICON_MAP: Record<string, IconType> = {
  FaReact,
  FaAngular,
  FaBootstrap,
  FaSass,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
};

export function TechIcon({ name, size = 16 }: { name?: string; size?: number }) {
  if (!name) return null;
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon size={size} />;
}
