import StackIcon, { IconName } from "tech-stack-icons";

export function TechIconBadge({
  iconName,
  label,
  variant = "grayscale",
}: {
  iconName: IconName;
  label: string;
  variant?: "light" | "dark" | "grayscale";
}) {
  return (
    <div className="group flex items-center gap-3">
      <StackIcon name={iconName} variant={variant} className="size-4" />

      <span className="text-sm text-zinc-200 leading-none">{label}</span>
    </div>
  );
}
