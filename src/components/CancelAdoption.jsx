"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



const CancelAdoption = ({ token, id }) => {

    const router = useRouter();


    const handleDelete = async () => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-requests/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (res.ok) {
            toast.success("Adoption request canceled successfully!");
            router.push("/my-requests");
            // console.log(res);

        } else {
            toast.error("Failed to cancel adoption request.");
            console.log(res);
            
        }

    }



    return (
        <AlertDialog>
            {/* <Button variant="danger-soft">Delete</Button> */}
            <Button
                size="sm"
                className="w-full bg-rose-500/10 hover:bg-rose-500 text-rose-600 hover:text-white dark:bg-rose-500/20 dark:text-rose-400 dark:hover:text-white font-bold rounded-xl text-xs gap-1.5 h-9 border border-rose-500/20 dark:border-rose-500/10 transition-all duration-200"
            >
                <Trash2 size={13} />
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Adoption Request
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelAdoption;