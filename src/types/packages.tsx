export default interface PackageProps {
  code: string;
  content: string;
  description: string;
  id: number;
  networkProvider: { id: number; name: string };
  package_type: { id: number; title: string; value: number }[];
  price: number;
  slug: string;
  state: number;
  title: string;
}
