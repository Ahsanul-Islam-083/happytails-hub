
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
// Assuming sonner or react-hot-toast for feedback messages

const EditModal = ({ pet, user }) => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [successMsg, setSuccessMsg] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // setSuccessMsg("");

        const formData = new FormData(e.currentTarget);
        const petData = Object.fromEntries(formData.entries());

        const { data: tokenData } = await authClient.token();
        const token = tokenData?.token;

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/allPets/${pet._id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(petData)
        });

        try {
            // Simulate submission network handshake verification latency delay
            await new Promise((resolve) => setTimeout(resolve, 1400));

            // console.log(petData);


            toast.success(`"${petData.petName}" has been updated successfully!`);
            // setSuccessMsg(`"${petData.petName}" has been updated successfully!`);

            router.push(`/all-pets/${pet._id}`);
        } catch (err) {
            console.error(err);
            toast.error("Failed to update pet configuration parameters.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal>
            {/* Trigger Button to launch the Edit Modal Interface Viewport */}
            <Button
                size="lg"
                className="text-xs md:text-lg bg-[#e2b86b]/30 text-white rounded-2xl shadow-xl hover:bg-[#e2b86bd6] active:scale-[0.99] h-12 tracking-wide uppercase transition-all hover:scale-105"
            >
                <Pencil size={15} />
                Edit Details
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    {/* Main frame optimized seamlessly to reflect your application's thematic parameters */}
                    <Modal.Dialog className="sm:max-w-2xl bg-white dark:bg-[#121C1E] border border-slate-200 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl">
                        <Modal.CloseTrigger />

                        <Modal.Header className="flex gap-3 items-center border-b border-slate-100 dark:border-slate-800/80 pb-4">
                            <Modal.Icon className="bg-[#45acac]/10 text-[#45acac] rounded-xl p-2 shrink-0">
                                <Pencil className="size-5" />
                            </Modal.Icon>
                            <div>
                                <Modal.Heading className="text-xl font-black text-slate-900 dark:text-white">
                                    Edit Pet Details
                                </Modal.Heading>
                                <p className="text-xs font-semibold text-slate-400 mt-0.5">
                                    Modify individual baseline properties for {pet?.petName || "this listing"}
                                </p>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default" className="bg-transparent shadow-none p-0 border-0">
                                <form className="flex flex-col gap-6 w-full" onSubmit={onSubmit}>

                                    {/* Row 1: Pet Name & Species Option Matrix */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                        <TextField isRequired name="petName" defaultValue={pet?.petName}>
                                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                                Pet Name
                                            </Label>
                                            <Input placeholder="e.g. Buddy" className="w-full" />
                                        </TextField>

                                        <div className="flex flex-col w-full">
                                            <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                                                Species
                                            </label>
                                            <select
                                                required
                                                name="species"
                                                defaultValue={pet?.species || ""}
                                                className="w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#45acac] dark:focus:border-[#45acac] transition-all text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                                            >
                                                <option value="" disabled>Select species</option>
                                                <option value="Dog">Dog</option>
                                                <option value="Cat">Cat</option>
                                                <option value="Bird">Bird</option>
                                                <option value="Rabbit">Rabbit</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Row 2: Breed & Age Matrix Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                        <TextField isRequired name="breed" defaultValue={pet?.breed}>
                                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                                Breed
                                            </Label>
                                            <Input placeholder="e.g. Labrador Retriever" />
                                        </TextField>

                                        <TextField isRequired name="age" defaultValue={pet?.age}>
                                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                                Age (years)
                                            </Label>
                                            <Input placeholder="e.g. 2" />
                                        </TextField>
                                    </div>

                                    {/* Row 3: Gender Selector Setup and Vaccination Matrix */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                        <div className="flex flex-col w-full">
                                            <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                                                Gender
                                            </label>
                                            <select
                                                required
                                                name="gender"
                                                defaultValue={pet?.gender || ""}
                                                className="w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#45acac] transition-all text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                                            >
                                                <option value="" disabled>Select gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>

                                        <div className="flex flex-col w-full">
                                            <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                                                Vaccination Status
                                            </label>
                                            <select
                                                required
                                                name="vaccinationStatus"
                                                defaultValue={pet?.vaccinationStatus || ""}
                                                className="w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#45acac] transition-all text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                                            >
                                                <option value="" disabled>Select status</option>
                                                <option value="Fully Vaccinated">Fully Vaccinated</option>
                                                <option value="Partially Vaccinated">Partially Vaccinated</option>
                                                <option value="Not Vaccinated">Not Vaccinated</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Row 4: Image URL Field */}
                                    <TextField isRequired name="imageUrl" type="url" defaultValue={pet?.imageUrl} className="w-full">
                                        <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                            Pet Image URL
                                        </Label>
                                        <Input placeholder="https://i.ibb.co/..." className="w-full" />
                                    </TextField>

                                    {/* Row 5: Health Status Selection and Location Metadata fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                        <div className="flex flex-col w-full">
                                            <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                                                Health Status
                                            </label>
                                            <select
                                                required
                                                name="healthStatus"
                                                defaultValue={pet?.healthStatus || ""}
                                                className="w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#45acac] transition-all text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                                            >
                                                <option value="" disabled>Select health status</option>
                                                <option value="Healthy">Healthy</option>
                                                <option value="Undergoing Treatment">Undergoing Treatment</option>
                                                <option value="Special Needs">Special Needs</option>
                                            </select>
                                        </div>

                                        <TextField isRequired name="location" defaultValue={pet?.location}>
                                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                                Location
                                            </Label>
                                            <Input placeholder="e.g. New York, NY" />
                                        </TextField>
                                    </div>

                                    {/* Grid Row 6: Adoption Fee & Contact Owner Matrix Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                        <TextField isRequired name="adoptionFee" type="number" defaultValue={pet?.adoptionFee}>
                                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                                Adoption Fee ($) — 0 for free
                                            </Label>
                                            <Input placeholder="0" className="w-full" />
                                        </TextField>

                                        <TextField isRequired name="ownerEmail" type="email" value={pet?.ownerEmail || user?.email}>
                                            <Label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 block">
                                                Owner Email
                                            </Label>
                                            <Input placeholder="owner@example.com" className="w-full" />
                                        </TextField>
                                    </div>

                                    {/* Row 7: Description Box */}
                                    <div className="flex flex-col w-full">
                                        <label className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            required
                                            name="description"
                                            rows={4}
                                            defaultValue={pet?.description}
                                            placeholder="Describe the pet's personality..."
                                            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-[#45acac] transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700/30"
                                        />
                                    </div>

                                    {/* Action Layout Panel Footer */}
                                    <div className="flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800 pt-6 mt-4 w-full">
                                        <Button
                                            slot="close"
                                            variant="light"
                                            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold rounded-xl px-5"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            isLoading={isSubmitting}
                                            className="bg-[#45acac] text-white font-bold px-6 rounded-xl shadow-md hover:shadow-xl dark:shadow-none transition-all duration-200 hover:-translate-y-0.5"
                                        >
                                            {isSubmitting ? "Saving Changes..." : "Save Changes"}
                                        </Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditModal;