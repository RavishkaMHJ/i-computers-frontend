import { createClient } from "@supabase/supabase-js";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrYWhweGNkaGdvc3dzZ3VydHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNDI0NjgsImV4cCI6MjA4NDgxODQ2OH0.titEaIIX-QguIKFl0ZKfUX9u9RIgJmJskkYZXWSOr6k"
const supabaseUrl = "https://wkahpxcdhgoswsgurtyq.supabase.co"

const supabase = createClient(supabaseUrl,supabaseKey)

export default function uploadFile(file){
    return new Promise(
        (resolve, reject) => {
            if (file == null){
                reject("No file provided")
                return
            }

            const timestamp = new Date().getTime()
            const fileName = timestamp + "-"+file.name

            supabase.storage.from("Product Images").upload(fileName , file , {
                upsert : false,
                cacheControl: 3600
            }).then(
                () => {
                    const url = supabase.storage.from("Product Images").getPublicUrl(fileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                () => {
                    reject("Failed to upload file")
                }
            )
        }
    )
}