import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { clinicaTeamImages } from "@/lib/demos/clinica.assets";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  specialty: string;
};

export default async function ClinicaTeamPage() {
  const t = await getTranslations("demos.clinica.team");
  const members = t.raw("members") as TeamMember[];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-2 text-slate-500">{t("subtitle")}</p>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <div key={member.id} className="text-center">
            <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-2xl">
              <Image src={clinicaTeamImages[member.id]} alt={member.name} fill className="object-cover" sizes="200px" />
            </div>
            <h3 className="mt-4 font-semibold">{member.name}</h3>
            <p className="text-sm text-sky-500">{member.role}</p>
            <p className="mt-1 text-xs text-slate-500">{member.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
