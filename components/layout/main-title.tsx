import TextEffect from 'components/text-effect';
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
      <TextEffect
        text={SITE_NAME}
        className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
      />
      <Balancer as="h1" className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">
        An e-commerce shop built with <br />
        everything new in{' '}
        <Link href="https://nextjs.org/" target="_blank" className="link-underline">
          Next.js
        </Link>
      </Balancer>

      <Balancer className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
        Lorem ipsum dolor sit amet
      </Balancer>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/products"
          className="button-style bg-customViolet px-4 py-2 text-white hover:bg-customViolet/70"
        >
          Buy now
          <span className="sr-only">Buy now</span>
        </Link>
        <Link
          href="/dashboard/stores"
          className="button-style h-10 bg-black px-4 py-2 text-white hover:bg-black/50"
        >
          Sell now
          <span className="sr-only">Sell now</span>
        </Link>
      </div>
    </section>
  );
};

export default MainTitle;
