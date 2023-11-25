import { Header } from "@/components/header";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";


export default function Page() {
  return (
  <>
    <Header />
    <div className="space-y-4">
      <Content name="Aji Ery Burhandenny" age={42} gender="male" />
      <Content name="Nimas Ayu Dewi Murni" age={41} gender="female" />
      <Content name="Aji Ayyashi Dzakiyyah Nabila" age={17} gender="female" />
    </div>
    <Footer />
  </>
  );
}

