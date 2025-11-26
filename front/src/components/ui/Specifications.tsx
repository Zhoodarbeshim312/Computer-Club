import { LuMonitorSpeaker } from "react-icons/lu";
import scss from "./Specifications.module.scss";

interface Zone {
  name: string;
  monitor: {
    type: string;
    refreshRate: string;
    support: string;
    usage: string;
  };
  system: {
    processor: string;
    graphics: string;
    ram: string;
    storage: string;
    motherboard: string;
    cooling: string;
    powerSupply: string;
    case: string;
  };
}

interface Props {
  zone: Zone;
}

const Specifications = ({ zone }: Props) => {
  return (
    <section className={scss.Specifications}>
      <div className={scss.content}>
        <h1 className={scss.title}>
          <LuMonitorSpeaker className={scss.icon} />
          {zone.name} Specifications
        </h1>
        <div className={scss.specifications}>
          <div className={scss.card}>
            <h2>Monitor</h2>
            <ul>
              <li>Type: {zone.monitor.type}</li>
              <li>Refresh Rate: {zone.monitor.refreshRate}</li>
              <li>Support: {zone.monitor.support}</li>
              <li>Usage: {zone.monitor.usage}</li>
            </ul>
          </div>
          <div className={scss.card}>
            <h2>System Unit</h2>
            <ul>
              <li>Processor: {zone.system.processor}</li>
              <li>Graphics Card: {zone.system.graphics}</li>
              <li>RAM: {zone.system.ram}</li>
              <li>Storage: {zone.system.storage}</li>
              <li>Motherboard: {zone.system.motherboard}</li>
              <li>Cooling: {zone.system.cooling}</li>
              <li>Power Supply: {zone.system.powerSupply}</li>
              <li>Case: {zone.system.case}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
