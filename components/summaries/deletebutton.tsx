"use client";
import { Factory, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { deleteSummaryAction } from "@/actions/summary-actions";
import { toast } from "sonner";

interface DeleteButtonProps {
  summary_id: string;
}
export default function DeleteButton({ summary_id }: DeleteButtonProps) {
  const [Open, setOpen] = useState(false);
  const handleDelete = async ({ summary_id }: DeleteButtonProps) => {
    const result = await deleteSummaryAction({ summary_id });
    if (!result.success) {
      toast("Error", {
        description: "Failed to delete summary",
      });
    }
    setOpen(false);
  };
  return (
    <Dialog open={Open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant={"ghost"}
          className="text-gray-400
     bg-gray-50 border border-gray-200 hover:text-rose-600
     hover:bg-rose-50"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Summary</DialogTitle>
          <DialogDescription>
            Are You Sure You want to delete this summary? This action can't be
            undone
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => setOpen(false)}
            variant="ghost"
            className="
     bg-gray-50 border border-gray-200 hover:text-gray-600
     hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete({ summary_id })}
            variant="destructive"
            className="bg-gray-900 hover:bg-gray-600"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
