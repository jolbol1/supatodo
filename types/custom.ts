import { Database } from "./supabase";


export type Todo = Database["public"]["Tables"]["todos"]["Row"]