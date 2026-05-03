import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://qurbani-hat.vercel.app" 
    // http://localhost:3000
    // https://qurbani-hat.vercel.app
})

export const { signIn, signUp, useSession } = createAuthClient()