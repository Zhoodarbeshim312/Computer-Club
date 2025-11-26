// Zones.tsx
import Specifications from "@/components/ui/Specifications";
import scss from "./Zones.module.scss";

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

interface ZoneProps {
  zoneParam: string;
}

const Zones = ({ zoneParam }: ZoneProps) => {
  const zones: Zone[] = [
    {
      name: "Standard Zone",
      monitor: {
        type: "1080p IPS",
        refreshRate: "144 Hz",
        support: "HDR, FreeSync",
        usage: "Casual gaming, Streaming",
      },
      system: {
        processor: "Intel Core i5-13600K",
        graphics: "NVIDIA RTX 4060",
        ram: "32 GB DDR5",
        storage: "NVMe SSD 1 TB",
        motherboard: "B660",
        cooling: "Air Cooling",
        powerSupply: "650 W",
        case: "Mid-tower ATX",
      },
    },
    {
      name: "Comfort Zone",
      monitor: {
        type: "1440p IPS",
        refreshRate: "165 Hz",
        support: "HDR, G-Sync/FreeSync",
        usage: "Gaming 1440p, Streaming, Light Rendering",
      },
      system: {
        processor: "Intel Core i7-13700K",
        graphics: "NVIDIA RTX 4070",
        ram: "64 GB DDR5",
        storage: "NVMe SSD 2 TB",
        motherboard: "Z790",
        cooling: "Air / Liquid 240 mm",
        powerSupply: "750 W",
        case: "Mid / Full-tower ATX",
      },
    },
    {
      name: "VIP Zone",
      monitor: {
        type: "4K OLED",
        refreshRate: "240 Hz",
        support: "HDR, G-Sync/FreeSync",
        usage: "4K Gaming, Streaming, 3D Rendering",
      },
      system: {
        processor: "AMD Ryzen 9 7950X",
        graphics: "NVIDIA RTX 4090",
        ram: "128 GB DDR5",
        storage: "NVMe SSD 2-4 TB",
        motherboard: "X670E",
        cooling: "Liquid 280–360 mm",
        powerSupply: "1000 W",
        case: "Full-tower ATX",
      },
    },
    {
      name: "Luxury Zone",
      monitor: {
        type: "4K QD-OLED",
        refreshRate: "240 Hz",
        support: "HDR, G-Sync/FreeSync",
        usage: "4K Ultra Gaming, Streaming, AI Rendering",
      },
      system: {
        processor: "AMD Ryzen 9 9950X3D",
        graphics: "NVIDIA RTX 5090",
        ram: "128 GB DDR5",
        storage: "NVMe SSD 4 TB",
        motherboard: "TRX40",
        cooling: "Liquid 360 mm",
        powerSupply: "1200 W",
        case: "Full-tower ATX",
      },
    },
  ];

  const zone = zones.find((z) =>
    z.name.toLowerCase().includes(zoneParam.toLowerCase())
  );

  return (
    <section className={scss.Zones}>
      <div className={scss.content}>
        {zone ? <Specifications zone={zone} /> : <p>Zone not found</p>}
      </div>
    </section>
  );
};

export default Zones;
