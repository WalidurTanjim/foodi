import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import Foods from "@/components/Foods/Foods";

export default function Home() {
  return (
    <section className="home">
      <Banner />
      <Categories />
      <Foods />
    </section>
  );
}
