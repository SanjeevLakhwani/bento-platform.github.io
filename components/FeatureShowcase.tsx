import Image from "next/image";
import type { FeatureItem } from "@/content/types";
import { withBasePath } from "@/lib/site-config";

const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/bento_catalogue.png": { width: 3024, height: 1612 },
  "/images/bento_counts.png": { width: 2240, height: 1420 },
  "/images/bento_exploration.png": { width: 2800, height: 1514 },
  "/images/bento_queries.png": { width: 2800, height: 1514 },
  "/images/bento_beacon.png": { width: 1400, height: 926 },
};

export default function FeatureShowcase({ feature, index }: { feature: FeatureItem; index: number }) {
  const dims = IMAGE_DIMENSIONS[feature.image] ?? { width: 1600, height: 900 };
  const reversed = index % 2 === 1;

  return (
    <article
      className={`flex flex-col items-center gap-8 lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="w-full overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-sm lg:w-3/5">
        <Image
          src={withBasePath(feature.image)}
          alt={feature.alt}
          width={dims.width}
          height={dims.height}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
      </div>
      <div className="w-full lg:w-2/5">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">{feature.eyebrow}</p>
        <p className="mt-3 text-lg text-foreground/80">{feature.caption}</p>
      </div>
    </article>
  );
}
