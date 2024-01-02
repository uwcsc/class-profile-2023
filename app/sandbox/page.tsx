import Image from "next/image";

export default function Sandbox() {
  return (
    <>
      <Image src="/images/goose1.svg" alt="Goose #1" width={200} height={200} />
      <Image src="/images/goose2.svg" alt="Goose #2" width={200} height={200} />
      <Image src="/images/goose3.svg" alt="Goose #3" width={200} height={200} />
      <Image src="/images/grades.svg" alt="Grades" width={200} height={200} />
      <Image src="/images/laptop.svg" alt="Laptop" width={200} height={200} />
    </>
  );
}
