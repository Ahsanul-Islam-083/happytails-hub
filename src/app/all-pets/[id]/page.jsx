

import Image from "next/image";
import {
    MapPin,
    DollarSign,
    ArrowLeft,
    ShieldCheck,
    Calendar,
    User2,
    Lock
} from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import EditModal from "@/components/EditModal";
import DeleteAlert from "@/components/DeleteAlert";
import AdoptionSection from "@/components/AdoptionSection";
import { LuPawPrint } from "react-icons/lu";

const PetDetails = async ({ params, searchParams }) => {
    
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const isLoggedIn = !!user;

    const { id } = await params;
    const { intent } = await searchParams;

   l
    let token = null;
    if (isLoggedIn) {
        const tokenRes = await auth.api.getToken({
            headers: await headers()
        });
        token = tokenRes?.token;
    }

   
    const fetchHeaders = {};
    if (token) {
        fetchHeaders.authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allPets/${id}`, {
        headers: fetchHeaders
    });
    const pet = await res.json();

    
    let hasApplied = false;
    if (isLoggedIn && user?.email) {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-requests/${user.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                const userRequests = await res.json();
                hasApplied = !!userRequests.find(req => req.petId === id);
            }
        } catch (error) {
            console.log("Error fetching user requests: ", error);
        }
    }

    const isOwner = isLoggedIn && user?.email === pet?.ownerEmail;

    return (
        <main className="min-h-screen bg-[#f1f5f9] dark:bg-[#0b0f19] py-8 px-4 md:px-8 lg:px-12 transition-colors duration-300 text-left">
            <div className="max-w-6xl mx-auto">

              
                <Link href="/all-pets">
                    <button
                        className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#45acac] dark:hover:text-[#45acac] mb-6 transition-colors group"
                    >
                        <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                        Back to All Pets
                    </button>
                </Link>

               
                <div className="flex flex-col gap-6 w-full">

                  
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

                  
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">

                       
                        <div className="bg-white dark:bg-[#121C1E] border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full">
                            <div>
                               
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <div>
                                        <span className="text-[11px] font-extrabold text-[#e2b86b] bg-[#e2b86b]/10 px-3 py-1 rounded-md border border-[#e2b86b]/20 tracking-wider uppercase">
                                            🐾 {pet.species} Profile
                                        </span>
                                        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mt-3">
                                            {pet.petName}
                                        </h1>
                                    </div>

                                   
                                    <div className="flex items-center text-[#e2b86b] dark:text-[#45acac] font-black text-xl bg-[#45acac]/10 dark:bg-[#e2b86b]/5 px-4 py-2 rounded-xl border border-slate-200 dark:border-[#e2b86b]/10 shadow-sm">
                                        <DollarSign size={18} className="-mr-0.5 shrink-0" />
                                        <span>{pet.adoptionFee === 0 ? "Free" : `${pet.adoptionFee}`}</span>
                                    </div>
                                </div>

                               
                                <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6">
                                    <MapPin size={16} className="text-[#45acac] shrink-0" />
                                    <span>{pet.location}</span>
                                </div>

                              
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

                            
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                                        About {pet.petName}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/20 p-4 rounded-xl">
                                        {pet.description}
                                    </p>
                                </div>

                              
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

                        
                        <div className="w-full h-full">
                            {!isLoggedIn ? (
                               
                                <div className="bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 shadow-xl text-center flex flex-col items-center justify-center h-full min-h-[300px] transition-colors duration-300">
                                    <div className="bg-slate-200 dark:bg-slate-700/60 p-4 rounded-full mb-5 shadow-inner">
                                        <Lock className="text-slate-400 dark:text-slate-400 text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-700 dark:text-slate-300 mb-2 tracking-tight">Adoption Services Restricted</h3>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                                        Please sign in to view adoption statuses, send requests, or interact with this pet's shelter options.
                                    </p>
                                    <Link href="/login">
                                        <button className="mt-6 bg-[#45acac] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-[#3d9898] transition-all duration-200">
                                            Login to Proceed
                                        </button>
                                    </Link>
                                </div>
                            ) : isOwner ? (
                                
                                <div className="bg-rose-500/5 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-3xl p-6 sm:p-8 shadow-xl text-center h-full flex flex-col items-center justify-center min-h-75 transition-colors duration-300">
                                    <div className="bg-rose-100 dark:bg-rose-500/20 p-4 rounded-full mb-5 shadow-inner">
                                        <User2 className="text-rose-600 dark:text-rose-400 text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-rose-700 dark:text-rose-400 mb-2 tracking-tight">Owner Control Panel</h3>
                                    <p className="text-sm font-medium text-rose-600 dark:text-rose-400/80 mb-6 max-w-md mx-auto">
                                        As you are the owner of this pet, you cannot request adoption for it. But you can update its details or delete it at any time.
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
                                        <EditModal className="w-full sm:w-auto" pet={pet} user={user} />
                                        <DeleteAlert className="w-full sm:w-auto" pet={pet} />
                                    </div>
                                </div>
                            ) : pet?.status === 'adopted' ? (
                                
                                <div className="bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 shadow-xl text-center flex flex-col items-center justify-center h-full min-h-[300px] transition-colors duration-300">
                                    <div className="bg-slate-200 dark:bg-slate-700/60 p-4 rounded-full mb-5 shadow-inner">
                                        <LuPawPrint className="text-slate-400 dark:text-slate-400 text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-700 dark:text-slate-300 mb-2 tracking-tight">Happily Adopted!</h3>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                                        This wonderful pet has already found its forever home. Check out our other available pets who are still waiting!
                                    </p>
                                    <Link href="/all-pets">
                                        <button className="mt-6 bg-slate-800 dark:bg-slate-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-200">
                                            Browse Other Pets
                                        </button>
                                    </Link>
                                </div>
                            ) : hasApplied ? (
                               
                                <div className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 shadow-xl text-center flex flex-col items-center justify-center h-full min-h-[300px] transition-colors duration-300">
                                    <div className="bg-emerald-100 dark:bg-emerald-500/20 p-4 rounded-full mb-5 shadow-inner">
                                        <ShieldCheck className="text-emerald-600 dark:text-emerald-400 text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mb-2 tracking-tight">Request Sent!</h3>
                                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-500/80 max-w-sm mx-auto">
                                        Your adoption request has been submitted and is currently waiting for the owner's response. We will notify you once they make a decision.
                                    </p>
                                    <Link href="/my-requests">
                                        <button className="mt-6 bg-[#45acac]/10 text-[#45acac] dark:bg-[#45acac]/20 dark:text-[#45acac] border border-[#45acac]/30 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-[#45acac]/20 transition-all duration-200">
                                            View My Requests
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                               
                                <AdoptionSection pet={pet} user={user} token={token} />
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default PetDetails;