import Image from "next/image";
import type { FeatureItem } from "@/content/types";
import { withBasePath } from "@/lib/site-config";

const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/bento_public1.png": { width: 1774, height: 988 },
  "/images/bento_public2.png": { width: 1773, height: 980 },
  "/images/bento_authenticated1.png": { width: 2445, height: 649 },
  "/images/bento_authenticated2.png": { width: 2435, height: 1074 },
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
