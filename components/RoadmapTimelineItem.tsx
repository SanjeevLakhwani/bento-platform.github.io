import type { RoadmapItem } from "@/content/types";

export default function RoadmapTimelineItem({
  item,
  labels,
}: {
  item: RoadmapItem;
  labels: { target: string; comingSoon: string };
}) {
  return (
    <li className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-brand bg-white">
        <span className="h-2 w-2 rounded-full bg-brand" />
      </span>

      <div className="rounded-2xl border border-border-soft bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-semibold sm:text-xl">Version {item.version}</h2>
          <span className="rounded-full border border-dashed border-brand px-2.5 py-0.5 text-xs font-semibold text-brand">
            {item.targetDate ? `${labels.target}: ${item.targetDate}` : labels.comingSoon}
          </span>
        </div>

        {item.milestones.length > 0 && (
          <ul className="prose-list mt-4 space-y-1.5 text-foreground/80">
            {item.milestones.map((milestone) => (
              <li key={milestone}>{milestone}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
