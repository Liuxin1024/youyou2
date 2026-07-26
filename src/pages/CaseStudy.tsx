import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  getAdjacentCases,
  getCaseBySlug,
  getPublishedCases,
} from "../data/cases";
import { CaseHero } from "../components/case/CaseHero";
import { CaseStrategy } from "../components/case/CaseStrategy";
import { CaseSystem } from "../components/case/CaseSystem";
import { CaseShowcase } from "../components/case/CaseShowcase";
import { CaseTakeaway } from "../components/case/CaseTakeaway";
import { CaseFooterNav } from "../components/case/CaseFooterNav";

export default function CaseStudyPage() {
  const { slug = "" } = useParams();
  const study = getCaseBySlug(slug);
  const published = getPublishedCases();
  const isPublished = published.some((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study || !isPublished) {
    return <Navigate to="/#work" replace />;
  }

  const { prev, next } = getAdjacentCases(slug);

  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <CaseHero study={study} />
      <CaseStrategy steps={study.strategy} />
      <CaseSystem items={study.system} />
      <CaseShowcase blocks={study.showcase} />
      <CaseTakeaway text={study.takeaway} />
      <CaseFooterNav prev={prev} next={next} />
    </main>
  );
}
