import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPA_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function uploadProduct () {

    const [description, setDescription] = useState("")
    
    useEffect(() => {
        const fetchProduct = async () => {
          const { data, error } = await supabase.from("products").select().eq("id", "1");
          if (error) {
            console.log(error)
          }
          if (data) {
            //setDescription(data)
            console.log(data)
          }
        }
        fetchProduct()
      }, [])
}

export default uploadProduct;