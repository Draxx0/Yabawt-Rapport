const MissionTasks = ({ title, children }: { title: string; children: React.ReactElement }) => {
  return (
    <div className="mt-10">
      <p className="font-medium">{title}</p>
      {children}
    </div>
  );
}

export default MissionTasks;