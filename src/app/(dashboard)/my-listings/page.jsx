import ListingPetCard from '@/components/ListingPetCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyListings = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const userId = session?.user?.id;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/myPostsList/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const postedPets = await res.json()
    const totalListings = postedPets?.length || 0
    
    console.log(postedPets);
    

    return (
        <div>
            <div className=''>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
                    My <span className="text-[#45acac]">Listings</span>
                </h1>
                <div className='flex flex-col md:flex-row justify-between gap-2 md:gap-8 my-8'>
                    <div className='border border-[#e2b86b] text-center rounded-2xl py-4 w-full'>
                        <p className='font-semibold text-lg text-[#45acac]'>
                            {totalListings}
                        </p>
                        <p>Total Listings</p>
                    </div>
                    <div className='border border-[#e2b86b] text-center rounded-2xl py-4 w-full'>
                        <p className='font-semibold text-lg text-[#45acac]'>
                            5
                        </p>
                        <p>Available</p>
                    </div>
                    <div className='border border-[#e2b86b] text-center rounded-2xl py-4 w-full'>
                        <p className='font-semibold text-lg text-[#45acac]'>
                            3
                        </p>
                        <p>Adopted</p>
                    </div>
                </div>
            </div>
            <div className='space-y-6'>
                {
                    postedPets.map(pet=><ListingPetCard key={pet?._id} pet={pet} user={user} />)
                }
                
            </div>
        </div>
    );
};

export default MyListings;