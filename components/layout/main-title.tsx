import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';
const { SITE_NAME } = process.env;

// import { buttonVariants } from '@/components/ui/button';

const MainTitle = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto flex w-full flex-col items-center justify-center gap-4 py-12 text-center md:pt-32"
    >
      <Balancer
        as="h1"
        className="hover:drop-shadow-glow text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {SITE_NAME}
      </Balancer>
      <Balancer as="h1" className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        An e-commerce shop built with <br />
        everything new in Next.js
      </Balancer>

      <Balancer className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
        An e-commerce skateshop built with everything new in Next.js
      </Balancer>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/products"
          className="button-style bg-taupe hover:bg-taupe/70 h-10 px-4 py-2 text-black"
        >
          Buy now
          <span className="sr-only">Buy now</span>
        </Link>
        <Link
          href="/dashboard/stores"
          className="button-style h-10 bg-black px-4 py-2 hover:bg-black/70"
        >
          Sell now
          <span className="sr-only">Sell now</span>
        </Link>
      </div>
    </section>
  );
};

export default MainTitle;
