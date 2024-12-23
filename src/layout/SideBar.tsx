type SideBarProps = {
  children: React.ReactNode;
  className: string;
};
export default function SideBar({ children, className }: SideBarProps) {
  return <aside className={className}>{children}</aside>;
}
