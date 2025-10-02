import { account } from "@/lib/appwrite"
import { OAuthProvider } from "appwrite"


export const signInUser = async () => {
    account.createOAuth2Session({
        provider: OAuthProvider.Google,
        success: `${process.env.NEXT_PUBLIC_URL}`, // redirect here on success
        failure: `${process.env.NEXT_PUBLIC_URL}`, // redirect here on failure
        // scopes: ['repo', 'user'] // scopes (optional)
    })
}

export const getSession = async () => {
    const session = await account.getSession({
        sessionId: 'current'
    });
    return session;
}