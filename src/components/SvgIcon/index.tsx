import { CSSProperties } from "react";
import styles from "./index.module.scss";
import { CSSOptions } from "vite";

export interface SvgIconProps {
  iconName: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const SvgIcon = ({ iconName, style, className, onClick }: SvgIconProps) => {
  const symbolId = `#icon-${iconName}`;

  const svgClass = () => {
    if (className) {
      return `${className} ` + styles.icon;
    } else {
      return styles.icon;
    }
  };

  return (
    <svg
      className={svgClass()}
      aria-hidden="true"
      style={style}
      onClick={onClick}
    >
      <use xlinkHref={symbolId} />
    </svg>
  );
};
export default SvgIcon;
