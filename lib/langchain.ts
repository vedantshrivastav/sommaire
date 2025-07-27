import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
export async function fetchandparsePdfText(fileUrl:string){
   const resp = await fetch(fileUrl)
   const blob = await resp.blob()
   const arrayBuffer = await blob.arrayBuffer()

   const loader  = new PDFLoader(new Blob([arrayBuffer]))

   const docs = await loader.load()
   //combibe all pages
   return docs.map((doc) => doc.pageContent).join('\n')
}