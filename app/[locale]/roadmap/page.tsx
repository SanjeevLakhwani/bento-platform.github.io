import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { getRoadmap } from "@/content";
import PageHero from "@/components/PageHero";
import RoadmapTimelineItem from "@/components/RoadmapTimelineItem";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/roadmap">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "roadmap" });
  return buildMetadata({ locale, path: "roadmap", title: t("title"), description: t("description") });
}

export default async function RoadmapPage({ params }: PageProps<"/[locale]/roadmap">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;
  setRequestLocale(locale);

  const t = await getTranslations("roadmap");
  const roadmap = getRoadmap(locale);
  const labels = { target: t("target"), comingSoon: t("comingSoon") };

  return (
    <main>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <ol className="space-y-6">
          {roadmap.map((item) => (
            <RoadmapTimelineItem key={item.version} item={item} labels={labels} />
          ))}
        </ol>
      </div>
    </main>
  );
}
