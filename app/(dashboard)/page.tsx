import { OverallsTotalsContainer, PagesCardsContainer } from "@/components/dashboard";

export default async function Page() {
  return (
    <section className="w-full py-6 grid grid-cols-dashboard-mobile sm-tablet:py-8 sm-tablet:grid-cols-dashboard-tablet">
      <OverallsTotalsContainer />
      <PagesCardsContainer />
    </section>
  );
}
