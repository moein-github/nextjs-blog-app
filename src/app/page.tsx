import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
