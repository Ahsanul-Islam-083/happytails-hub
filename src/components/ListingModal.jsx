

"use client";

import { useState } from "react";
import { Users, Calendar, Mail, User, Check, X, AlertCircle, Inbox } from "lucide-react";
import { Button, Modal } from "@heroui/react";
import toast from "react-hot-toast";

const ListingModal = ({ pet, token }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [requests, setRequests] = useState([]);

    // 1. Fetch applications for this specific pet record
    const handleViewRequests = async () => {
        setIsOpen(true);
        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pet-requests/${pet._id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            if (res.ok) {
                const data = await res.json();
                setRequests(data);
            }
        } catch (err) {
            console.error("Error fetching pet requests:", err);
        }
    };

    // Simple date converter utility tool
    const formatDate = (dateStr) => {
        if (!dateStr) return "Not Configured";
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };


    // 2. patch functionalities for Approve/Reject Button
    const handleStatus = async (requestId, petId, status) => {
        const updatedRequestStatus = {
            status,
            petId
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/adopt-status/${requestId}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedRequestStatus)
            })

            const upDatedData = await res.json()

            if (upDatedData) {
                toast.success(`Request successfully ${status}!`)
                setRequests(prev => prev.map(r=>{
                    if (r._id === requestId) {
                        return {...r, status:status}
                    } else if(status === 'approved'){
                        return {...r, status: 'rejected'};
                    }else{
                        return r;
                    }
                }))
            }

        } catch (error) {
            toast.error('Something went wrong');
            console.log(error,"abcd");
            
        }
    }

    return (
        <>
            {/* Trigger Button */}
            <Button
                size="sm"
                onClick={handleViewRequests}
                className="flex-1 sm:flex-initial bg-[#45acac] text-white hover:bg-[#3ba0a0] rounded-xl  h-9 shadow-md shadow-[#45acac]/10"
            >
                <Inbox size={14} className="mr-1" />
                Requests
            </Button>

            {/* Modal Setup */}
            <Modal isOpen={isOpen} onOpenChange={setIsOpen} scrollBehavior="inside">
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-2xl bg-white dark:bg-[#121C1E] border border-slate-200 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl text-left">
                            <Modal.CloseTrigger />

                            {/* Header Section */}
                            <Modal.Header className="flex gap-3 items-center border-b border-slate-200 dark:border-slate-800/80 pb-4 p-6">
                                <Modal.Icon className="bg-[#45acac]/10 text-[#45acac] rounded-xl p-2 shrink-0">
                                    <Users className="size-5" />
                                </Modal.Icon>
                                <div className="min-w-0 text-center">
                                    <Modal.Heading className="text-xl font-black text-slate-900 dark:text-white truncate">
                                        Adoption Requests for {pet?.petName}
                                    </Modal.Heading>

                                </div>
                            </Modal.Header>

                            {/* Modal Body View Panel */}
                            <Modal.Body className="p-6">
                                {requests.length === 0 ? (
                                    /* Empty state fallback layout */
                                    <div className="flex flex-col items-center justify-center py-12 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/10">
                                        <AlertCircle className="text-slate-500 dark:text-slate-700 mb-2.5" size={28} />
                                        <h5 className="text-sm font-bold text-slate-700 dark:text-slate-300">No requests filed</h5>
                                        <p className="text-xs text-slate-500 mt-1 max-w-xs">No users have initiated requests for this pet profile yet.</p>
                                    </div>
                                ) : (
                                    /* Main Applications List Grid */
                                    <div className="space-y-4 max-h-100 overflow-y-auto pr-1">
                                        {requests.map((req) => {
                                            // Handle status configuration variables with normal if/else statements
                                            let currentStatusText = "Pending";
                                            let badgeStyle = "bg-[#e2b86b]/10 text-[#d4a343] border-[#e2b86b]/20";

                                            if (req.status?.toLowerCase() === "approved") {
                                                currentStatusText = "Approved";
                                                badgeStyle = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
                                            } else if (req.status?.toLowerCase() === "rejected") {
                                                currentStatusText = "Rejected";
                                                badgeStyle = "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
                                            }

                                            return (
                                                <div key={req._id} className="border border-slate-200/70 dark:border-slate-800 rounded-2xl p-4 bg-slate-50/50 dark:bg-slate-900/40"  >

                                                    <div

                                                        className=" flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2"
                                                    >
                                                        {/* User Details Stack */}
                                                        <div className="space-y-2 min-w-0 flex-1">
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-slate-500 dark:text-slate-400">
                                                                <div className="flex items-center gap-2 flex-wrap">
                                                                    <div className="flex items-center gap-1.5 text-slate-800 dark:text-white text-[15px]">
                                                                        <User size={14} className="text-[#45acac]" />
                                                                        <span>{req.userName || "Anonymous Guest"}</span>
                                                                    </div>
                                                                    <span className={`text-[12px] tracking-wider uppercase border px-2 py-0.5 rounded-md ${badgeStyle}`}>
                                                                        {currentStatusText}
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-1.5">
                                                                    <Calendar size={13} className="text-slate-400 shrink-0" />
                                                                    <span>Requested: {formatDate(req.requestDate)}</span>
                                                                </div>
                                                            </div>

                                                            {/* Info Row Matrix */}
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-slate-500 dark:text-slate-400">
                                                                <div className="flex items-center gap-1.5 truncate">
                                                                    <Mail size={13} className="text-slate-400 shrink-0" />
                                                                    <span className="truncate">{req.userEmail}</span>
                                                                </div>
                                                                <div className="flex items-center gap-1.5">
                                                                    <Calendar size={13} className="text-slate-400 shrink-0" />
                                                                    <span>Pickup: <strong className="text-slate-700 dark:text-slate-200">{formatDate(req.pickupDate)}</strong></span>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    {/* Pure View-Only Actions (Shows only when status is pending) */}
                                                    {req.status?.toLowerCase() === "pending" && (
                                                        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:shrink-0 self-center md:self-end w-full md:w-auto">
                                                            {/* Reject UI Button */}
                                                            <Button
                                                                onClick={() => handleStatus(req._id, req.petId, 'rejected')}
                                                                size="sm"
                                                                className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 border border-rose-500/20 rounded-xl h-8 w-full"
                                                            >
                                                                <X size={15} /> Reject
                                                            </Button>

                                                            {/* Approve UI Button */}
                                                            <Button
                                                                onClick={() => handleStatus(req._id, req.petId, 'approved')}
                                                                size="sm"
                                                                className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 border border-emerald-500/20 rounded-xl h-8 w-full"
                                                            >
                                                                <Check size={15} />
                                                                Approve
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </Modal.Body>

                            {/* Footer Container Tray */}
                            <div className="flex items-center justify-end border-t border-slate-200 dark:border-slate-800 pt-4 p-6 w-full">
                                <Button
                                    onClick={() => setIsOpen(false)}
                                    variant="light"
                                    className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border rounded-xl px-5 h-9"
                                >
                                    Close Window
                                </Button>
                            </div>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </>
    );
};

export default ListingModal;