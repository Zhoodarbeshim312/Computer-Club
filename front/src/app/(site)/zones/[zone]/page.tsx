"use client";
import { useParams } from "next/navigation";
const ZonePage = () => {
  const params = useParams();
  const zoneParam = params.zone;
  const zone = Array.isArray(zoneParam) ? zoneParam[0] : zoneParam || "home";
  return (
    <div className="container">
      <h1>{zone.charAt(0).toUpperCase() + zone.slice(1)} Zone</h1>
      <p>Добро пожаловать в {zone} зону нашего Computer Club!</p>
    </div>
  );
};

export default ZonePage;
