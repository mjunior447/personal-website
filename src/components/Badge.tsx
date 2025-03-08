interface BadgeProps {
  content: string;
}

const Badge = ({ content }: BadgeProps) => {
  return (
    <div className="bg-blue-500/10 text-blue-400 text-center rounded-2xl px-2 py-1">
      {content}
    </div>
  );
};

export default Badge;
