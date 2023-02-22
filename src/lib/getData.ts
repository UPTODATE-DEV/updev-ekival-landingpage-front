export async function getData(url: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}?populate=deep`);
  return await res.json();
}
