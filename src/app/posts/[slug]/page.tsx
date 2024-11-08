import Header from "@/components/Header";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  return (
    <div>
      <Header />
      <div>My Post: {slug}</div>
    </div>
  );
}
