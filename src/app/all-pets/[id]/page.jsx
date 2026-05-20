// import Image from "next/image";
// import { Button } from "@heroui/react";
// import {
//     MapPin,
//     DollarSign,
//     Heart,
//     ArrowLeft,
//     ShieldCheck,
//     Activity,
//     Calendar,
//     User2
// } from "lucide-react";
// import Link from "next/link";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
// import EditModal from "@/components/EditModal";
// import DeleteAlert from "@/components/DeleteAlert";

// const PetDetails = async ({ params }) => {

//     const session = await auth.api.getSession({
//         headers: await headers()
//     });
//     const user = session?.user;


//     const { id } = await params;

//     const { token } = await auth.api.getToken({
//         headers: await headers()
//     });

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allPets/${id}`, {
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     });
//     const pet = await res.json();

//     const isOwner = user.email === pet.ownerEmail;
//     // console.log(isOwner,"ouser");



//     return (
//         <main className="min-h-screen bg-[#f1f5f9] dark:bg-[#0b0f19] py-12 px-4 md:px-8 lg:px-12 transition-colors duration-300 text-left">
//             <div className="max-w-6xl mx-auto">

//                 {/* Back Navigation Trigger Bar Link */}
//                 <Link href="/all-pets">
//                     <button
//                         className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#45acac] dark:hover:text-[#45acac] mb-8 transition-colors group"
//                     >
//                         <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
//                         Back to All Pets
//                     </button>
//                 </Link>

//                 {/* Master Profile Container Layout */}
//                 <div className="bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">

//                     {/* LEFT CONTAINER: High-Resolution Visual Aspect Mask Showcase */}
//                     <div className="relative lg:col-span-5 min-h-87.5 sm:min-h-112.5 lg:min-h-full bg-slate-900">
//                         <Image
//                             src={pet.imageUrl}
//                             alt={pet.petName || "Pet Image"}
//                             fill
//                             priority
//                             className="object-cover"
//                         />
//                         {/* FIXED: Swapped bg-linear-to-t to stable bg-gradient-to-t to prevent hydration/script injection crashes */}
//                         <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent md:hidden" />
//                     </div>

//                     {/* RIGHT CONTAINER: Core Content & Technical Parameters Listing Specification */}
//                     <div className="p-6 sm:p-8 lg:p-12 lg:col-span-7 flex flex-col justify-between">
//                         <div>
//                             {/* Header Details Segment Tagline Info */}
//                             <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
//                                 <div>
//                                     <span className="text-[11px] font-extrabold text-[#e2b86b] bg-[#e2b86b]/10 px-3 py-1 rounded-md border border-[#e2b86b]/20 tracking-wider uppercase">
//                                         🐾 {pet.species} Profile
//                                     </span>
//                                     <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mt-3">
//                                         {pet.petName}
//                                     </h1>
//                                 </div>

//                                 {/* Cost Specification Layout Badge */}
//                                 <div className="flex items-center text-[#e2b86b] dark:text-[#45acac] font-black text-xl bg-[#45acac]/10 dark:bg-[#e2b86b]/5 px-4 py-2 rounded-xl border border-slate-200 dark:border-[#e2b86b]/10 shadow-sm">
//                                     <DollarSign size={18} className="-mr-0.5 shrink-0" />
//                                     <span>{pet.adoptionFee === 0 ? "Free" : `${pet.adoptionFee}`}</span>
//                                 </div>
//                             </div>

//                             {/* Geo-Location Index */}
//                             <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8">
//                                 <MapPin size={16} className="text-[#45acac] shrink-0" />
//                                 <span>{pet.location}</span>
//                             </div>

//                             {/* TECHNICAL PARAMETERS MATRIX DATA GRID */}
//                             <div className="grid grid-cols-2 gap-4 mb-8">
//                                 <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
//                                     <Activity size={18} className="text-[#45acac]" />
//                                     <div>
//                                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Breed / Type</p>
//                                         <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold truncate">{pet.breed}</p>
//                                     </div>
//                                 </div>

//                                 <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
//                                     <Calendar size={18} className="text-[#e2b86b]" />
//                                     <div>
//                                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Age Parameter</p>
//                                         <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold">{pet.age} {Number(pet.age) === 1 ? "Year" : "Years"}</p>
//                                     </div>
//                                 </div>

//                                 <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
//                                     <User2 size={18} className="text-pink-400" />
//                                     <div>
//                                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Gender Orientation</p>
//                                         <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold">{pet.gender}</p>
//                                     </div>
//                                 </div>

//                                 <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
//                                     <ShieldCheck size={18} className="text-emerald-400" />
//                                     <div>
//                                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Medical Status</p>
//                                         <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold truncate">{pet.healthStatus || "Healthy"}</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* BIO / DESCRIPTION STATEMENT PARAGRAPH BLOCK */}
//                             <div className="mb-8">
//                                 <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
//                                     About {pet.petName}
//                                 </h4>
//                                 <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/20 p-4 rounded-xl">
//                                     {pet.description}
//                                 </p>
//                             </div>

//                             {/* ADDITIONAL METADATA CHIPS FLAG ROW */}
//                             <div className="flex flex-wrap gap-2.5 mb-8">
//                                 <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg">
//                                     🛡️ Health: <strong className="text-slate-800 dark:text-slate-200 ml-0.5">{pet.healthStatus || "Checked"}</strong>
//                                 </span>
//                                 <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg">
//                                     💉 Clinical: <strong className="text-slate-800 dark:text-slate-200 ml-0.5">{pet.vaccinationStatus || "Up to Date"}</strong>
//                                 </span>
//                             </div>
//                         </div>

//                         {/* LOWER INTERACTIVE CALL TO ACTION CONTROL BUTTON */}

//                         {
//                             !isOwner ? 

//                             // {I want the form here}

//                             : <div>
//                                 <p className="text-center md:text-md text-red-500 dark:text-red-400 p-3 border border-red-600 dark:border-red-500 my-3 rounded-2xl bg-red-200/40 dark:bg-red-100/30">As you are the owner of this pet, so you can not request adoption for it. But you can update its details or delete it at any time.</p>
//                                 <div className="flex flex-col md:flex-row justify-between gap-3">
//                                     <EditModal className="w-full md:w-auto" pet={pet} user={user} />
//                                     <DeleteAlert className="w-full md:w-auto" pet={pet} />
//                                 </div>
//                             </div>
//                         }


//                     </div>

//                 </div>
//             </div>
//         </main>
//     );
// };

// export default PetDetails;



import Image from "next/image";
import {
    MapPin,
    DollarSign,
    ArrowLeft,
    ShieldCheck,
    Activity,
    Calendar,
    User2
} from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import EditModal from "@/components/EditModal";
import DeleteAlert from "@/components/DeleteAlert";
import AdoptionSection from "@/components/AdoptionSection";
import { LuPawPrint } from "react-icons/lu";

const PetDetails = async ({ params }) => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allPets/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const pet = await res.json();

    const isOwner = user?.email === pet?.ownerEmail;

    return (
        <main className="min-h-screen bg-[#f1f5f9] dark:bg-[#0b0f19] py-8 px-4 md:px-8 lg:px-12 transition-colors duration-300 text-left">
            <div className="max-w-6xl mx-auto">

                {/* Back Navigation Trigger Bar Link */}
                <Link href="/all-pets">
                    <button
                        className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#45acac] dark:hover:text-[#45acac] mb-6 transition-colors group"
                    >
                        <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                        Back to All Pets
                    </button>
                </Link>

                {/* Master Presentation Workspace Card */}
                <div className="flex flex-col gap-6 w-full">

                    {/* TOP SECTION: Full-Width Visual Banner Frame */}
                    <div className="group relative w-full h-65 sm:h-85 md:h-105 rounded-3xl overflow-hidden shadow-md bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                        <Image
                            src={pet.imageUrl}
                            alt={pet.petName || "Pet Image"}
                            fill
                            priority
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                    </div>

                    {/* BOTTOM SECTION: Split Specification & Interactive Form Columns Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">

                        {/* LEFT COLUMN: Core Content Parameter Specifications */}
                        <div className="bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full">
                            <div>
                                {/* Header Info & Badges */}
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <div>
                                        <span className="text-[11px] font-extrabold text-[#e2b86b] bg-[#e2b86b]/10 px-3 py-1 rounded-md border border-[#e2b86b]/20 tracking-wider uppercase">
                                            🐾 {pet.species} Profile
                                        </span>
                                        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mt-3">
                                            {pet.petName}
                                        </h1>
                                    </div>

                                    {/* Cost Badge */}
                                    <div className="flex items-center text-[#e2b86b] dark:text-[#45acac] font-black text-xl bg-[#45acac]/10 dark:bg-[#e2b86b]/5 px-4 py-2 rounded-xl border border-slate-200 dark:border-[#e2b86b]/10 shadow-sm">
                                        <DollarSign size={18} className="-mr-0.5 shrink-0" />
                                        <span>{pet.adoptionFee === 0 ? "Free" : `${pet.adoptionFee}`}</span>
                                    </div>
                                </div>

                                {/* Geo-Location */}
                                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6">
                                    <MapPin size={16} className="text-[#45acac] shrink-0" />
                                    <span>{pet.location}</span>
                                </div>

                                {/* Technical Metric Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
                                        <LuPawPrint size={18} className="text-[#45acac]" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Breed / Type</p>
                                            <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold truncate">{pet.breed}</p>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
                                        <Calendar size={18} className="text-[#e2b86b]" />
                                        <div>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Age Parameter</p>
                                            <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold">{pet.age} {Number(pet.age) === 1 ? "Year" : "Years"}</p>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
                                        <User2 size={18} className="text-pink-400" />
                                        <div>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Gender Orientation</p>
                                            <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold">{pet.gender}</p>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/40 p-3.5 rounded-xl flex items-center gap-3">
                                        <ShieldCheck size={18} className="text-emerald-400" />
                                        <div className="min-w-0">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Medical Status</p>
                                            <p className="text-sm text-slate-800 dark:text-slate-200 font-extrabold truncate">{pet.healthStatus || "Healthy"}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description Paragraph */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                                        About {pet.petName}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/20 p-4 rounded-xl">
                                        {pet.description}
                                    </p>
                                </div>

                                {/* Meta Tag Chips */}
                                <div className="flex flex-wrap gap-2.5">
                                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg">
                                        🛡️ Health: <strong className="text-slate-800 dark:text-slate-200 ml-0.5">{pet.healthStatus || "Checked"}</strong>
                                    </span>
                                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg">
                                        💉 Clinical: <strong className="text-slate-800 dark:text-slate-200 ml-0.5">{pet.vaccinationStatus || "Up to Date"}</strong>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Interactive Form / Owner Admin Console */}
                        <div className="w-full">
                            {!isOwner ? (
                                <AdoptionSection pet={pet} user={user} token={token} />
                            ) : (
                                <div className="bg-rose-500/5 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-3xl p-6 sm:p-8 shadow-xl text-center">
                                    <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mb-5 max-w-md mx-auto">
                                        As you are the owner of this pet, you cannot request adoption for it. But you can update its details or delete it at any time.
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                                        <EditModal className="w-full sm:w-auto" pet={pet} user={user} />
                                        <DeleteAlert className="w-full sm:w-auto" pet={pet} />
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default PetDetails;