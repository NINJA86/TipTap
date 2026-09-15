import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image
        className="mx-auto mt-8 mb-4"
        src={'/TipTapLogo.png'}
        alt="TipTap Logo"
        width={180}
        height={0}
        loading="eager"
      />
    </Link>
  );
}
