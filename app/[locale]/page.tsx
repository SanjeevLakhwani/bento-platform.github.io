import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { githubOrgUrl, siteUrl } from "@/lib/site-config";
import QuickLinkCard from "@/components/QuickLinkCard";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return buildMetadata({ locale, path: "", title: t("title"), description: t("tagline") });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  const cards = [
    { href: "/goals", title: t("goalsCardTitle"), description: t("goalsCardDescription") },
    { href: "/features", title: t("featuresCardTitle"), description: t("featuresCardDescription") },
    { href: "/releases", title: t("releasesCardTitle"), description: t("releasesCardDescription") },
    { href: "/roadmap", title: t("roadmapCardTitle"), description: t("roadmapCardDescription") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bento Platform",
    applicationCategory: "Data management platform",
    operatingSystem: "Any",
    description: t("tagline"),
    url: `${siteUrl}/${locale}/`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    codeRepository: githubOrgUrl,
    license: "https://www.gnu.org/licenses/lgpl-3.0.html",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-border-soft bg-brand-soft/40">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <Image
            src="/images/bento-logo.png"
            alt="Bento Platform"
            width={595}
            height={147}
            className="h-16 w-auto sm:h-20"
            priority
          />
          <p className="mt-6 w-full max-w-xl text-lg text-foreground/80 sm:text-xl">{t("tagline")}</p>
          <a
            href={githubOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {t("heroCta")}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">{t("introEyebrow")}</p>
        <h1 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">{t("introHeading")}</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/80">
          <p>
            {t.rich("intro2", {
              ga4gh: (chunks) => (
                <a
                  href="https://www.ga4gh.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline decoration-brand/40 underline-offset-2 hover:decoration-brand"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
          <p>{t("intro1")}</p>
          <p>{t("intro3")}</p>
        </div>
      </section>

      <section className="border-t border-border-soft bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t("exploreHeading")}</h2>
          <p className="mt-2 max-w-2xl text-foreground/70">{t("exploreDescription")}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <QuickLinkCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
