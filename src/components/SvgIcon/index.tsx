export interface SvgIconProps {
  iconName: string;
  color: string;
  [key: string]: string;
}

export default function SvgIcon({
  iconName,
  color = "#333",
  ...props
}: SvgIconProps) {
  const symbolId = `#${"icon"}-${iconName}`;

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
}
