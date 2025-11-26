"use client";
import ZonesPage from "@/components/pages/ZonesPage";
import { useParams } from "next/navigation";

const ZonePage = () => {
  const params = useParams();
  const zoneParam = params.zone;
  const zoneName: string | undefined = Array.isArray(zoneParam)
    ? zoneParam[0]
    : zoneParam;

  if (!zoneName) {
    return <p>Zone not found</p>;
  }

  return (
    <div className="container">
      <h1>{zoneName.charAt(0).toUpperCase() + zoneName.slice(1)} Zone</h1>
      <p>Welcome to the {zoneName} Zone of our Computer Club!</p>
      <ZonesPage zoneParam={zoneName} />
    </div>
  );
};

export default ZonePage;
