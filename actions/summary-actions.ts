'use server'

import connectDB from "@/db/config"
import PdfSummaryModel from "@/db/models/pdfSummary"
import { currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function deleteSummaryAction({ summary_id }: { summary_id: string }) {
  try {
    const user = await currentUser()
    if (!user?.id) {
      throw new Error('User not found')
    }

    const user_id = user.id

    await connectDB()

    const result = await PdfSummaryModel.deleteOne({
      _id: summary_id,
      user_id: user_id,
    })

    if (result.deletedCount === 0) {
      return { success: false }
    }

    revalidatePath('/dashboard') // optional: refresh UI if needed
    return { success: true }

  } catch (err) {
    console.error("Error deleting summary:", err)
    return { success: false }
  }
}
