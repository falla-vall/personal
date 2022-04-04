import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  try {
    if (req.method === "GET") {
      if (!id) {
        const projects = await prisma.project.findMany();
        if (!projects) {
          res.status(404).json({ message: "Project not found" });
        } else {
          res.status(200).json(projects);
        }
      } else {
        const project = await prisma.project.findUnique({
          where: { id: id[0] },
        });
        if (!project) {
          res.status(404).json({ message: "Project not found" });
        } else {
          res.status(200).json(project);
        }
      }
    }
    if (req.method === "POST") {
      const { name, desc, image_url, repo_url } = req.body;
      const project = await prisma.project.create({
        data: {
          name,
          desc,
          image_url,
          repo_url,
        },
      });
      res.status(201).json(project);
    }
    if (req.method === "DELETE") {
      const project = await prisma.project.delete({
        where: { id: id[0] },
      });
      res.status(200).json(project);
    }
    if (req.method === "PATCH") {
      if (!id) {
        res.status(404).json({ message: "Provide the ID!" });
      } else {
        const { name, desc, image_url, repo_url } = req.body;
        const project = await prisma.project.update({
          where: { id: id[0] },
          data: {
            name,
            desc,
            image_url,
            repo_url,
          },
        });
        res.status(200).json(project);
      }
    }
  } catch (error: any) {
    res.status(500).json({ error });
  }
}
