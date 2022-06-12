import { prisma } from "~/db.server"

//The ~/db.server import is importing the file at app/db.server.ts. 
// The ~ is a fancy alias to the app directory so you don't have to worry about how many 
// ./../s to include in your import as you move files around.


export async function getPosts() {
    return prisma.post.findMany()
}


export async function getPost(slug: string) {
    return prisma.post.findUnique({ where: { slug } });
}