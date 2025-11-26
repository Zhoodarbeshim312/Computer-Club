"use client";
import scss from "./Zones.module.scss";
import { zonesData } from "./ZonesData";

interface ZonesProps {
  zoneParam: string;
}

const Zones = ({ zoneParam }: ZonesProps) => {
  const zone = zonesData.find((z) =>
    z.name.toLowerCase().includes(zoneParam.toLowerCase())
  );

  if (!zone) return <p>Zone not found</p>;

  const rows = Array.from({ length: 4 }, (_, rowIndex) => (
    <div key={rowIndex} className={scss.row}>
      {Array.from({ length: 10 }, (_, seatIndex) => (
        <div key={seatIndex} className={scss.seat}>
          {seatIndex + 1}
        </div>
      ))}
    </div>
  ));

  return (
    <div className={scss.Zones}>
      <h2>Characteristics</h2>
      <div className={scss.characteristics}>
        <div>
          <h3>Monitor</h3>
          <ul>
            <li>Type: {zone.monitor.type}</li>
            <li>Refresh Rate: {zone.monitor.refreshRate}</li>
            <li>Support: {zone.monitor.support}</li>
            <li>Usage: {zone.monitor.usage}</li>
          </ul>
        </div>
        <div>
          <h3>System Unit</h3>
          <ul>
            <li>Processor: {zone.system.processor}</li>
            <li>Graphics: {zone.system.graphics}</li>
            <li>RAM: {zone.system.ram}</li>
            <li>Storage: {zone.system.storage}</li>
            <li>Motherboard: {zone.system.motherboard}</li>
            <li>Cooling: {zone.system.cooling}</li>
            <li>Power Supply: {zone.system.powerSupply}</li>
            <li>Case: {zone.system.case}</li>
          </ul>
        </div>
      </div>

      <h2>Seating Rows</h2>
      <div className={scss.rows}>{rows}</div>
    </div>
  );
};

export default Zones;
