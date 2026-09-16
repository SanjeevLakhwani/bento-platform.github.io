import type { Metadata } from "next";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site-config";

const target = `/${routing.defaultLocale}/`;

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: `${siteUrl}${target}` },
};

export default function RootRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <main className="flex min-h-screen items-center justify-center p-8 text-center">
        <p className="max-w-sm">
          Redirecting… <Link href={target}>Continue to the Bento Platform site</Link>
        </p>
      </main>
    </>
  );
}
