import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/Wrapper"
export default function Home() {
  return <main>
    <HeroBanner />
    <Wrapper>
      {/* Heading and paragaph start */}
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Soy un titulo, largoooo
        </div>
        <div className="text-md md:text-xl">
          lorem ipsum dolor sit amet, consectetur
          lorem ipsum dolor sit amet, consectetur
          lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
      {/* Heading and paragaph end */}
      {/* Products grid start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
      {/* Products grid start */}
    </Wrapper>
  </main>
}
