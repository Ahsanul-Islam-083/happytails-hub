

import AdoptionRequestCard from '@/components/AdoptionRequestCard';
import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyRequests = async () => {

    
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const email = user?.email;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });


    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-requests/${email}`, {
        headers: {
            authorization: `Bearer ${token}` 
        },

    });

    const requests = await res.json();
    console.log(requests);
    

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white my-4 border-b border-slate-200 dark:border-slate-800/80 pb-3.5">
                My <span className="text-[#45acac]">Requests</span>
            </h1>

            <div className='space-y-2'>
                {requests.length === 0 ? (
                    <p className="text-slate-500">You have no adoption requests yet.</p>
                ) : (
                    requests.map((request) => (
                        
                        <AdoptionRequestCard key={request._id} request={request} id={request._id} token={token} />
                    ))
                )}
            </div>
        </div>
    );
};

export default MyRequests;
