export function getImage(media: Image) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${media.url}`;
}

export function getImagePlaceholder(media: Image) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${media.placeholder}`;
}
