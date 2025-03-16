import { universities } from './data';

export function generateStaticParams() {
  return universities.map((university) => ({
    id: university.id,
  }));
}

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}