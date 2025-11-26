// ZonesPage.tsx
import Zones from "./zones/Zones";

interface ZonesPageProps {
  zoneParam: string;
}

const ZonesPage = ({ zoneParam }: ZonesPageProps) => {
  return <Zones zoneParam={zoneParam} />;
};

export default ZonesPage;
