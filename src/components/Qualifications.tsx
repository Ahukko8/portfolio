import { qualifications } from "@/data/qualificationData";
import Image from "next/image";
import { Heading } from "./Heading";

export function Qualifications() {
  return (
    <section id="qualifications" className="scroll-mt-28">
      <Heading
        title="Qualifications"
        desc="My Qualifications and Certificates"
      />
      <div className="grid mb:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualifications.map((qualification) => {
          return (
            <QualificationCard
              key={qualification.title}
              qualification={qualification}
            />
          );
        })}
      </div>
    </section>
  );
}

interface IQualificationCard {
  qualification: (typeof qualifications)[0];
}

function QualificationCard({ qualification }: IQualificationCard) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden">
      <div>
        <Image
          src={qualification.image}
          alt={qualification.title}
          width={400}
          height={400}
        />
      </div>
      <div className="p-4">
        <p className="font-title tracking-wider text-4xl uppercase">
          {qualification.title}
        </p>
        <p className="text-zinc-400 mb-16">{qualification.desc}</p>
      </div>
    </div>
  );
}
