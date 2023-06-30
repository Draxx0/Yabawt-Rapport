const MissionTasks = ({ title, children }: { title: string; children: React.ReactElement }) => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg">Tâches</p>
        <p className="font-medium">{title}</p>
      </div>
      {children}
    </div>
  );
}

export default MissionTasks;