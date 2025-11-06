// src/data/vehicles.js

// --- Image loader (works with 1..11, JPG/JPEG/PNG, any case) ---------------
const ALL = import.meta.glob("../assets/*/*.{jpg,jpeg,JPG,JPEG,png,PNG}", { eager: true });

function loadImages(folder) {
  const imgs = [];
  // Try 1..11 so you can add more later; if only 1..4 exist, that's fine.
  for (let i = 1; i <= 11; i++) {
    const candidates = [
      `../assets/${folder}/${i}.JPG`,
      `../assets/${folder}/${i}.JPEG`,
      `../assets/${folder}/${i}.jpg`,
      `../assets/${folder}/${i}.jpeg`,
      `../assets/${folder}/${i}.png`,
      `../assets/${folder}/${i}.PNG`,
    ];
    for (const key of candidates) {
      if (ALL[key]?.default) {
        imgs.push(ALL[key].default);
        break;
      }
    }
  }
  return imgs;
}

// --- Small helpers for filler fields ---------------------------------------
const trims = ["SE", "Sport", "Limited", "XLT", "LE", "Premium", "Base", ""];
const bodies = ["Sedan", "SUV", "Truck", "Coupe", "Wagon", "Hatchback", ""];
const drivetrains = ["FWD", "RWD", "AWD", "4WD", ""];
const transmissions = ["Automatic", "Manual", "CVT", ""];
const engines = ["I4", "V6", "V8", "Turbo I4", "Hybrid", ""];
const pick = (a) => a[Math.floor(Math.random() * a.length)];

// --- Your vehicles: folder -> exact specs you provided ---------------------
// Folder names MUST match your /src/assets subfolders exactly (typos included).
const base = [
  { folder: "2021TeslaModelY", year: 2021, make: "Tesla", model: "Model Y Long Range", price: 24599, miles: 63000 },
  { folder: "2021BMWX3Xdrive30i", year: 2021, make: "BMW", model: "X3 xDrive30i", price: 24999, miles: 51000 },
  { folder: "2018FordMustang", year: 2018, make: "Ford", model: "Mustang GT Premium PP1", price: 29999, miles: 49000 },
  
  { folder: "2019InfiniteQ50Luxe", year: 2019, make: "Infiniti", model: "Q50 3.0t LUXE Sedan 4D", price: 13599, miles: 98000 },
  { folder: "2014MercedesC-class", year: 2014, make: "Mercedes-Benz", model: "C-Class C 350 4MATIC Coupe 2D", price: 12999, miles: 105000 },
  { folder: "2017DodgeChallenger", year: 2017, make: "Dodge", model: "Challenger Scat Pack Shaker Coupe 2D", price: 21999, miles: 76000 },
  { folder: "2015Chrysler300sedan", year: 2015, make: "Chrysler", model: "300S Sedan 4D", price: 6999, miles: 160000 },
  { folder: "2014FordFusion", year: 2014, make: "Ford", model: "Fusion", price: 5599, miles: 124000 },
  { folder: "2019BMW750i", year: 2019, make: "BMW", model: "750i", price: 27999, miles: 45000 },
  { folder: "2022 JeepGrandCherokeeLimited", year: 2022, make: "Jeep", model: "Grand Cherokee Limited", price: 21999, miles: 95000 },

  { folder: "2015Chrysler300sedan", year: 2016, make: "Chrysler", model: "300 Limited Sedan 4D", price: 8999, miles: 122000 },

  { folder: "2012Chrysler200", year: 2012, make: "Chrysler", model: "200", price: 5299, miles: 100000 },
  

  { folder: "2015NissanAltima", year: 2015, make: "Nissan", model: "Altima", price: 8000, miles: 80000 },
  { folder: "2020NissanAltima", year: 2020, make: "Nissan", model: "Altima", price: 17000, miles: 44000 },

  { folder: "2011ChevroletTraverse", year: 2011, make: "Chevrolet", model: "Traverse", price: 4500, miles: 110000 },
  { folder: "2012ChevroletMalibu", year: 2012, make: "Chevrolet", model: "Malibu", price: 4999, miles: 80000 },
  { folder: "2016ChevroletMalibu", year: 2016, make: "Chevrolet", model: "Malibu LT", price: 8599, miles: 98000 },
  { folder: "2023ChevroletMalibu", year: 2023, make: "Chevrolet", model: "Malibu", price: 11999, miles: 31000 },
  { folder: "2013Chrysler200", year: 2015, make: "Chrysler", model: "200", price: 7200, miles: 90000 }, // uses 2013 folder images

  { folder: "2013HyundaiSonata", year: 2013, make: "Hyundai", model: "Sonata", price: 5599, miles: 120000 },
  { folder: "2015HyundaiGenesis", year: 2015, make: "Hyundai", model: "Genesis 5.0", price: 6999, miles: 149000 },

  { folder: "2013HondaPilot", year: 2013, make: "Honda", model: "Pilot", price: 7599, miles: 140000 },
  { folder: "2018HondaAccord", year: 2018, make: "Honda", model: "Accord EX-L Sedan 4D", price: 12999, miles: 121000 },

  { folder: "2015DodgeCharger", year: 2015, make: "Dodge", model: "Charger", price: 14999, miles: 49000 },
  { folder: "2015DodgeChargerBlue", year: 2015, make: "Dodge", model: "Charger (Blue)", price: 9599, miles: 140000 },
  
  { folder: "2016FordEscape", year: 2016, make: "Ford", model: "Escape", price: 8999, miles: 120000 }, // folder typo "Forde"
  { folder: "2018FordFusion", year: 2018, make: "Ford", model: "Fusion SE Sedan 4D", price: 6899, miles: 115000 },
  

  { folder: "2014InfiniteQ50", year: 2014, make: "Infiniti", model: "Q50", price: 11599, miles: 94000 }, // folder spelled "Infinite"
  

  { folder: "2015Nissan370z", year: 2015, make: "Nissan", model: "370Z", price: 16999, miles: 81000 },

  
  { folder: "2013MercedesGl-Class", year: 2013, make: "Mercedes-Benz", model: "GL550 4MATIC", price: 6999, miles: 95000 },

  

  

  { folder: "2024ToyotaCamry", year: 2024, make: "Toyota", model: "Camry TRD Sedan 4D", price: 24999, miles: 22000 },
];

// --- Build final export -----------------------------------------------------
export const vehicles = base.map((v, idx) => {
  const images = loadImages(v.folder);
  return {
    id: idx + 1,
    year: v.year,
    make: v.make,
    model: v.model,
    price: v.price,
    miles: v.miles,
    image: images[0] || "",
    images,
    // lightweight filler so existing UI keeps working
    trim: pick(trims),
    body: pick(bodies),
    drivetrain: pick(drivetrains),
    transmission: pick(transmissions),
    engine: pick(engines),
    folder: v.folder,
  };
});