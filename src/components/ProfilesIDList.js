import React from "react";
import { Cards } from "./Cards";

export const ProfilesIDList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 place-items-center md:grid-cols-2 lg:grid-cols-2">
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Dr. Abdul Aabid"
        position="Post-Doctoral Fellowship"
        college="Engineering - Production and Manufacture Engineering - CE"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Mr. Muhammad Abbasi"
        position="Lecturer"
        college="Resignations - Resignations"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Dr. Afsina Abbasi"
        position="Faculty Member"
        college="Architecture & Design - Interior Design - CAD"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Dr. Dalia Kadry"
        position="Assistant Professor"
        college="Law - Law - CL"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Dr. Donia Mohamed"
        position="Assistant professor"
        college="Architecture & Design - Interior Design - CAD"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Dr. Amal Abbas Abdelsattar"
        position="Assistant Professor- Arch Department"
        college="Architecture & Design - Architecture - CAD"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Dr. Abdelhakim Abdelhadi"
        position="MEM Director, Professor"
        college="Engineering - Production and Manufacture Engineering - CE"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Prof.Dr. Thabet Abdeljawad"
        position="Research Professor"
        college="Humanities & Sciences - Mathematics and Sciences - CHS"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Dr. Mohamed Abdelkader"
        position="Senior Researcher"
        college="Computer and Information Sciences - Computer Science - CCIS"
      />
      <Cards
        picture="https://facultyportal.psu.edu.sa/assets/img/fp.png"
        name="Dr. Tamer Sebaey"
        position="Professor"
        college="Engineering - Production and Manufacture Engineering - CE"
      />
    </div>
  );
};
