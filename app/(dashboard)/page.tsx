import { OverallsTotalsContainer, PagesCardsContainer } from "@/components/dashboard";

export default async function Page() {
  return (
  <section className="w-full py-6 grid grid-cols-dashboard-mobile">
    <OverallsTotalsContainer />
    <PagesCardsContainer />
  </section>)
}
