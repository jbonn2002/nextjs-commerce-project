import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';

// import { buttonVariants } from '@/components/ui/button';

const MainTitle = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 py-12 text-center md:pt-32"
    >
      <Balancer as="h1" className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        An e-commerce skateshop built with everything new in Next.js
      </Balancer>
      <Balancer className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
        Buy and sell skateboarding gears from independent brands and stores around the world with
        ease
      </Balancer>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/products" className="flex-none rounded-full bg-blue-600 p-2 text-white">
          Buy now
          <span className="sr-only">Buy now</span>
        </Link>
        <Link
          href="/dashboard/stores"
          className="flex-none rounded-full bg-blue-600 p-2 text-white"
        >
          Sell now
          <span className="sr-only">Sell now</span>
        </Link>
      </div>
    </section>
  );
};

export default MainTitle;
