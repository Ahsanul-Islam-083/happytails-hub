"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";



const DeleteAlert = ({ pet }) => {

    const router = useRouter();
    const handleDelete = async () => {
        const { data: tokenData } = await authClient.token();
        const token = tokenData?.token;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allPets/${pet._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                toast.success("Adoption post deleted successfully!");
                router.push("/all-pets");
                // console.log(res);
                
            }

        } catch (error) {
            console.error("Error deleting pet:", error);
            toast.error("Failed to delete adoption post.");
        }
    }

    return (
        <AlertDialog>
           
            <Button
                size="lg"
                className=" w-full text-xs rounded-2xl shadow-xl active:scale-[0.99] h-10 tracking-wide uppercase transition-all hover:scale-105 bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 text-rose-600 dark:text-rose-400"
            >
                <RiDeleteBin5Line />
                Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{pet?.petName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Adoption Post
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteAlert;