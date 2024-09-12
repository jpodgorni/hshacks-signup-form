import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Write your code here
    } catch (err) {
        return res.status(500).json({ message: "Server Error" })
    }
}